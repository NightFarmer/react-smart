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
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import Theme from '../Theme'
import TouchableView from "../TouchableView/index";

@observer
class NumberInput extends Component {

    @observable
    num = this.props.num !== undefined ? this.props.num : 0

    @observable
    max = this.props.max

    @observable
    min = this.props.min

    @observable
    locking = false;

    componentWillReceiveProps(nextProps) {
        this.num = nextProps.num !== undefined ? nextProps.num : 0
        this.max = nextProps.max
        this.min = nextProps.min
    }

    render() {
        console.log('num', this.num)
        return (
            <View style={[{height: 80, width: 300, backgroundColor: "#f5f7fa"}, this.props.style, {
                flexDirection: 'row',
                alignItems: 'stretch',
                borderRadius: 10,
                borderColor: "#d8dce5",
                borderWidth: 1
            }]}>
                <TouchableView style={{alignItems: 'center', justifyContent: "center", width: 80}}
                               onPress={() => {
                                   this.onChange(this.num - 1)
                               }}
                               disabled={!(this.min === undefined || this.num > this.min) || this.locking}
                >
                    <Text style={{
                        fontSize: 30,
                        color: this.min === undefined || this.num > this.min ? "#5a5e66" : "#b4bccc"
                    }}>—</Text>
                </TouchableView>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    borderColor: "#d8dce5",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    backgroundColor: "#FFF"
                }}>
                    <Text style={{fontSize: 30, color: "#5a5e66"}}>{this.num ? this.num : 0}</Text>
                </View>
                <TouchableView style={{alignItems: 'center', justifyContent: "center", width: 80}}
                               onPress={() => {
                                   this.onChange(this.num + 1)
                               }}
                               disabled={!(this.max === undefined || this.num < this.max) || this.locking}
                >
                    <Text style={{
                        fontSize: 30,
                        color: this.max === undefined || this.num < this.max ? "#5a5e66" : "#b4bccc"
                    }}>+</Text>
                </TouchableView>
            </View>)
    }

    onChange = async (num) => {
        if (this.props.onChange) {
            this.locking = true;
            if (await this.props.onChange(num)) {
                this.setResult(num)
            } else {
                this.locking = false;
            }
        } else {
            this.setResult(num)
        }
    }

    @action
    setResult(num) {
        this.num = num;
        this.locking = false;
    }

}

export default NumberInput