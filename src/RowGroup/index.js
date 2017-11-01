import React, {Component} from "react";
import {
    StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';


class RowGroup extends Component {

    render() {
        console.log(this.props.children.length)
        console.log(typeof this.props.children)
        return (
            <View style={this.props.style}>
                {
                    !this.props.children ? null :
                        <View>
                            <View style={styles.lineH}/>
                            {
                                this.props.children.length ?
                                    this.props.children.map((item, index) => {
                                        if (index < this.props.children.length - 1) {
                                            return [item, <View style={styles.lineSplit} key={'line' + index}/>]
                                        } else {
                                            return item
                                        }
                                    }) : this.props.children
                            }
                            <View style={styles.lineH}/>
                        </View>
                }
            </View>
        )
    }
}

RowGroup.Row = class extends Component {

    render() {
        return (
            <View style={[this.props.style, {padding: 10}]}>
                {this.props.children}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    lineH: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#AAA"
    },
    lineSplit: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#AAA",
        marginLeft: 10,
        marginRight: 10,
    }
})

export default RowGroup