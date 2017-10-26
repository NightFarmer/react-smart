import React, {Component} from "react";
import {
    StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

import {Actions} from '../../libs/react-native-router-flux'

import Theme from '../Theme'

import DeviceInfo from '../DeviceInfo'

class TopBar extends Component {

    render() {
        return (<View style={{alignSelf: "stretch", alignItems: 'stretch'}}>
            {
                !this.statusBarCouldTranslucent() ? null :
                    < View style={{height: StatusBar.currentHeight, backgroundColor: Theme.StatusBarColor}}/>
            }
            <View style={[styles.topBar, {
                backgroundColor: Theme.TopBarBackgroundColor,
                borderBottomWidth: Theme.TopBarBorderWidth,
                borderBottomColor: Theme.TopBarBorderColor,
                height:Theme.TopBarHeight,
            }]}>
                {
                    this.props.hideBack ? null :
                        <TouchableOpacity style={styles.backIcon} onPress={() => {
                            if (this.props.onBackPress) {
                                this.props.onBackPress()
                            } else {
                                Actions.pop()
                            }
                        }}>
                            <Image source={require('./icon/back.png')}
                                   style={[styles.backIconImg, {tintColor: Theme.TopBarElementColor}]}/>
                        </TouchableOpacity>
                }
                <Text style={[styles.title, {color: Theme.TopBarElementColor}]}>{this.props.title}</Text>
            </View>
        </View>)
    }

    componentWillMount() {
        this.setStatusBarStyle()
    }

    componentDidMount() {
        this.setStatusBarStyle()
    }

    setStatusBarStyle(){
        if (Theme.StatusBarMode === 1) {
            StatusBar.setBackgroundColor('#0000');
            StatusBar.setTranslucent(true)
        } else {
            StatusBar.setBackgroundColor(Theme.StatusBarColor);
            StatusBar.setTranslucent(false)
        }
        // StatusBar.setBarStyle('dark-content', true);
        // StatusBar.setBarStyle('light-content', true);
        // StatusBar.setBarStyle('default', true);
    }

    statusBarCouldTranslucent() {
        return Platform.select({
            ios: true,
            android: DeviceInfo.Android.SDK_INT ? DeviceInfo.Android.SDK_INT > 19 : true,
        }) && Theme.StatusBarMode === 1
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