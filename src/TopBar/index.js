import React, {Component} from "react";
import {
    StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

import {Actions} from '../../libs/react-native-router-flux'

class TopBar extends Component {

    render() {
        return (<View style={styles.topBar}>
            <StatusBar
                backgroundColor="#74a8eb"
                barStyle="light-content"
            />
            {
                this.props.hideBack ? null :
                    <TouchableOpacity style={styles.backIcon} onPress={() => {
                        if (this.props.onBackPress) {
                            this.props.onBackPress()
                        } else {
                            Actions.pop()
                        }
                    }}>
                        <Image source={require('./icon/back.png')} style={styles.backIconImg}/>
                    </TouchableOpacity>
            }
            <Text style={styles.title}>{this.props.title}</Text>
        </View>)
    }

    componentWillMount() {
        // Actions.
    }
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#74a8eb',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'stretch'
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    backIcon: {
        position: 'absolute',
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        left: 0
    },
    backIconImg: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: '#FFF',
    }
});

export default TopBar