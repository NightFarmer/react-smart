import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Easing,
    Dimensions,
    Text,
    Animated,
    BackHandler,
    ActivityIndicator,
    DeviceEventEmitter,
    TouchableOpacity,
    PanResponder
} from 'react-native';
import {observer} from 'mobx-react'

import Theme from '../Theme'

@observer
class LockPattern extends Component {

    size = 300;
    lineWidth = 7;
    borderWidth = 1;
    borderWidthActive = 2;


    constructor(props) {
        super(props);
        this.size = this.props.size ? this.props.size : 300;
        this.lineWidth = this.props.lineWidth ? this.props.lineWidth : 7;
        this.borderWidth = this.props.lineWidth ? this.props.lineWidth : 1;
        this.borderWidthActive = this.props.lineWidth ? this.props.lineWidth : 2;

        this.line = [];
        this.dotArr = [];
        for (let i = 0; i < 9; i++) {
            this.line.push({
                left: new Animated.Value(0),
                top: new Animated.Value(0),
                length: new Animated.Value(0),
                opacity: new Animated.Value(0),
                rotate: new Animated.Value(45)
            });
            this.dotArr.push({
                showCenterDot: new Animated.Value(0),
                borderWidth: new Animated.Value(this.borderWidth)
            })
        }
        this.pointStatck = [];
        this.state = {
            isWrong: false
        }
    }

    render() {
        let size = this.size;
        return (
            <View style={[{backgroundColor: "#FFF"}, this.props.style, {width: size, height: size}]}>
                <View style={{width: size, height: size, position: 'absolute'}}>
                    {this.renderLine()}
                </View>
                <View style={{
                    width: size,
                    height: size,
                    position: 'absolute',
                    flexWrap: 'wrap',
                    flexDirection: "row",
                }}>
                    {this.renderDot()}
                </View>
                <View style={{width: size, height: size, position: 'absolute'}} {...this.panResponder.panHandlers}
                      pointerEvents="box-only"/>
            </View>
        )
    }

