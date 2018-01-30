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

    dp = (value) => (Theme.TopBarHeight || 45) / 45 * value

    topBarStyle = () => {
        return {
            height: Theme.TopBarHeight || 45
        }
    };

    backIconStyle = () => {
        return {
            height: this.dp(45),
            width: this.dp(45)
        }
    };

    backIconImageStyle = () => {
        return {
            height: this.dp(20),
            width: this.dp(20)
        }
    }

    titleStyle = () => {
        return {
            fontSize: Theme.TopBarTitleSize || this.dp(20)
        }
    }

    rightButtonStyle = () => {
        return {
            height: this.dp(45),
        }
    }

    rightButtonTextStyle = () => {
        return {
            marginRight: this.dp(15),
            marginLeft: this.dp(15),
            fontSize: this.dp(14)
        }
    }

    rightButtonIconStyle = () => {
        return {
            marginRight: this.dp(15),
            marginLeft: this.dp(13),
            height: this.dp(22),
            width: this.dp(22)
        }
    }

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
                        <TouchableOpacity style={[styles.backIcon, this.backIconStyle()]} onPress={() => {
                            if (this.props.onBackPress) {
                                this.props.onBackPress()
                            } else {
                                Actions.pop()
                            }
                        }}>
                            <Image source={require('../../img/back.png')}
                                   style={[styles.backIconImg, {tintColor: Theme.TopBarElementColor}, this.backIconImageStyle()]}
                                   resizeMode='contain'/>
                        </TouchableOpacity>
                }
                {
                    this.props.rightButton ?
                        <TouchableOpacity style={[styles.rightButton, this.rightButtonStyle()]}
                                          onPress={() => {
                                              this.props.rightButton.onPress && this.props.rightButton.onPress()
                                          }}
                        >
                            {
                                !this.props.rightButton.text ? null :
                                    <Text
                                        style={[{color: Theme.TopBarElementColor}, this.rightButtonTextStyle()]}>
                                        {this.props.rightButton.text}
                                    </Text>
                            }
                            {
                                this.props.rightButton.text || !this.props.rightButton.icon ? null :
                                    <Image source={this.props.rightButton.icon}
                                           style={[{tintColor: Theme.TopBarElementColor}, this.rightButtonIconStyle()]}
                                           resizeMode='contain'/>
                            }
                        </TouchableOpacity>
                        : null
                }
                {
                    this.props.children ? this.props.children :
                        <Text
                            style={[styles.title, {color: Theme.TopBarElementColor}, this.titleStyle()]}>{this.props.title}</Text>
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
        // height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    title: {
        color: '#FFF',
        // fontSize: 20
    },
    backIcon: {
        position: 'absolute',
        // height: 45,
        // width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        left: 0
    },
    backIconImg: {
        // height: 20,
        // width: 20,
        resizeMode: 'contain',
        tintColor: '#FFF',
    },
    rightButton: {
        position: 'absolute',
        // height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0
    }
});

export default TopBar
