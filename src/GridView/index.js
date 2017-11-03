import React, {Component} from 'react'
import {
    View,
    Text,
    Animated,
    PanResponder,
} from 'react-native'
import {observer} from 'mobx-react'

import Theme from '../Theme'
import uuid from 'uuid'

@observer
class GridView extends Component {

    maxZIndex = 0;

    componentWillReceiveProps(nextProps) {
        this.setState({
            width: nextProps.width ? nextProps.width : 0,
            itemHeight: nextProps.itemHeight,
            draggable: nextProps.draggable,
            dataSource: nextProps.dataSource,
            columnCount: nextProps.columnCount ? nextProps.columnCount : 4,
            borderWidth: nextProps.borderWidth ? nextProps.borderWidth : 1,
            borderColor: nextProps.borderColor ? nextProps.borderColor : "#EEE"
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width ? this.props.width : 0,
            itemHeight: this.props.itemHeight,
            draggable: this.props.draggable,
            dataSource: this.props.dataSource,
            columnCount: this.props.columnCount ? this.props.columnCount : 4,
            splitWidth: this.props.splitWidth ? this.props.splitWidth : this.props.style ? this.props.style.borderWidth : 0,
            splitColor: this.props.splitColor ? this.props.splitColor : this.props.style ? this.props.style.borderColor : "#DDD",
            containerBorderWidth: this.props.style ? this.props.style.borderWidth : 0
        }
    }

    render() {
        // console.warn(this.state.splitWidth, this.state.containerBorderWidth)
        // let children = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let children = this.state.dataSource
        let itemCount = children.length;
        let columnCount = this.state.columnCount;
        let rowCount = Math.ceil(itemCount / columnCount)
        let width = this.state.width;
        let itemWidth = (width - 2 * this.state.containerBorderWidth - (columnCount - 1) * this.state.splitWidth) / columnCount;
        let itemHeight = this.state.itemHeight ? this.state.itemHeight : itemWidth;
        let height = itemHeight * rowCount + 2 * this.state.containerBorderWidth + (rowCount - 1) * this.state.splitWidth;
        // console.log(itemCount, rowCount, columnCount)
        // console.log(width, height, itemHeight)

        this.height = height;
        this.itemCount = itemCount;
        this.rowCount = rowCount;
        this.itemWidth = itemWidth;
        this.itemHeight = itemHeight;

        this.itemInfoList = children.map((item, index) => {
            let itemSortIndex = item.sortIndex === undefined ? index : item.sortIndex;
            let col = itemSortIndex % columnCount;
            let left = col * itemWidth + col * this.state.splitWidth;
            let row = Math.floor(itemSortIndex / columnCount);
            let top = row * itemHeight + row * this.state.splitWidth;
            return {
                left: new Animated.Value(left),
                leftStatic: left,
                top: new Animated.Value(top),
                zIndex: new Animated.Value(0),
                topStatic: top,
                index: index,//初始index
                sortIndex: itemSortIndex,
                itemSource: item
            }
        });

        this.itemWidth = itemWidth;
        return (
            <View
                style={[this.props.style, {
                    width: width,
                    height: height,
                }
                ]}
                // onLayout={(e) => console.log(e.nativeEvent)}
            >
                <View style={styles.fillParent}>
                    {this.renderSplitLine()}
                </View>
                <View style={styles.fillParent}>
                    {this.itemInfoList.map(this.renderItem)}
                </View>

            </View>
        )
    }

    renderSplitLine = () => {
        let vList = [];
        let hList = [];
        for (let i = 0; i < this.state.columnCount - 1; i++) {
            vList.push(<View
                key={'vList' + i}
                style={{
                    backgroundColor: this.state.splitColor,
                    width: this.state.splitWidth,
                    top: 0,
                    bottom: 0,
                    left: this.itemWidth + (this.itemWidth + this.state.splitWidth) * i,
                    position: 'absolute'
                }}
            />)
        }

        for (let i = 0; i < this.rowCount - 1; i++) {
            hList.push(<View
                key={'hList' + i}
                style={{
                    backgroundColor: this.state.splitColor,
                    height: this.state.splitWidth,
                    left: 0,
                    right: 0,
                    top: this.itemHeight + (this.itemHeight + this.state.splitWidth) * i,
                    position: 'absolute'
                }}
            />)
        }

        return [...vList, ...hList]
    }

    renderItem = (item, index) => {
        return <Animated.View
            style={{
                width: this.itemWidth, height: this.itemHeight,
                position: 'absolute',
                left: item.left,
                top: item.top,
                zIndex: item.zIndex
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
            // console.log('down')
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
            // console.log('pushed ')
            item.zIndex.setValue(++this.maxZIndex)
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
            //其他组件请求拦截,是否放权
            return !(this.state.draggable || this.longPressDrag && this.props.longPressDraggable)
        },
        onPanResponderRelease: (evt, gestureState) => {
            // console.log('release')
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
            return this.state.draggable || this.longPressDrag && this.props.longPressDraggable;
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
        let col = item.sortIndex % this.state.columnCount;
        item.leftStatic = col * this.itemWidth + col * this.state.splitWidth;
        let row = Math.floor(item.sortIndex / this.state.columnCount);
        item.topStatic = row * this.itemHeight + row * this.state.splitWidth;
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
        return Math.max(0, Math.min(this.itemCount - 1, rowNum * this.state.columnCount + colNum))
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