    renderLine = () => {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            let line = this.line[index];
            return <Animated.View
                style={{
                    width: this.size * 3,
                    height: this.size * 3,
                    position: 'absolute',
                    transform: [{
                        rotate: line.rotate.interpolate({
                            inputRange: [0, 360],
                            outputRange: ['0deg', '360deg'],
                        })
                    }],
                    left: line.left,
                    top: line.top,
                    opacity: line.opacity,
                }}
                key={index}
            >
                <Animated.View
                    style={{
                        position: "absolute",
                        height: this.lineWidth,
                        width: line.length,
                        backgroundColor: this.color,
                        left: this.size * 3 / 2,
                        top: this.size * 3 / 2 - this.lineWidth / 2
                    }}
                    ref={(it) => {
                        line.ref = it
                    }}/>
            </Animated.View>
        })
    };

    get color() {
        if (!this.state.isWrong) {
            if (this.props.normalColor) {
                return this.props.normalColor
            }
            return Theme.PrimaryColor
        } else {
            if (this.props.wrongColor) {
                return this.props.wrongColor
            }
            return "#f04a52"
        }
    }

    renderDot = () => {
        const dotSize = this.size * 0.23;
        const centerDotSize = this.size * 0.07;
        return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            return <View
                style={{width: this.size / 3, height: this.size / 3, alignItems: 'center', justifyContent: 'center'}}
                key={index}>
                <Animated.View style={{
                    width: dotSize,
                    height: dotSize,
                    borderRadius: dotSize / 2,
                    backgroundColor: "#FFF",
                    // borderWidth: dotSize * 0.008,
                    borderWidth: this.dotArr[index].borderWidth,
                    borderColor: this.color,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Animated.View style={{
                        width: centerDotSize,
                        height: centerDotSize,
                        borderRadius: centerDotSize / 2,
                        backgroundColor: this.color,
                        opacity: this.dotArr[index].showCenterDot
                    }}/>
                </Animated.View>
            </View>
        })
    };

    parentX = 0;
    parentY = 0;

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            // console.log(evt.nativeEvent, gestureState)
            this.parentX = gestureState.x0 - evt.nativeEvent.locationX
            this.parentY = gestureState.y0 - evt.nativeEvent.locationY
            // let point = {x: evt.nativeEvent.locationX, y: evt.nativeEvent.locationY}
            let point = {x: gestureState.x0 - this.parentX, y: gestureState.y0 - this.parentY}
            let inDot = this.isInDot(point);
            if (inDot) {
                this.reset();
                // console.log(inDot)
                let line = this.line[0];
                line.opacity.setValue(1)
                line.left.setValue(inDot.centerPoint.x - this.size * 3 / 2)
                line.top.setValue(inDot.centerPoint.y - this.size * 3 / 2)
                this.pointStatck.push(inDot.index)
                this.dotArr[inDot.index].borderWidth.setValue(this.borderWidthActive)
                this.dotArr[inDot.index].showCenterDot.setValue(1)
            }
        },
        onPanResponderMove: (evt, gestureState) => {
            // let point = {x: evt.nativeEvent.locationX, y: evt.nativeEvent.locationY}
            let point = {x: gestureState.moveX - this.parentX, y: gestureState.moveY - this.parentY}

            // console.log(point, gestureState)
            // if (point.x > this.size || point.y > this.size) {
            //     return
            // }
            point.x = Math.max(0, Math.min(this.size, point.x))
            point.y = Math.max(0, Math.min(this.size, point.y))
            let inDot = this.isInDot(point);
            let latestIndex = this.pointStatck[this.pointStatck.length - 1];
            // console.log('latestIndex', latestIndex)
            if (!inDot || latestIndex === inDot.index || this.pointUsed(inDot.index)) {
                let line = this.line[this.pointStatck.length - 1];
                if (!line) return;
                let latestPoint = this.index2Point(this.pointStatck[this.pointStatck.length - 1]);
                let angle = this.angle(latestPoint, point);
                // console.log(latestPoint, angle)
                line.rotate.setValue(angle)
                let distance = this.distance(latestPoint, point);
                line.length.setValue(distance)

            } else if (inDot && !this.pointUsed(inDot.index)) {
                let line = this.line[this.pointStatck.length - 1];
                if (!line) return;
                let latestPoint = this.index2Point(this.pointStatck[this.pointStatck.length - 1]);
                let angle = this.angle(latestPoint, inDot.centerPoint);
                line.rotate.setValue(angle)
                let distance = this.distance(latestPoint, inDot.centerPoint);
                line.length.setValue(distance)
                this.dotArr[inDot.index].borderWidth.setValue(this.borderWidthActive)
                this.dotArr[inDot.index].showCenterDot.setValue(1)

                this.pointStatck.push(inDot.index)
                let nextLine = this.line[this.pointStatck.length - 1];
                nextLine.left.setValue(inDot.centerPoint.x - this.size * 3 / 2)
                nextLine.top.setValue(inDot.centerPoint.y - this.size * 3 / 2)
                nextLine.opacity.setValue(1)
            }
        },
        onPanResponderTerminationRequest: (evt, gestureState) => false,
        onPanResponderRelease: (evt, gestureState) => {
            this.finish()
        },
        onPanResponderTerminate: (evt, gestureState) => {
            this.finish()
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            return true;
        },
    });

    reset() {
        this.pointStatck.splice(0)
        this.setState({
            isWrong: false
        });
        this.line.forEach((it) => {
            it.opacity.setValue(0)
            it.length.setValue(0)
        });
        this.dotArr.forEach((it) => {
            it.borderWidth.setValue(this.borderWidth)
            it.showCenterDot.setValue(0)
        });
    }

    finish = () => {
        // console.log(this.pointStatck)
        let line = this.line[this.pointStatck.length - 1];
        if (!line) return;
        line.opacity.setValue(0)
        line.length.setValue(0)
        if (this.props.onFinish) {
            let result = this.props.onFinish(this.pointStatck);
            this.setState({
                isWrong: !result
            })
        }
    };

    angle(start, end) {
        let diff_x = end.x - start.x,
            diff_y = end.y - start.y;
        //返回角度,不是弧度
        let number = 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
        if (Math.sign(diff_x) === -1) {
            number += 180
        }
        return number;
    }

    distance(start, end) {
        return Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
    }

    pointUsed(index) {
        for (let i = 0; i < this.pointStatck.length; i++) {
            if (this.pointStatck[i] === index) {
                return true
            }
        }
        return false;
    }

    point2Index(point) {
        let dotSize = this.size / 3;
        let rowNum = Math.floor(point.y / dotSize);
        let colNum = Math.floor(point.x / dotSize);
        return Math.min(8, rowNum * 3 + colNum)
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
        const dotCircleSize = this.size * 0.23;
        let index = this.point2Index(point);
        let centerPoint = this.index2Point(index);
        let distance = this.distance(point, centerPoint);
        if (distance <= dotCircleSize / 2) {
            return {
                index,
                centerPoint
            }
        }
    }

}

export default LockPattern