import React, {Component} from "react";
import {
    StyleSheet, AppRegistry, DeviceEventEmitter, View, Animated, Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
} from 'react-native';
import {observer} from 'mobx-react'
import {Actions} from '../libs/react-native-router-flux'

import Theme from '../Theme'

import DeviceInfo from '../DeviceInfo'

@observer
class TopBar extends Component {

    render() {
        this.setStatusBarStyle()
        return (<View style={{alignSelf: "stretch", alignItems: 'stretch'}}>
            {
                !this.statusBarCouldTranslucent() ? null :
                    < View style={{height: this.getStatusHeight(), backgroundColor: Theme.StatusBarColor}}/>
            }
            <View style={[styles.topBar, {
                backgroundColor: Theme.TopBarBackgroundColor,
                borderBottomWidth: Theme.TopBarBorderWidth,
                borderBottomColor: Theme.TopBarBorderColor,
                height: Theme.TopBarHeight,
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
                            <Image source={require('../../img/back.png')}
                                   style={[styles.backIconImg, {tintColor: Theme.TopBarElementColor}]}
                                   resizeMode='contain'/>
                        </TouchableOpacity>
                }
                {
                    this.props.rightButton ?
                        <TouchableOpacity style={styles.rightButton}
                                          onPress={() => {
                                              this.props.rightButton.onPress && this.props.rightButton.onPress()
                                          }}
                        >
                            {
                                !this.props.rightButton.text ? null :
                                    <Text style={[styles.rightButtonText, {color: Theme.TopBarElementColor}]}>
                                        {this.props.rightButton.text}
                                    </Text>
                            }
                            {
                                this.props.rightButton.text || !this.props.rightButton.icon ? null :
                                    <Image source={this.props.rightButton.icon} style={styles.rightButtonIcon}
                                           resizeMode='contain'/>
                            }
                        </TouchableOpacity>
                        : null
                }
                {
                    this.props.children ? this.props.children :
                        <Text style={[styles.title, {color: Theme.TopBarElementColor}]}>{this.props.title}</Text>
                }
            </View>
        </View>)
    }

    componentWillMount() {
        this.setStatusBarStyle()
    }

    componentDidMount() {
        this.setStatusBarStyle()
    }

    setStatusBarStyle = () => {
        StatusBar.setBarStyle(Theme.StatusBarStyle, true);
        if (this.statusBarMode() === 1) {
            if (Platform.OS === 'ios') return;
            StatusBar.setBackgroundColor('#0000');
            StatusBar.setTranslucent(true)
        } else {
            StatusBar.setBackgroundColor(Theme.StatusBarColor);
            StatusBar.setTranslucent(false)
        }
        // StatusBar.setBarStyle('light-content', true);
        // StatusBar.setBarStyle('default', true);
    }

    statusBarMode = () => {
        return Platform.select({
            ios: 1,
            android: Theme.StatusBarMode
        });
    }

    statusBarCouldTranslucent = () => {
        return Platform.select({
            ios: true,
            android: DeviceInfo.Android.SDK_INT ? DeviceInfo.Android.SDK_INT > 19 : true,
        }) && this.statusBarMode() === 1
    }

    getStatusHeight = () => {
        return Platform.select({
            android: StatusBar.currentHeight,
            ios: this.isIphoneX() ? 44 : 20
        })
    };

    // 识别iphonex-- 群里大佬提供的奇技淫巧 西安-haise QQ542674656
    isIphoneX = () => {
        const {height, width} = Dimensions.get('window');
        let iphoneX = parseFloat((width / height).toString().substring(0, 5));
        let iphoneY = parseFloat((height / width).toString().substring(0, 5));
        return Platform.OS === 'ios' && iphoneX === 2.165 || Platform.OS === 'ios' && iphoneY === 2.165;
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
    },
    rightButton: {
        position: 'absolute',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0
    },
    rightButtonText: {
        marginRight: 15,
        marginLeft: 15,
        fontSize: 14
    },
    rightButtonIcon: {
        marginRight: 15,
        marginLeft: 13,
        height: 22,
        width: 22
    }
});

export default TopBar