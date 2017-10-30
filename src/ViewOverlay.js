import React, {Component} from "react";
import {StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text} from 'react-native';
import DeviceInfo from './DeviceInfo'
class ViewOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            toast: null,
            spin: null,
            layerList: [],
            i: 0
        }
    }

    render() {
        return (<View style={styles.viewOverlay} pointerEvents="box-none">
            {this.state.layerList.map((it) => it.view)}
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

    static addLayer(view, id) {
        DeviceEventEmitter.emit("addLayer", {view, id});
        return view;
    }

    static removeLayer(id) {
        DeviceEventEmitter.emit("removeLayer", {id});
    }

    componentWillMount() {
        DeviceEventEmitter.addListener("setState", state => {
            this.setState(state)
        });

        DeviceEventEmitter.addListener("addLayer", event => {
            this.state.layerList.push(event);
            this.setState({layerList: this.state.layerList})
        });

        DeviceEventEmitter.addListener("removeLayer", event => {
            let layerList = this.state.layerList;
            for (let i = 0; i < layerList.length; i++) {
                if (layerList[i].id === event.id) {
                    layerList.splice(i, 1);
                    break;
                }
            }
            this.setState({layerList: layerList})
        });


        // DeviceEventEmitter.addListener("addOverlay", e => this.add(e));
        // DeviceEventEmitter.addListener("removeOverlay", e => this.remove(e));
        // DeviceEventEmitter.addListener("removeAllOverlay", e => this.removeAll(e));
        // DeviceEventEmitter.addListener("transformRoot", e => this.transform(e));
        // DeviceEventEmitter.addListener("restoreRoot", e => this.restore(e));
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners("setState");
        DeviceEventEmitter.removeAllListeners("addLayer");
        DeviceEventEmitter.removeAllListeners("removeLayer");

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
                DeviceInfo.Android.SDK_INT = this.props.Android_SDK_INT;
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