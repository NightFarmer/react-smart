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
import {observer} from 'mobx-react'

import Theme from '../Theme'
import TouchableView from "../TouchableView/index";

@observer
class NumberInput extends Component {

    render() {
        return (<View style={[{height: 100, width: 300}, this.props.style]}>
            <TouchableView>
                <Text>-</Text>
            </TouchableView>
            <Text>123</Text>
            <TouchableView>
                <Text>+</Text>
            </TouchableView>
        </View>)
    }

}

export default NumberInput