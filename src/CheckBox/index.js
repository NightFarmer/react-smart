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
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import {observer} from 'mobx-react'

import Theme from '../Theme'

@observer
class CheckBox extends Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked || props.defaultChecked || false,
        };
    }


    componentWillReceiveProps(props) {
        if (typeof props.checked === 'boolean') {
            this.setState({
                checked: !!props.checked,
            });
        }
    }

    handleClick = () => {
        if (this.props.disabled) {
            return;
        }
        const checked = !this.state.checked;
        // if (!(typeof this.props.checked === 'boolean')) {
            this.setState({
                checked,
            });
        // }
        if (this.props.onChange) {
            this.props.onChange({checked});
        }
    };

    render() {
        let {style, disabled, children, /*styles*/} = this.props;
        let checked = this.state.checked;
        let imgSrc;
        let tintColor;
        if (checked) {
            imgSrc = require('../../img/checked.png');
            if (disabled) {
                tintColor = "#cbcbcb"
            } else {
                tintColor = Theme.PrimaryColor
            }
        } else {
            imgSrc = require('../../img/normal.png');
            if (disabled) {
                tintColor = "#cbcbcb"
            } else {
                tintColor = "#787878"
            }
        }

        return (
            <TouchableWithoutFeedback onPress={this.handleClick}>
                <View style={[styles.wrapper]}>
                    <Image source={imgSrc} style={[styles.icon, style,{tintColor}]} tintColor={tintColor}/>
                    {typeof children === 'string' ? (
                        <Text style={styles.iconRight}>{this.props.children}</Text>) : children}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 21,
        height: 21,
    },
    iconRight: {
        marginLeft: 8,
        color:"#333"
    }
});

export default CheckBox