import React, {Component} from "react";
import {StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text} from 'react-native';

class ViewOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            toast: null,
            spin: null,
            i: 0
        }
    }

    render() {
        return (<View style={styles.viewOverlay}>
            <View></View>
            {this.state.toast}
            {this.state.spin}
        </View>)
    }

    static setToast(view) {
        DeviceEventEmitter.emit("setState", {toast: view});
    }

    static setSpin(view) {
        DeviceEventEmitter.emit("setState", {spin: view});
    }

    componentWillMount() {
        DeviceEventEmitter.addListener("setState", state => {
            this.setState(state)
        });

        // DeviceEventEmitter.addListener("addOverlay", e => this.add(e));
        // DeviceEventEmitter.addListener("removeOverlay", e => this.remove(e));
        // DeviceEventEmitter.addListener("removeAllOverlay", e => this.removeAll(e));
        // DeviceEventEmitter.addListener("transformRoot", e => this.transform(e));
        // DeviceEventEmitter.addListener("restoreRoot", e => this.restore(e));
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners("setState");

        // DeviceEventEmitter.removeAllListeners("addOverlay");
        // DeviceEventEmitter.removeAllListeners("removeOverlay");
        // DeviceEventEmitter.removeAllListeners("removeAllOverlay");
        // DeviceEventEmitter.removeAllListeners("transformRoot");
        // DeviceEventEmitter.removeAllListeners("restoreRoot");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    viewOverlay: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
    }
});

const originRegister = AppRegistry.registerComponent;

AppRegistry.registerComponent = function (appKey, getAppComponent) {

    return originRegister(appKey, function () {
        const OriginAppComponent = getAppComponent();

        return class extends Component {

            render() {
                return (
                    <View style={styles.container}>
                        <OriginAppComponent {...this.props} />
                        <ViewOverlay/>
                    </View>
                );
            };
        };
    });
};

export default ViewOverlay