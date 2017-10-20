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

import ProgressCircle from '../ProgressCircle'

const {width, height} = Dimensions.get("window");

class SpinView extends Component {

    static EventType = "smart-span-progress-view";

    opacityAnim = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.info.message ? this.props.info.message : '',
            progress: 0
        }
    }

    render() {
        return (<Animated.View style={[styles.container, this.buildStyle()]}>
            <Animated.View style={[styles.spinCard, this.buildStyle()]}>
                <ProgressCircle size={width * 0.12} color="#337ab7" style={styles.indicator}
                                progress={this.state.progress}/>
                <Text style={styles.label}>{this.state.message}</Text>
            </Animated.View>
        </Animated.View>)
    }

    buildStyle = () => {
        return {
            // bottom: this.bottomAnim,
            opacity: this.opacityAnim
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            message: nextProps.info.message ? nextProps.info.message : '',
            progress: 0
        })
        // clearTimeout(this.dismissHandler)
        // this.timingDismiss()
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
        DeviceEventEmitter.addListener(SpinView.EventType, event => {
            if (event.event === 'dismiss') {
                this.dismiss()
            } else if (event.event === 'update') {
                this.setState({
                    progress: event.value
                })
            }
        });
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
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
        DeviceEventEmitter.removeAllListeners(SpinView.EventType);
    }

    onBackPress = () => {
        this.dismiss();
        return true;
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
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: '#00000055',
        alignItems: "center"
    },
    spinCard: {
        minWidth: width * 0.27,
        maxWidth: width * 0.3,
        minHeight: width * 0.27,
        backgroundColor: "#FFF",
        borderRadius: width * 0.025,
        padding: 10
    },
    indicator: {
        height: width * 0.15,
        alignSelf: 'center',

    },
    label: {
        fontSize: width * 0.035,
        color: "#333333",
        paddingTop: 5,
        textAlign: "center"
    }
});

export default SpinView