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
    TextInput
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
    min = Math.max(0, this.props.min ? this.props.min : 0);

    @observable
    disabled = this.props.disabled

    @observable
    locking = false;

    @observable
    editable = !this.props.disabled && this.props.editable

    componentWillReceiveProps(nextProps) {
        this.resetProps(nextProps);
    }

    @action
    resetProps(nextProps) {
        this.num = nextProps.num !== undefined ? nextProps.num : 0;
        this.max = nextProps.max;
        this.min = Math.max(0, nextProps.min ? nextProps.min : 0);
        this.disabled = nextProps.disabled;
        this.editable = !this.disabled && nextProps.editable;
    }

    render() {
        // console.log('num', this.num, this.editable);
        let height = this.props.style ? this.props.style.height ? this.props.style.height : 30 : 30;

        return (
            <View style={[{height: height, minWidth: 100, backgroundColor: "#f5f7fa"}, this.props.style, {
                flexDirection: 'row',
                alignItems: 'stretch',
                borderRadius: height / 8,
                borderColor: "#d8dce5",
                borderWidth: 1
            }]}>
                <TouchableView style={{alignItems: 'center', justifyContent: "center", width: height}}
                               onPress={() => {
                                   this.onChange(this.num - 1)
                               }}
                               disabled={!(this.min === undefined || this.num > this.min) || this.locking || this.disabled}
                >
                    <Text style={{
                        fontSize: height * 0.5,
                        color: (this.min === undefined || this.num > this.min ) && !this.disabled ? "#5a5e66" : "#b4bccc"
                    }}>—</Text>
                </TouchableView>
                <View style={{
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    flex: 1,
                    borderColor: "#d8dce5",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    backgroundColor: "#FFF"
                }}>
                    <TextInput style={{
                        fontSize: height * 0.5,
                        alignItems: 'stretch',
                        flex: 1,
                        color: !this.disabled ? "#5a5e66" : "#b4bccc",
                        padding: 0,
                        textAlignVertical: "center",
                        textAlign: "center",
                    }}
                               selectionColor={Theme.PrimaryColor}
                               keyboardType="numeric"
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => {
                                   if (text === undefined || text.length === 0) {
                                       text = '0'
                                   }
                                   let number = parseInt(text);
                                   if (!isNaN(number)) {
                                       if (this.max !== undefined) {
                                           number = Math.min(this.max, number)
                                       }
                                       if (this.min !== undefined) {
                                           number = Math.max(this.min, number)
                                       }
                                       // this.num = number
                                       this.onChange(number)
                                   } else {
                                       this.setState({})
                                   }
                               }}
                               editable={!!this.editable}
                               value={`${this.num ? this.num : 0}`}
                    />
                </View>
                <TouchableView style={{alignItems: 'center', justifyContent: "center", width: height}}
                               onPress={() => {
                                   this.onChange(this.num + 1)
                               }}
                               disabled={!(this.max === undefined || this.num < this.max) || this.locking || this.disabled}
                >
                    <Text style={{
                        fontSize: height * 0.5,
                        color: (this.max === undefined || this.num < this.max ) && !this.disabled ? "#5a5e66" : "#b4bccc"
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
                this.setResult(this.num)
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