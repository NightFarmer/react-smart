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
import PopView from '../PopView'
import TipContainer from './TipContainer'

@observer
class PopTip extends Component {

    render() {
        return (
            <View style={this.props.style}
                  {...this.panResponder.panHandlers}
                  onLayout={this.onLayout}
                  ref='container'
            >
                {this.props.children}
            </View>
        )
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
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            this.canceled = false;
            if (this.props.disabled) {
                this.canceled = true;
                return
            }
            this.touchedX = evt.nativeEvent.locationX;
            this.touchedY = evt.nativeEvent.locationY;
            this.longPressTimeout = setTimeout(() => {
                if (this.props.longPress) {
                    this.onClick();
                }
            }, 1500)
        },
        onPanResponderMove: (evt, gestureState) => {
            let locationY = this.touchedY + gestureState.dy;
            let locationX = this.touchedX + gestureState.dx;
            // console.log(locationX, locationY, this.height, this.width)
            if (locationY < 0 || locationY > this.height || locationX < 0 || locationX > this.width) {
                if (!this.canceled) {
                    // this.upAnim();
                }
                this.canceled = true
            }
            if (Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5) {
                clearTimeout(this.longPressTimeout)
            }
        },

        onPanResponderTerminationRequest: (evt, gestureState) => false,
        onPanResponderRelease: (evt, gestureState) => {
            if (!this.canceled && !this.props.longPress) {
                this.onClick();
            }
            clearTimeout(this.longPressTimeout)
        },
        onPanResponderTerminate: (evt, gestureState) => {
            clearTimeout(this.longPressTimeout)
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            return false
        },
    });

    onClick = () => {
        PopTip.show({
            viewRef: this.refs.container,
            location: this.props.location,
            message: this.props.message,
        })
    }

}

PopTip.Location = {
    TopStart: "top-start",
    Top: "top",
    TopEnd: "top-end",

    LeftStart: "left-start",
    Left: "left",
    LeftEnd: "left-end",

    RightStart: "right-start",
    Right: "right",
    RightEnd: "right-end",

    BottomStart: "bottom-start",
    Bottom: "bottom",
    BottomEnd: "bottom-end"
}

PopTip.show = (info) => {
    let {viewRef, location, message} = info
    if (message === undefined || message === '') return;
    location = location ? location : PopTip.Location.Top
    // console.log('show tip');
    viewRef.measureInWindow((x, y, width, height) => {
        let viewWidth;
        let viewHeight;
        let popView = PopView.popOver({
            render: (params) => {
                // console.log('render popview');
                let opacity = viewHeight === undefined ? 0 : 1
                let leftOffset;
                let topOffset;
                switch (location) {
                    case PopTip.Location.TopStart:
                        leftOffset = 0;
                        topOffset = -viewHeight;
                        break;
                    case PopTip.Location.Top:
                        leftOffset = width / 2 - viewWidth / 2;
                        topOffset = -viewHeight;
                        break;
                    case PopTip.Location.TopEnd:
                        leftOffset = width - viewWidth;
                        topOffset = -viewHeight;
                        break;
                    case PopTip.Location.LeftStart:
                        leftOffset = -viewWidth;
                        topOffset = 0;
                        break;
                    case PopTip.Location.Left:
                        leftOffset = -viewWidth;
                        topOffset = height / 2 - viewHeight / 2;
                        break;
                    case PopTip.Location.LeftEnd:
                        leftOffset = -viewWidth;
                        topOffset = height - viewHeight;
                        break;
                    case PopTip.Location.RightStart:
                        leftOffset = width;
                        topOffset = 0;
                        break;
                    case PopTip.Location.Right:
                        leftOffset = width;
                        topOffset = height / 2 - viewHeight / 2;
                        break;
                    case PopTip.Location.RightEnd:
                        leftOffset = width;
                        topOffset = height - viewHeight;
                        break;
                    case PopTip.Location.BottomStart:
                        leftOffset = 0;
                        topOffset = height;
                        break;
                    case PopTip.Location.Bottom:
                        leftOffset = width / 2 - viewWidth / 2;
                        topOffset = height;
                        break;
                    case PopTip.Location.BottomEnd:
                        leftOffset = width - viewWidth;
                        topOffset = height;
                        break;
                }
                return <TipContainer
                    location={location}
                    style={{
                        position: 'absolute',
                        left: x + leftOffset,
                        top: y + Theme.statusBarHeightOffset + topOffset,
                        opacity
                    }}
                    onLayout={(e) => {
                        // console.log(e.nativeEvent.layout)
                        let width = e.nativeEvent.layout.width;
                        let height = e.nativeEvent.layout.height;
                        if (viewWidth !== width || viewHeight !== height) {
                            viewWidth = width;
                            viewHeight = height;
                            popView.update()
                        }
                    }}
                    width={viewWidth}
                    height={viewHeight}
                >
                    {/*<Text style={{color: "#FFF"}}>22222222{'\n'}2222</Text>*/}
                    <Text style={{color: "#FFF"}}>{message}</Text>
                </TipContainer>
            },
            params: {},
            // maskColor: "#F003",
            touchDismiss: true,
        })
    })
};

const Location = PopTip.Location;
export {
    Location
}
export default PopTip