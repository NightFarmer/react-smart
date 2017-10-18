import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Button extends TouchableOpacity {

    static propTypes = {
        ...TouchableOpacity.propTypes,
        type: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'link']),
        size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
        titleStyle: Text.propTypes.style,
    };

    static defaultProps = {
        ...TouchableOpacity.defaultProps,
        type: 'default',
        size: 'md',
    };

    buildProps() {
        let {style, type, size, title, titleStyle, activeOpacity, children, ...others} = this.props;

        let backgroundColor, borderColor, borderWidth, borderRadius, paddingVertical, paddingHorizontal;
        let textColor, textFontSize;
        switch (type) {
            case 'primary':
                backgroundColor = '#337ab7';
                borderColor = '#337ab7';
                textColor = '#fff';
                break;
            case 'secondary':
                backgroundColor = '#4ccb93';
                borderColor = '#4ccb93';
                textColor = '#FFF';
                break;
            case 'danger':
                backgroundColor = '#ff786e';
                borderColor = '#ff786e';
                textColor = '#FFF';
                break;
            case 'link':
                backgroundColor = 'rgba(0, 0, 0, 0)';
                borderColor = 'rgba(0, 0, 0, 0)';
                textColor = '#337ab7';
                break;
            default:
                backgroundColor = 'rgba(0, 0, 0, 0)';
                borderColor = '#337ab7';
                textColor = '#337ab7';
        }
        switch (size) {
            case 'xl':
                borderRadius = 6;
                paddingVertical = 8;
                paddingHorizontal = 20;
                textFontSize = 29;
                break;
            case 'lg':
                borderRadius = 6;
                paddingVertical = 8;
                paddingHorizontal = 16;
                textFontSize = 22;
                break;
            case 'sm':
                borderRadius = 3;
                paddingVertical = 4;
                paddingHorizontal = 8;
                textFontSize = 11;
                break;
            case 'xs':
                borderRadius = 3;
                paddingVertical = 2;
                paddingHorizontal = 4;
                textFontSize = 9;
                break;
            default:
                borderRadius = 4;
                paddingVertical = 6;
                paddingHorizontal = 12;
                textFontSize = 15;
        }
        borderWidth = 1;

        style = [{
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }].concat(style);
        console.log(textColor)
        if (!React.isValidElement(title) && (title || title === '' || title === 0)) {
            titleStyle = [{
                color: textColor,
                fontSize: textFontSize,
                overflow: 'hidden',
            }].concat(titleStyle);
            title = <Text style={titleStyle} numberOfLines={1}>{title}</Text>;
        }
        if (title) children = title;

        this.props = {style, type, size, title, titleStyle, activeOpacity, children, ...others};
    }

    render() {
        this.buildProps();

        if (this.props.disabled) {
            return (
                <View style={{opacity: 0.65}}>
                    {super.render()}
                </View>
            );
        } else {
            return super.render();
        }
    }
}
