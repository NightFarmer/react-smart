import React, {Component} from 'react'
import {
    View,
    Animated,
    Easing,
    PanResponder,
    Text,
    StatusBar
} from 'react-native'

import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import Theme from '../Theme'
import PopView from '../PopView'

@observer
class PopInfoView extends Component {

    render() {
        let size = this.props.size;
        return (
            <View style={[this.props.style, {alignItems: 'center'}]}>
                <View
                    style={{
                        width: size * 1.5, height: size * 1.5,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View style={{
                        width: size, height: size, backgroundColor: "#0009",
                        borderBottomLeftRadius: size / 2,
                        borderTopLeftRadius: size / 2,
                        borderTopRightRadius: size / 2,
                        transform: [{
                            rotate: "45deg"
                        }]
                    }}/>
                </View>
                <Text style={{
                    position: 'absolute',
                    color: "#FFF",
                    top: size / 2.2,
                    fontSize: size / 2.5
                }}>{this.props.message}</Text>
            </View>
        )
    }
}

export default PopInfoView