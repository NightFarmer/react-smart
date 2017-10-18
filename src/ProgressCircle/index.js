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
    DeviceEventEmitter
} from 'react-native';

class ProgressCircle extends Component {

    rotateLeft = new Animated.Value(0.5);
    rotateRight = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            borderWidth: this.props.borderWidth ? this.props.borderWidth : 3,
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#FFF',
            borderColor: this.props.color ? this.props.color : "#337ab7",
            // progress: 0.3
        };
        this.setValue(this.props.progress ? this.props.progress : 0)
    }

    render() {
        return (<View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
            <View style={[styles.layer, {backgroundColor: this.state.backgroundColor}]}>
                <Animated.View style={[styles.arcLeft, {
                    backgroundColor: this.state.backgroundColor, transform: [{
                        rotate: this.rotateLeft.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg'],
                        })
                    }]
                }]}>
                    <View style={[styles.circleProgress, {
                        borderWidth: this.state.borderWidth,
                        borderColor: this.state.borderColor
                    }]}/>
                    <View style={[styles.maskRight, {backgroundColor: this.state.backgroundColor}]}/>
                </Animated.View>
            </View>
            <View style={[styles.layer, {backgroundColor: this.state.backgroundColor}]}>
                <Animated.View style={[styles.arcRight, {
                    backgroundColor: this.state.backgroundColor, transform: [{
                        rotate: this.rotateRight.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['-180deg', '180deg'],
                        })
                    }]
                }]}>
                    <View style={[styles.circleProgress, {
                        borderWidth: this.state.borderWidth,
                        borderColor: this.state.borderColor
                    }]}/>
                    <View style={[styles.maskLeft, {backgroundColor: this.state.backgroundColor}]}/>
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
            borderColor: props.color ? props.color : "#337ab7",
        })
        this.animTo(props.progress ? props.progress : 0)
    }

    animTo(to) {
        console.log('to', to)
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
                }).start(() => console.log('finish'))
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
                }).start(() => console.log('finish'))
            });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 160,
        flexDirection: 'row',
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
        ]
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