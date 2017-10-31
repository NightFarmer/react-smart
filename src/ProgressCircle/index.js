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
    TouchableOpacity
} from 'react-native';
import {observer} from 'mobx-react'

import Theme from '../Theme'

@observer
class ProgressCircle extends Component {

    rotateLeft = new Animated.Value(0.5);
    rotateRight = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            borderWidth: this.props.borderWidth ? this.props.borderWidth : 3,
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#FFF',
            borderColor: this.props.borderColor,
            size: this.props.size ? this.props.size : 100,
            // progress: 0.3
        };
        this.setValue(this.props.progress ? this.props.progress : 0)
    }

    _borderColor = () => {
        return this.state.borderColor ? this.state.borderColor : Theme.PrimaryColor;
    }

    render() {
        return (<View style={[styles.container, {
            backgroundColor: this.state.backgroundColor,
            width: this.state.size,
            height: this.state.size,
        }, this.props.style
        ]}>
            <View style={[styles.layer, {
                backgroundColor: this.state.backgroundColor,
                width: this.state.size / 2,
                height: this.state.size
            }]}>
                <Animated.View style={[styles.arcLeft, {
                    backgroundColor: this.state.backgroundColor,
                    width: this.state.size,
                    height: this.state.size,
                    transform: [{
                        rotate: this.rotateLeft.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg'],
                        })
                    }]
                }]}>
                    <View style={{
                        width: this.state.size / 2,
                        height: this.state.size,
                        position: 'absolute',
                        backgroundColor: this.state.backgroundColor,
                        right: 0,
                    }}>
                        <View style={[styles.bgd, {
                            borderWidth: this.state.borderWidth,
                            width: this.state.size,
                            height: this.state.size,
                            borderRadius: this.state.size / 2,
                            position: 'absolute',
                            left: -this.state.size / 2
                        }]}/>
                    </View>
                    <View style={{
                        width: this.state.size / 2,
                        height: this.state.size,
                        position: 'absolute',
                        backgroundColor: this.state.backgroundColor,
                    }}>
                        <View style={[styles.circleProgress, {
                            borderWidth: this.state.borderWidth,
                            borderColor: this._borderColor(),
                            width: this.state.size,
                            height: this.state.size,
                            borderRadius: this.state.size / 2
                        }]}/>
                    </View>
                </Animated.View>
            </View>
            <View style={[styles.layer, {
                backgroundColor: this.state.backgroundColor,
                width: this.state.size / 2,
                height: this.state.size
            }]}>
                <Animated.View style={[styles.arcRight, {
                    backgroundColor: this.state.backgroundColor,
                    width: this.state.size,
                    height: this.state.size,
                    transform: [{
                        rotate: this.rotateRight.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['-180deg', '180deg'],
                        })
                    }]
                }]}>
                    <View style={{
                        width: this.state.size / 2,
                        height: this.state.size,
                        position: 'absolute',
                    }}>
                        <View style={[styles.bgd, {
                            borderWidth: this.state.borderWidth,
                            width: this.state.size,
                            height: this.state.size,
                            borderRadius: this.state.size / 2
                        }]}/>
                    </View>
                    <View style={{
                        width: this.state.size / 2,
                        height: this.state.size,
                        position: 'absolute',
                        right: 0,
                        backgroundColor: this.state.backgroundColor
                    }}>
                        <View style={[styles.circleProgress, {
                            borderWidth: this.state.borderWidth,
                            borderColor: this._borderColor(),
                            width: this.state.size,
                            height: this.state.size,
                            borderRadius: this.state.size / 2,
                            left: -this.state.size / 2
                        }]}/>
                    </View>
                </Animated.View>
            </View>
        </View>)
    }

    componentDidMount() {
        // this.setValue(0)
        // this.animTo(1)
    }

    setValue(to) {
        this.rotateRight.setValue(Math.max(0, Math.min(0.5, to)))
        this.rotateLeft.setValue(Math.max(0.5, Math.min(1, to)))
    }

    componentWillReceiveProps(props) {
        this.setState({
            borderWidth: props.borderWidth ? props.borderWidth : 3,
            backgroundColor: props.backgroundColor ? props.backgroundColor : '#FFF',
            borderColor: props.borderColor ? props.borderColor : Theme.PrimaryColor,
            size: this.props.size ? this.props.size : 100,
        })
        this.animTo(props.progress ? props.progress : 0)
    }

    animTo(to) {
        // console.log('to', to)
        let rightValue = Math.max(0, Math.min(0.5, to));
        let leftValue = Math.max(0.5, Math.min(1, to));
        if (rightValue < this.rotateRight.__getValue()) {
            Animated.timing(this.rotateLeft, {
                toValue: leftValue,
                duration: 2000 * Math.abs(leftValue - this.rotateLeft.__getValue()),
                easing: Easing.linear
            }).start(() => {
                Animated.timing(this.rotateRight, {
                    toValue: rightValue,
                    duration: 2000 * Math.abs(rightValue - this.rotateRight.__getValue()),
                    easing: Easing.linear
                }).start(/*() => console.log('finish')*/)
            });
        } else {
            Animated.timing(this.rotateRight, {
                toValue: rightValue,
                duration: 2000 * Math.abs(rightValue - this.rotateRight.__getValue()),
                easing: Easing.linear
            }).start(() => {
                Animated.timing(this.rotateLeft, {
                    toValue: leftValue,
                    duration: 2000 * Math.abs(leftValue - this.rotateLeft.__getValue()),
                    easing: Easing.linear
                }).start(/*() => console.log('finish')*/)
            });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 160,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgd: {
        width: 10,
        height: 10,
        borderWidth: 10,
        borderRadius: 5,
        borderColor: "#d9d9d9",
        position: 'absolute',
        left: 0,
        top: 0
    },
    layer: {
        height: 160,
        width: 80,
    },
    circleProgress: {
        width: 160,
        height: 160,
        borderWidth: 10,
        borderRadius: 80,
    },
    arcLeft: {
        width: 160,
        height: 160,
        left: 0,
        position: 'absolute',
        transform: [
            {rotate: '-10deg'}
        ]
    },
    arcRight: {
        width: 160,
        height: 160,
        right: 0,
        position: 'absolute',
        transform: [
            {rotate: '-10deg'}
        ],
    },
    maskLeft: {
        width: 80,
        height: 160,
        position: 'absolute',
        left: 0,
    },
    maskRight: {
        width: 80,
        height: 160,
        position: 'absolute',
        right: 0,
    }
})

export default ProgressCircle