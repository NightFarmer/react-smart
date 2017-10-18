import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Easing,
    Dimensions,
    Text,
    Animated
} from 'react-native';

const {width, height} = Dimensions.get("window");
const viewHeight = 35;

class ToastView extends Component {

    bottomAnim = new Animated.Value(height / 12);
    opacityAnim = new Animated.Value(0);
    dismissHandler = null;

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.info.message ? this.props.info.message : ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={[styles.defaultText, this.buildStyle()]}>{this.state.message}</Animated.Text>
            </View>
        )
    }


    buildStyle = () => {
        // return {
        //     bottom: height / 2 - viewHeight / 2
        // }
        return {
            bottom: this.bottomAnim,
            opacity: this.opacityAnim
        }
    };

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.info.message)
        this.setState({
            message: nextProps.info.message ? nextProps.info.message : ''
        })
        clearTimeout(this.dismissHandler)
        this.timingDismiss()
    }

    componentDidMount() {
        Animated.timing(
            this.bottomAnim,
            {
                toValue: height / 8,
                duration: 250,
                easing: (t) => {
                    t -= 1.0;
                    return t * t * ((2 + 1) * t + 2) + 1.0;
                }
            },
        ).start(this.timingDismiss);
        Animated.timing(
            this.opacityAnim,
            {
                toValue: 1,
                duration: 100,
                easing: Easing.linear
            },
        ).start();
    }

    componentWillUnmount() {
        clearTimeout(this.dismissHandler)
    }


    timingDismiss = () => {
        this.dismissHandler = setTimeout(() => {
            this.dismiss()
        }, 1500)
    };

    dismiss = () => {
        Animated.timing(
            this.opacityAnim,
            {
                toValue: 0,
                duration: 100,
                easing: Easing.linear
            },
        ).start(this.onDismiss);
    };

    onDismiss = () => {
        if (this.props.onDismiss) {
            this.props.onDismiss()
        }
    }
}

const styles = StyleSheet.create({
    defaultText: {
        backgroundColor: "#000A",
        borderRadius: 8,
        color: "#FFF",
        fontSize: width * 0.03,
        alignSelf: "flex-end",
        padding: 10,
        maxWidth: width / 2
    },
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
    }
});
export default ToastView