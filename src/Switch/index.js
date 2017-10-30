import React, {Component} from 'react'
import {
    View,
    Text,
    Animated,
    PanResponder
} from 'react-native'
import {observer} from 'mobx-react'

import Theme from '../Theme'

@observer
class Switch extends Component {

    rightAnim = new Animated.Value(0);
    leftAnim = new Animated.Value(0);

    onProgressAnim = new Animated.Value(0);
    onProgressAnimDesc = new Animated.Value(1);

    constructor(props) {
        super(props);
        let stateOn = !!this.props.stateOn;
        let height = this.props.height === undefined || typeof (this.props.height - 0) !== 'number' ? 25 : this.props.height - 0;
        let width = this.props.width === undefined || typeof (this.props.width - 0) !== 'number' ? 45 : this.props.width - 0;
        if (this.props.style) {
            if (this.props.style.height !== undefined) {
                height = this.props.style.height
            }
            if (this.props.style.width !== undefined) {
                width = this.props.style.width
            }
        }
        this.state = {
            height: height,
            width: width,
            stateOn: stateOn
        };
        if (stateOn) {
            let margin = width - height;
            this.rightAnim.setValue(0);
            this.leftAnim.setValue(margin);
            this.onProgressAnim.setValue(1)
            this.onProgressAnimDesc.setValue(0)
        } else {
            let margin = width - height;
            this.rightAnim.setValue(margin);
            this.leftAnim.setValue(0);
            this.onProgressAnim.setValue(0)
            this.onProgressAnimDesc.setValue(1)
        }
    }

    render() {
        let dotSize = this.state.height * 0.84;
        let dotMargin = this.state.height * 0.08;
        return (
            <Animated.View onLayout={this.onLayout}
                           {...this.panResponder.panHandlers}
                           style={[
                               this.props.style,
                               {
                                   backgroundColor: "#ccc",
                                   borderRadius: this.state.height / 2,
                                   flexDirection: 'row',
                                   alignItems: 'center',
                                   height: this.state.height,
                                   width: this.state.width,
                               }
                           ]}>
                <Animated.View style={{
                    alignSelf: 'stretch',
                    flex: 1,
                    backgroundColor: Theme.PrimaryColor,
                    borderRadius: this.state.height / 2,
                    opacity: this.onProgressAnim
                }}/>
                {
                    this.props.openLabel === undefined ? null :
                        <View style={{
                            position: "absolute",
                            left: 0,
                            right: dotSize,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Animated.Text numberOfLines={1} style={{
                                color: "#FFF",
                                fontSize: dotSize * 0.5,
                                opacity: this.onProgressAnim,
                            }}
                            >{this.props.openLabel}</Animated.Text>
                        </View>
                }
                {
                    this.props.closeLabel === undefined ? null :
                        <View style={{
                            position: "absolute",
                            left: dotSize,
                            right: 0,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Animated.Text numberOfLines={1} style={{
                                color: "#FFF",
                                fontSize: dotSize * 0.5,
                                opacity: this.onProgressAnimDesc
                            }}>{this.props.closeLabel}</Animated.Text>
                        </View>
                }
                <Animated.View style={{
                    position: "absolute",
                    height: dotSize,
                    // width: this.dotWidthAnim,
                    borderRadius: (dotSize) / 2,
                    backgroundColor: "#FFF",
                    margin: dotMargin,
                    right: this.rightAnim,
                    left: this.leftAnim
                }}/>
            </Animated.View>
        )
    }

    componentWillReceiveProps(props) {
        if (props.stateOn !== this.state.stateOn && 'boolean' === typeof props.stateOn) {
            this.setState({
                stateOn: !!props.stateOn
            });
            if (props.stateOn === true) {
                this.animOn()
            }
            if (props.stateOn === false) {
                this.animOff()
            }
        }
    }


    onLayout = (event) => {
        // let height = event.nativeEvent.layout.height;
        // let width = event.nativeEvent.layout.width;
        // this.setState({
        //     height,
        //     width,
        // });
        // if (this.state.stateOn) {
        //     let margin = width - height;
        //     this.rightAnim.setValue(0);
        //     this.leftAnim.setValue(margin);
        //     this.onProgressAnim.setValue(1)
        //     this.onProgressAnimDesc.setValue(0)
        // } else {
        //     let margin = width - height;
        //     this.rightAnim.setValue(margin);
        //     this.leftAnim.setValue(0);
        //     this.onProgressAnim.setValue(0)
        //     this.onProgressAnimDesc.setValue(1)
        // }
    };

    animOn() {
        let blankSize = this.state.width - this.state.height;
        Animated.timing(this.rightAnim, {
            toValue: 0,
            duration: 200,
            // easing: Easing.linear
        },).start();

        Animated.timing(this.leftAnim, {
            toValue: blankSize,
            duration: 200,
            // easing: Easing.linear
        },).start();

        Animated.timing(this.onProgressAnim, {
            toValue: 1,
            duration: 200,
            // easing: Easing.linear
        },).start();

        Animated.timing(this.onProgressAnimDesc, {
            toValue: 0,
            duration: 200,
            // easing: Easing.linear
        },).start();

        // console.warn('to on',value.__getValue(),value2.__getValue(),blankSize)
    }

    animOff() {
        let blankSize = this.state.width - this.state.height;
        Animated.timing(this.leftAnim, {
            toValue: 0,
            duration: 200,
            // easing: Easing.linear
        },).start();

        Animated.timing(this.rightAnim, {
            toValue: blankSize,
            duration: 200,
            // easing: Easing.linear
        },).start();

        Animated.timing(this.onProgressAnim, {
            toValue: 0,
            duration: 200,
            // easing: Easing.linear
        },).start();

        Animated.timing(this.onProgressAnimDesc, {
            toValue: 1,
            duration: 200,
            // easing: Easing.linear
        },).start();

        // console.warn('to off',value.__getValue(),value2.__getValue(),blankSize)
    }

    animPushDown() {
        let blankSize = this.state.width - this.state.height;
        let value = this.state.stateOn ? this.leftAnim : this.rightAnim;
        Animated.timing(value, {
            toValue: blankSize * 0.8,
            duration: 200,
            // easing: Easing.linear
        },).start();
    }

    toggle() {
        if (this.state.stateOn) {
            this.animOff()
        } else {
            this.animOn()
        }
        this.setState({
            stateOn: !this.state.stateOn
        }, () => {
            if (this.props.onStateChange) {
                this.props.onStateChange(this.state.stateOn)
            }
        })
    }

    reset() {
        if (this.state.stateOn) {
            this.animOn()
        } else {
            this.animOff()
        }
    }

    panResponder = PanResponder.create({
        // 要求成为响应者：
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            // console.warn('down')
            this.animPushDown()

            // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

            // gestureState.{x,y} 现在会被设置为0
        },
        onPanResponderMove: (evt, gestureState) => {
            // 最近一次的移动距离为gestureState.move{X,Y}

            // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
            // 一般来说这意味着一个手势操作已经成功完成。
            // console.warn('up')
            this.toggle()
            // this.animPushUp()
        },
        onPanResponderTerminate: (evt, gestureState) => {
            // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            // console.warn('cancel')
            this.reset()
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
            // 默认返回true。目前暂时只支持android。
            return true;
        },
    });

}

export default Switch