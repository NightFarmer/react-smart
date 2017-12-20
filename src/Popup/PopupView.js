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
    TouchableWithoutFeedback
} from 'react-native';

const {width, height} = Dimensions.get("window");

class PopupView extends Component {

    static EventType = "smart-popup-view";

    translateY = new Animated.Value(height / 12);
    opacityAnim = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            // message: this.props.info.message ? this.props.info.message : ''
        }
    }

    render() {
        return (<Animated.View style={[styles.container, this.buildStyle()]}>
            <TouchableOpacity style={styles.blankArea} onPress={this.cancel}/>
            <Animated.View style={[styles.sheetCard, this.buildCardStyle()]}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{this.props.info.title}</Text>

                    {
                        (this.props.info.options ? this.props.info.options : []).map((item, index) => [
                            <View style={styles.lineH} key={'line' + index}/>,
                            <TouchableOpacity style={styles.sheetCardItem} key={'item' + index}
                                              onPress={() => this.ok(item, index)}>
                                <Text style={styles.sheetCardItemText}>{item}</Text>
                            </TouchableOpacity>
                        ])
                    }

                </View>
                <View style={styles.btnCancelContainer}>
                    <TouchableOpacity style={styles.btnCancel} onPress={this.cancel}>
                        <Text style={styles.btnCancelText}>取消</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </Animated.View>)
    }

    buildStyle = () => {
        return {
            opacity: this.opacityAnim,
        }
    };

    buildCardStyle = () => {
        return {
            // opacity: this.opacityAnim,
            transform: [{
                translateY: this.translateY
            }]
        }
    };

    // componentWillReceiveProps(nextProps) {
    // this.setState({
    //     message: nextProps.info.message ? nextProps.info.message : ''
    // })
    // clearTimeout(this.dismissHandler)
    // this.timingDismiss()
    // }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
        DeviceEventEmitter.addListener(PopupView.EventType, event => {
            if (event.event === 'dismiss') {
                this.dismiss()
            }
        });
        Animated.timing(
            this.opacityAnim,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            },
        ).start();
        Animated.timing(
            this.translateY,
            {
                toValue: 0,
                duration: 200,
                easing: Easing.linear
            },
        ).start();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
        DeviceEventEmitter.removeAllListeners(PopupView.EventType);
    }

    cancel = () => {
        if (this.props.info.cancel) {
            this.props.info.cancel();
        }
        this.dismiss();
    };

    ok = (...p) => {
        if (this.props.info.ok) {
            this.props.info.ok(...p);
        }
        this.dismiss();
    };

    onBackPress = () => {
        this.cancel();
        return true;
    };

    dismiss = () => {
        Animated.timing(
            this.opacityAnim,
            {
                toValue: 0,
                duration: 200,
                easing: Easing.linear
            },
        ).start(this.onDismiss);

        Animated.timing(
            this.translateY,
            {
                toValue: height / 12,
                duration: 200,
                easing: Easing.linear
            },
        ).start();
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
        // flexDirection: "row",
        justifyContent: "center",
        backgroundColor: '#00000055',
        alignItems: "stretch"
    },
    blankArea: {
        flex: 1
    },
    sheetCard: {
        // minWidth: width * 0.7,
        // maxWidth: width * 0.7,
        // minHeight: 100,
        // backgroundColor: "#F4F4F4",
        // borderRadius: width * 0.025,
        // padding: 10
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        margin: 10,
        // alignItems: 'stretch'
    },
    bodyContainer: {
        backgroundColor: "#F4F4F4",
        borderRadius: width * 0.025,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    sheetCardItem: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sheetCardItemText: {
        fontSize: 17,
        color: "#007AFF"
    },
    btnCancelContainer: {
        marginTop: 10,
        backgroundColor: "#F4F4F4",
        borderRadius: width * 0.025,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btnCancel: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
    },
    btnCancelText: {
        fontSize: 17,
        color: "#007AFF"
    },
    lineH: {
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#cacace",
    },
    title: {
        fontSize: 15,
        color: "#656565",
        textAlign: "center",
        margin: 10
    },

    infoArea: {
        borderBottomWidth: StyleSheet.hairlineWidth * 2,
        borderColor: "#cacace",
        minHeight: 100,
    },
    btnArea: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 45
    },
    lineV: {
        width: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#cacace",
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 17,
        color: "#007AFF"
    },
    label: {
        fontSize: 15,
        color: "#656565",
        textAlign: "center",
        // backgroundColor: "#F00",
        padding: 15,
        paddingBottom: 20
    }
});

export default PopupView


