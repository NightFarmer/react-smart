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
    Image,
} from 'react-native';

const {width, height} = Dimensions.get("window");
const viewHeight = 35;

class RichToastView extends Component {

    bottomAnim = new Animated.Value(-height / 12);
    opacityAnim = new Animated.Value(0);
    dismissHandler = null;

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.info.message !== undefined ? this.props.info.message : '',
            icon: this.props.info.icon ? this.props.info.icon : require('../../img/info.png'),
        }
    }

    render() {
        return (
            <View style={styles.container} pointerEvents='none'>
                <Animated.View style={[styles.toast, this.buildStyle()]}>
                    <Image source={this.state.icon} style={[styles.icon, {tintColor: '#FFF'}]}/>
                    <Text style={styles.defaultText}>{this.state.message}</Text>
                </Animated.View>
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
            message: nextProps.info.message !== undefined ? nextProps.info.message : '',
            icon: nextProps.info.icon ? nextProps.info.icon : require('../../img/info.png'),
        })
        clearTimeout(this.dismissHandler)
        this.timingDismiss()
    }

    componentWillUnmount() {
        clearTimeout(this.dismissHandler)
    }


    componentDidMount() {
        Animated.timing(
            this.bottomAnim,
            {
                toValue: 0,
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

    timingDismiss = () => {
        this.dismissHandler = setTimeout(() => {
            this.dismiss()
        }, 1700)
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
    toast: {
        backgroundColor: "#000C",
        borderRadius: 8,
        padding: 10,

        // minHeight: width * 0.23,
        minWidth: width * 0.23,
        maxWidth: width * 0.5,

        alignSelf: "center",

        justifyContent: "center",
        alignItems: "center"
    },
    defaultText: {
        color: "#FFF",
        fontSize: width * 0.035,
        textAlign: 'center',
        marginTop: 9
    },
    icon: {
        width: width * 0.1,
        height: width * 0.1
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
export default RichToastView