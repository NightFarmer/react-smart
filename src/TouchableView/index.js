import React, {Component} from "react";
import {
    StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text,
    StatusBar,
    Image,
    TouchableOpacity,
    PanResponder
} from 'react-native';

import Theme from '../Theme'
import {observer} from 'mobx-react'

@observer
class TouchableView extends Component {

    maskOpacity = new Animated.Value(0);

    render() {
        return (
            <View style={[this.props.style]} {...this.panResponder.panHandlers}>
                <Animated.View style={[styles.fillParent, {
                    backgroundColor: this.props.maskColor ? this.props.maskColor : Theme.TouchableViewMaskColor,
                    opacity: this.maskOpacity
                }]}/>
                {this.props.children}
            </View>
        )
    }

    onPress = () => {
        if (this.props.onPress) {
            this.props.onPress()
        }
    };

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            this.maskOpacity.setValue(1)
        },
        onPanResponderMove: (evt, gestureState) => {
            // this.upAnim();
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            this.upAnim();
            this.onPress()
        },
        onPanResponderTerminate: (evt, gestureState) => {
            this.upAnim();
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            return false;
        },
    });

    upAnim() {
        Animated.timing(this.maskOpacity, {
            toValue: 0,
            duration: 100,
        }).start()
    }
}

const styles = StyleSheet.create({
    fillParent: {
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0
    }
});

export default TouchableView