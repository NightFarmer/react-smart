import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import {Location} from './index'

class TipContainer extends Component {

    render() {
        let width = this.props.width ? this.props.width : 0
        let height = this.props.height ? this.props.height : 0
        let arrowSize = 14;
        let borderWidth = 0;
        let left, top, right, bottom;
        left = 0;
        top = 0;
        right = 0;
        bottom = 0;
        let arrowRotate;
        let arrowPosition = {};
        switch (this.props.location) {
            case Location.TopStart:
                bottom = arrowSize / 2;
                arrowRotate = '180deg';
                arrowPosition = {
                    bottom: 0,
                    right: Math.max(width - 10 - arrowSize, width / 2 - arrowSize / 2)
                };
                break;
            case Location.Top:
                bottom = arrowSize / 2;
                arrowRotate = '180deg';
                arrowPosition = {
                    bottom: 0,
                    right: width / 2 - arrowSize / 2
                };
                break;
            case Location.TopEnd:
                bottom = arrowSize / 2;
                arrowRotate = '180deg';
                arrowPosition = {
                    bottom: 0,
                    right: Math.min(10, width / 2 - arrowSize / 2)
                };
                break;
            case Location.LeftStart:
                right = arrowSize / 2;
                arrowRotate = '90deg';
                arrowPosition = {
                    right: -arrowSize / 4,
                    top: 10 + arrowSize / 4
                };
                break;
            case Location.Left:
                right = arrowSize / 2;
                arrowRotate = '90deg';
                arrowPosition = {
                    right: -arrowSize / 4,
                    top: height / 2 - arrowSize / 2 + arrowSize / 4
                };
                break;
            case Location.LeftEnd:
                right = arrowSize / 2;
                arrowRotate = '90deg';
                arrowPosition = {
                    right: -arrowSize / 4,
                    top: height - 10 - arrowSize + arrowSize / 4
                };
                break;
            case Location.RightStart:
                left = arrowSize / 2;
                arrowRotate = '-90deg';
                arrowPosition = {
                    left: -arrowSize / 4,
                    top: 10 + arrowSize / 4
                };
                break;
            case Location.Right:
                left = arrowSize / 2;
                arrowRotate = '-90deg';
                arrowPosition = {
                    left: -arrowSize / 4,
                    top: height / 2 - arrowSize / 2 + arrowSize / 4
                };
                break;
            case Location.RightEnd:
                left = arrowSize / 2;
                arrowRotate = '-90deg';
                arrowPosition = {
                    left: -arrowSize / 4,
                    top: height - 10 - arrowSize + arrowSize / 4
                };
                break;
            case Location.BottomStart:
                top = arrowSize / 2;
                arrowRotate = '0deg';
                arrowPosition = {
                    top: 0,
                    left: Math.min(10, width / 2 - arrowSize / 2)
                };
                break;
            case Location.Bottom:
                top = arrowSize / 2;
                arrowRotate = '0deg';
                arrowPosition = {
                    top: 0,
                    left: width / 2 - arrowSize / 2
                };
                break;
            case Location.BottomEnd:
                top = arrowSize / 2;
                arrowRotate = '0deg';
                arrowPosition = {
                    top: 0,
                    left: Math.max(width - 10 - arrowSize, width / 2 - arrowSize / 2)
                };
                break;
        }

        return (
            <View style={this.props.style} onLayout={this.props.onLayout}>
                <View style={{
                    position: "absolute",
                    left: left,
                    right: right,
                    top: top,
                    bottom: bottom,
                    backgroundColor: "#000B",
                    borderRadius: 5,
                    borderColor: "#F00",
                    borderWidth: borderWidth,
                }}/>
                <View
                    style={[{
                        overflow: 'hidden',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        // backgroundColor: '#00F',
                        width: arrowSize,
                        height: arrowSize / 2,
                        justifyContent: "center",
                        alignItems: "center",
                        // left: 10,
                        // bottom:0,
                        position: 'absolute',
                        transform: [{rotate: arrowRotate}],
                    }, arrowPosition]}
                >
                    <View style={{
                        width: arrowSize / Math.sqrt(2),
                        height: arrowSize / Math.sqrt(2),
                        borderColor: "#F00",
                        borderTopWidth: borderWidth,
                        borderLeftWidth: borderWidth,
                        backgroundColor: "#000B",
                        transform: [{rotate: "45deg"}],
                        top: arrowSize / 4
                    }}/>
                </View>
                <View style={{
                    padding: 10,
                    marginTop: top,
                    marginBottom: bottom,
                    marginLeft: left,
                    marginRight: right
                }}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default TipContainer