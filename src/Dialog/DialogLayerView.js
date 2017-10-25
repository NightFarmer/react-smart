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

const {width, height} = Dimensions.get("window");

import Theme from '../Theme'

class SpinView extends Component {

    static EventType = "smart-span-view";

    opacityAnim = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            // message: this.props.info.message ? this.props.info.message : ''
        }
    }

    render() {
        return (<Animated.View style={[styles.container, this.buildStyle()]}>
            <Animated.View style={[styles.dialogCard, {/*this.buildStyle()*/}]}>
                <View style={styles.infoArea}>
                    <Text style={styles.title}>{this.props.info.title}</Text>
                    <Text style={styles.label}>{this.props.info.content}</Text>
                </View>
                <View style={styles.btnArea}>
                    {
                        !this.props.info.cancel ? null :
                            <TouchableOpacity style={styles.btn}
                                              onPress={() => {
                                                  this.props.info.cancel()
                                                  this.dismiss()
                                              }}
                            ><Text style={styles.btnText}>取消</Text></TouchableOpacity>
                    }
                    {
                        !this.props.info.cancel || !this.props.info.ok ? null :
                            <View style={styles.lineV}/>
                    }
                    {
                        !this.props.info.ok ? null :
                            <TouchableOpacity style={styles.btn}
                                              onPress={() => {
                                                  this.props.info.ok()
                                                  this.dismiss()
                                              }}
                            ><Text style={styles.btnText}>确认</Text></TouchableOpacity>
                    }
                </View>
            </Animated.View>
        </Animated.View>)
    }

    buildStyle = () => {
        return {
            // bottom: this.bottomAnim,
            opacity: this.opacityAnim
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
        DeviceEventEmitter.addListener(SpinView.EventType, event => {
            if (event.event === 'dismiss') {
                this.dismiss()
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
        if (this.props.info.cancel) {
            this.props.info.cancel()
            this.dismiss();
        }
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
    dialogCard: {
        minWidth: width * 0.7,
        maxWidth: width * 0.7,
        // minHeight: 100,
        backgroundColor: "#F4F4F4",
        borderRadius: width * 0.025,
        // padding: 10
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
    title: {
        fontSize: 16,
        color: "#333333",
        textAlign: "center",
        marginTop: 15
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

export default SpinView