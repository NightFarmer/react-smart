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
            stateOn: stateOn,
            disabled: this.props.disabled
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
                                   backgroundColor: !this.state.disabled ? "#ccc" : "#f3f3f3",
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
                    backgroundColor: !this.state.disabled ? Theme.PrimaryColor : "#f3f3f3",
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
                                color: !this.state.disabled ? "#FFF" : "#CCC",
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
                                color: !this.state.disabled ? "#FFF" : "#CCC",
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
                    backgroundColor: !this.state.disabled ? "#FFF" : "#CCC",
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
                stateOn: !!props.stateOn,
                disabled: !!props.disabled
            });
            if (props.stateOn === true) {
                this.animOn()
            }
            if (props.stateOn === false) {
                this.animOff()
            }
        } else {
            this.setState({
                disabled: !!props.disabled
            })
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
            this.animPushDown()
        },
        onPanResponderMove: (evt, gestureState) => {
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            if (!this.state.disabled) {
                this.toggle()
            } else {
                this.reset()
            }
        },
        onPanResponderTerminate: (evt, gestureState) => {
            this.reset()
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            return true;
        },
    });

}

export default Switch