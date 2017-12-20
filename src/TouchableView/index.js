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
            <View style={[this.props.style]} {...this.panResponder.panHandlers}
                  onLayout={this.onLayout} ref='container'
            >
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

    measureInWindow(callback) {
        return this.refs.container.measureInWindow(callback)
    }

    width = 0;
    height = 0;

    onLayout = (e) => {
        let layout = e.nativeEvent.layout;
        this.width = layout.width;
        this.height = layout.height;
    };

    canceled = false;
    touchedX = 0;
    touchedY = 0;

    longPressTimeout;

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

        onPanResponderGrant: (evt, gestureState) => {
            this.canceled = false;
            if (this.props.disabled) {
                this.canceled = true;
                return
            }
            this.maskOpacity.setValue(1)
            // console.log(evt.nativeEvent)
            this.touchedX = evt.nativeEvent.locationX;
            this.touchedY = evt.nativeEvent.locationY;
            this.longPressTimeout = setTimeout(() => {
                if (this.props.onLongPress) {
                    this.props.onLongPress()
                    this.canceled = true
                }
            }, 1500)
        },
        onPanResponderMove: (evt, gestureState) => {
            // this.upAnim();
            // console.log(evt.nativeEvent, gestureState)
            let locationY = this.touchedY + gestureState.dy;
            let locationX = this.touchedX + gestureState.dx;
            // console.log(locationX, locationY, this.height, this.width)
            if (locationY < 0 || locationY > this.height || locationX < 0 || locationX > this.width) {
                if (!this.canceled) {
                    this.upAnim();
                }
                this.canceled = true
            }
            if (Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5) {
                clearTimeout(this.longPressTimeout)
            }
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            this.upAnim();
            if (!this.canceled) {
                this.onPress()
            }
            clearTimeout(this.longPressTimeout)
        },
        onPanResponderTerminate: (evt, gestureState) => {
            this.upAnim();
            clearTimeout(this.longPressTimeout)
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