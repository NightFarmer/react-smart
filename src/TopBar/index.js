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
        return (<View style={{alignSelf: "stretch", alignItems: 'stretch'}}>
            <View style={{height: StatusBar.currentHeight, backgroundColor: "#6fa1e1"}}/>
            <View style={styles.topBar}>
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
            </View>
        </View>)
    }

    componentWillMount() {
        // StatusBar.setBackgroundColor('#6fa1e1');
        StatusBar.setBackgroundColor('#0000');
        // StatusBar.setBarStyle('light-content', true);
        StatusBar.setBarStyle('dark-content', true);
        // StatusBar.setBarStyle('default', true);

        StatusBar.setTranslucent(true)
    }

    componentDidMount() {
        StatusBar.setBackgroundColor('#0000');
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setTranslucent(true)
    }
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#74a8eb',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
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