import React, {Component} from 'react'
import {
    View,
    Animated,
    Easing,
    PanResponder,
    Text,
    StatusBar
} from 'react-native'

import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import Theme from '../Theme'
import PopView from '../PopView'
import PopInfoView from './PopInfoView'

@observer
class Slider extends Component {

    constructor(props) {
        super(props);

    }

    @observable size = this.props.size === undefined ? Theme.ActivityIndicatorSize : this.props.size;
    @observable color = this.props.color === undefined ? Theme.ActivityIndicatorColor : this.props.color

    @observable dotSize = this.props.dotSize ? this.props.dotSize : 18;
    @observable dotMaxSize = this.props.dotMaxSize ? this.props.dotMaxSize : 25;

    @observable barHeight = this.props.barHeight ? this.props.barHeight : 5;

    @observable step = this.props.step === undefined ? 1 : this.props.step;

    @observable popSize = 50;

    @action
    componentWillReceiveProps(props) {
        this.size = props.size === undefined ? Theme.ActivityIndicatorSize : props.size
        this.color = props.color === undefined ? Theme.ActivityIndicatorColor : props.color
    }

    render() {
        let size = this.size;
        return (
            <View style={[{
                // width: 200,
                // height: 80,
                minHeight: this.dotMaxSize,
                height: this.dotMaxSize,
                alignSelf: 'stretch',
                overflow: 'hidden',
                justifyContent: "center",
                backgroundColor: "#FFF",
            }, this.props.style]}>
                <View style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: "#FFF",
                }}
                      ref='barView'
                >
                    {this.renderBarLine()}
                    {this.renderDot()}
                    {this.renderPanMask()}
                </View>
            </View>
        )
    }

    componentDidMount() {
        if (this.touchMaskWidth) return;
        this.serDotPosition()
    }

    serDotPosition() {
        let startX = this.dotMaxSize / 2;
        let maxWidth = this.touchMaskWidth - this.dotMaxSize;
        let x = maxWidth / 100 * this.currentPercent;
        this.leftAnimDot.setValue(startX + x - this.dotSize / 2)
        this.barSplitX.setValue(x)
    }

    renderBarLine = () => {
        return <View style={{
            flexDirection: "row",
            position: "absolute",
            left: this.dotMaxSize / 2,
            right: this.dotMaxSize / 2,
            backgroundColor: "#e9e9e9",
            height: this.barHeight,
            borderRadius: this.barHeight / 2
        }}>
            <Animated.View style={{
                position: "absolute",
                borderRadius: this.barHeight / 2,
                left: 0,
                top: 0,
                bottom: 0,
                width: this.barSplitX,
                backgroundColor: Theme.PrimaryColor,
            }}/>
        </View>
    }

    renderDot = () => {
        return <Animated.View
            style={{
                width: this.dotSize,
                height: this.dotSize,
                borderRadius: this.dotSize / 2,
                borderWidth: this.dotSize * 0.1,
                borderColor: Theme.PrimaryColor,
                position: "absolute",
                left: this.leftAnimDot,
                backgroundColor: "#FFF",
                transform: [{
                    scale: this.dotScale
                }]
            }}
        />
    };

    renderPanMask = () => {
        return <View
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }}
            {...this.panResponder.panHandlers}
            pointerEvents="box-only"
            onLayout={(e) => {
                this.touchMaskHeight = e.nativeEvent.layout.height
                this.touchMaskWidth = e.nativeEvent.layout.width
                this.serDotPosition()
            }}
        />
    };

    touchMaskHeight = 0;
    touchMaskWidth = 0;
    popView;
    leftAnimDot = new Animated.Value(0);
    leftAnimPop = new Animated.Value(0);
    leftMarginAnimPop = new Animated.Value(0);
    topMarginAnimPop = new Animated.Value(0);
    dotScale = new Animated.Value(1);
    barSplitX = new Animated.Value(0);
    barLeft;
    barTop;
    barWidth;

    touching;

    @observable
    currentPercent = 50;

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            this.parentX = gestureState.x0 - evt.nativeEvent.locationX
            this.parentY = gestureState.y0 - evt.nativeEvent.locationY
            let point = {x: gestureState.x0 - this.parentX, y: gestureState.y0 - this.parentY}

            // console.log(this.leftAnimDot.__getValue(), this.leftAnimDot.__getValue() + this.dotMaxSize, point.x)
            if (point.x < this.leftAnimDot.__getValue() || point.x > this.leftAnimDot.__getValue() + this.dotMaxSize) {
                return
            }
            if (point.y < this.touchMaskHeight / 2 - this.dotMaxSize / 2 || point.y > this.touchMaskHeight / 2 + this.dotMaxSize / 2) {
                return
            }
            this.touching = true;
            // let downPointX = evt.nativeEvent.locationX
            this.refs.barView.measureInWindow((x, y, width, height) => {
                // console.log(x, y, width, height, downPointX)
                this.barLeft = x;
                this.barTop = y;
                this.barWidth = width;
                let minX = this.dotMaxSize / 2;
                let maxX = this.barWidth - this.dotMaxSize / 2;
                point.x = Math.max(minX, Math.min(maxX, point.x))

                let maxWidth = this.barWidth - this.dotMaxSize;

                Animated.timing(this.dotScale, {
                    toValue: this.dotMaxSize / this.dotSize,
                    duration: 200
                }).start()
                this.leftAnimPop.setValue(maxWidth * this.currentPercent / 100 + this.dotMaxSize / 2 + this.barLeft)
                // this.leftAnimPop.setValue(point.x + this.barLeft)
                // this.leftAnimDot.setValue(point.x - this.dotSize / 2)
                this.popView = PopView.popOver((params) => <Animated.View
                    style={{
                        position: 'absolute',
                        left: this.leftAnimPop,
                        top: y + Theme.statusBarHeightOffset + (this.touchMaskHeight / 2 - this.dotMaxSize / 2),
                        // marginLeft: this.leftMarginAnimPop,
                        // marginTop: this.topMarginAnimPop
                        marginLeft: -this.popSize * 1.5 / 2,
                        marginTop: -this.popSize * 1.5
                    }}
                    onLayout={(e) => {
                        console.log(e.nativeEvent.layout)
                        // this.leftMarginAnimPop.setValue(-e.nativeEvent.layout.width / 2)
                        // this.topMarginAnimPop.setValue(-e.nativeEvent.layout.height)
                    }}
                >
                    {/*<Text>{params.percent}</Text>*/}
                    <PopInfoView message={params.percent} size={this.popSize}/>
                </Animated.View>, {percent: this.currentPercent})
            })
        },
        onPanResponderMove: (evt, gestureState) => {
            if (!this.touching || !this.popView) return;
            let maxWidth = this.barWidth - this.dotMaxSize;
            let point = {x: gestureState.moveX - this.parentX, y: gestureState.moveY - this.parentY}
            let minX = this.dotMaxSize / 2;
            let maxX = this.barWidth - this.dotMaxSize / 2;
            point.x = Math.max(minX, Math.min(maxX, point.x))
            let percent = (point.x - this.dotMaxSize / 2) / maxWidth * 100;
            if (this.step) {
                // percent = Math.round(percent);
                let ceilNum = Math.ceil(percent / this.step) * this.step;
                let floorNum = Math.floor(percent / this.step) * this.step;
                // console.log(percent, ceilNum, floorNum)
                percent = ceilNum - percent > percent - floorNum ? floorNum : ceilNum;
                point.x = maxWidth * percent / 100 + this.dotMaxSize / 2
            }
            // console.log(percent);
            if (this.currentPercent !== percent) {
                this.popView.update({percent})
                this.currentPercent = percent;
                this.leftAnimPop.setValue(point.x + this.barLeft)
                this.leftAnimDot.setValue(point.x - this.dotSize / 2)
                this.barSplitX.setValue(point.x - this.dotMaxSize / 2)
            }
        },
        onPanResponderTerminationRequest: (evt, gestureState) => false,
        onPanResponderRelease: (evt, gestureState) => {
            // this.finish()
            this.popView && this.popView.hide()
            Animated.timing(this.dotScale, {
                toValue: 1,
                duration: 200
            }).start()
            this.touching = false;
        },
        onPanResponderTerminate: (evt, gestureState) => {
            // this.finish()
            this.popView && this.popView.hide()
            Animated.timing(this.dotScale, {
                toValue: 1,
                duration: 200
            }).start()
            this.touching = false;
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            return true;
        },
    });
}

export default Slider