import React, {Component} from "react";
import {
    StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';


class TouchableView extends Component {

    render() {
        return (
            <View style={this.parseParentStyle0()}>
                <View style={[styles.fillParent, {backgroundColor: "#EEE"}]}>
                    <TouchableOpacity style={[styles.fillParent, this.parseParentStyle1()]} onPress={this.onPress}>
                        <View style={[styles.fillParent, this.parseParentStyle()]}>
                            {this.props.children}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onPress = () => {
        if (this.props.onPress) {
            this.props.onPress()
        }
    }

    parseParentStyle0() {
        let style = this.props.style?this.props.style:{};
        let result = {};
        for (let key in style) {
            if (style.hasOwnProperty(key)) {
                if (key.indexOf('padding') !== -1) continue;
                result[key] = style[key]
            }
        }
        return result
    }

    parseParentStyle1() {
        let style = this.props.style?this.props.style:{};
        let result = {
            backgroundColor: style.backgroundColor ? style.backgroundColor : "#FFF",
        };
        for (let key in style) {
            if (style.hasOwnProperty(key)) {
                if (key.indexOf('padding') !== -1) {
                    result[key] = style[key]
                }
            }
        }
        return result
    }

    parseParentStyle() {
        let style = this.props.style?this.props.style:{};
        let result = {
            alignItems: style.alignItems,
            justifyContent: style.justifyContent,
        };
        return result
    }
}

const styles = StyleSheet.create({
    fillParent: {
        alignSelf: "stretch",
        flex: 1
    }
});

export default TouchableView