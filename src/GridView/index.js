import React, {Component} from 'react'
import {
    View,
    Text,
    Animated,
    PanResponder,
} from 'react-native'
import {observer} from 'mobx-react'

import TouchableView from '../TouchableView'
import Theme from '../Theme'
import uuid from 'uuid'

@observer
class GridView extends Component {

    componentWillReceiveProps(nextProps) {
        this.setState({
            draggable: nextProps.draggable,
            dataSource: nextProps.dataSource
        })
        // console.log(nextProps.dataSource)
    }

    constructor(props) {
        super(props);
        this.state = {
            width: 300,
            draggable: this.props.draggable,
            dataSource: this.props.dataSource
        }
    }

    render() {
        // let children = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let children = this.state.dataSource
        let itemCount = children.length;
        let column = 4;
        let row = Math.ceil(itemCount / column)
        let width = this.state.width;
        let itemWidth = width / column;
        let itemHeight = itemWidth;
        let height = itemWidth * row;
        // console.log(itemCount, row, column)

        this.width = width;
        this.height = height;
        this.itemCount = itemCount;
        this.column = column;
        this.itemWidth = itemWidth;
        this.itemHeight = itemHeight

        this.itemInfoList = children.map((item, index) => {
            let itemSortIndex = item.sortIndex === undefined ? index : item.sortIndex;
            let left = itemSortIndex % column * itemWidth;
            let top = Math.floor(itemSortIndex / column) * itemHeight;
            return {
                left: new Animated.Value(left),
                leftStatic: left,
                top: new Animated.Value(top),
                topStatic: top,
                index: index,//初始index
                sortIndex: itemSortIndex,
                itemSource: item
            }
        });

        this.itemWidth = itemWidth;
        return (
            <View
                style={{
                    width: width,
                    height: height,
                    backgroundColor: "#EEE",
                }}
                // onLayout={(e) => console.log(e.nativeEvent)}
            >
                <View style={styles.fillParent}>
                    {this.itemInfoList.map(this.renderItem)}
                </View>

            </View>
        )
    }

    renderItem = (item, index) => {
        return <Animated.View
            style={{
                width: this.itemWidth, height: this.itemHeight,
                position: 'absolute',
                left: item.left,
                top: item.top
            }}
            {...this.createItemPanResponder(item).panHandlers}
            key={uuid.v4()}>
            {this.props.itemRender(item.itemSource, index)}
        </Animated.View>
    };


    pressedTime;
    longPressDragCancel;
    longPressDrag;

    createItemPanResponder = (item) => PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => {
            console.log('down')
            return this.state.draggable
        },
        onStartShouldSetPanResponderCapture: (evt, gestureState) => {
            console.log('down Capture')//拦截后子组件收不到事件
            this.pressedTime = Date.now();
            this.longPressDrag = false;
            this.longPressDragCancel = false;
            return this.state.draggable
        },

        onMoveShouldSetPanResponder: (evt, gestureState) => {
            console.log('move')
            let longPressDrag = Date.now() - this.pressedTime > 1500;
            // longPressDrag = longPressDrag && !this.longPressDragCancel;
            // if (Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5) {
            //     this.longPressDragCancel = true
            // }
            return this.state.draggable || this.longPressDrag && this.props.longPressDraggable;
        },
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
            console.log('move Capture');
            if (!this.longPressDragCancel) {
                if (Date.now() - this.pressedTime > 1500) {
                    this.longPressDrag = true
                } else if (Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5) {
                    this.longPressDragCancel = true
                }
            }
            return this.state.draggable || this.longPressDrag && this.props.longPressDraggable;
        },

        onPanResponderGrant: (evt, gestureState) => {
            console.log('pushed ')
        },
        onPanResponderMove: (evt, gestureState) => {
            let dx = gestureState.dx;
            let dy = gestureState.dy;
            let newLeft = item.leftStatic + dx;
            let newTop = item.topStatic + dy;
            item.left.setValue(newLeft)
            item.top.setValue(newTop)


            let selfIndex = item.sortIndex
            let currentIndex = this.point2Index({y: newTop + this.itemHeight / 2, x: newLeft + this.itemWidth / 2})

            //往右移动了
            if (currentIndex > selfIndex) {
                for (let i = selfIndex + 1; i <= currentIndex; i++) {
                    let newSortIndex = i - 1;
                    let moveItem = this.findItemBySortIndex(i);
                    moveItem.sortIndex = newSortIndex;
                    this._runPositionMoveAnim(moveItem)
                }
                item.sortIndex = currentIndex
            }
            //往左移动了
            if (currentIndex < selfIndex) {
                for (let i = selfIndex - 1; i >= currentIndex; i--) {
                    let newSortIndex = i + 1;
                    let moveItem = this.findItemBySortIndex(i);
                    moveItem.sortIndex = newSortIndex;
                    this._runPositionMoveAnim(moveItem)
                }
                item.sortIndex = currentIndex
            }

        },
        onPanResponderTerminationRequest: (evt, gestureState) => {
            console.log('TerminationRequest')
            //其他组件请求拦截,是否不放权
            return this.state.draggable
        },
        onPanResponderRelease: (evt, gestureState) => {
            console.log('release')
            this._runPositionMoveAnim(item, () => {
                if (this.props.onDragged) {
                    this.props.onDragged(this.itemInfoList.sort((a, b) => a.sortIndex - b.sortIndex).map((item) => item.itemSource))
                }
            })
        },
        onPanResponderTerminate: (evt, gestureState) => {
            //被拦截
            console.log('cancel')
            this._runPositionMoveAnim(item, () => {
                if (this.props.onDragged) {
                    this.props.onDragged(this.itemInfoList.sort((a, b) => a.sortIndex - b.sortIndex).map((item) => item.itemSource))
                }
            })
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            console.log('block native')
            return this.state.draggable;
        },
    });

    findItemBySortIndex = (sortIndex) => {
        for (let i = 0; i < this.itemInfoList.length; i++) {
            if (this.itemInfoList[i].sortIndex === sortIndex) {
                return this.itemInfoList[i]
            }
        }
    };

    _runPositionMoveAnim = (item, callback) => {
        item.leftStatic = item.sortIndex % this.column * this.itemWidth;
        item.topStatic = Math.floor(item.sortIndex / this.column) * this.itemHeight;
        Animated.parallel([
            Animated.timing(// 可选的基本动画类型: spring, decay, timing
                item.left,
                {
                    toValue: item.leftStatic,
                    duration: 250
                }
            ),
            Animated.timing(
                item.top,
                {
                    toValue: item.topStatic,
                    duration: 250
                }
            )
        ]).start(callback);
    };

    point2Index(point) {
        let rowNum = Math.floor(point.y / this.itemHeight);
        let colNum = Math.floor(point.x / this.itemWidth);
        // console.log(point, rowNum, colNum)
        return Math.max(0, Math.min(this.itemCount - 1, rowNum * this.column + colNum))
    }

    index2Point(index) {
        let dotSize = this.size / 3;
        let rowNum = Math.floor(index / 3);
        let colNum = index % 3;
        let y = rowNum * dotSize + dotSize / 2;
        let x = colNum * dotSize + dotSize / 2;
        return {x, y}
    }

    isInDot(point) {
        let index = this.point2Index(point);
        let centerPoint = this.index2Point(index);
        return {
            index,
            centerPoint
        }
    }

}

const styles = Theme.createStyle(() => {
    return {
        fillParent: {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
})

export default GridView