import {
    StatusBar
} from 'react-native'
import {observable, action, computed, autorun} from 'mobx'

// import ThemeConfigure from './ThemeConfigure'

class Theme {

    @observable PrimaryColor = "#3ea0f2";
    @observable PrimaryDarkColor = "#3a96e4";

    //TopBar背景色==========================================
    @observable _TopBarBackgroundColor;
    get TopBarBackgroundColor() {
        if (this._TopBarBackgroundColor === undefined) {
            return this.PrimaryColor
        }
        return this._TopBarBackgroundColor
    }

    set TopBarBackgroundColor(value) {
        this._TopBarBackgroundColor = value
    }

    //TopBar元素颜色=========================================
    @observable TopBarElementColor = "#FFF";
    //TopBar边框宽度
    @observable TopBarBorderWidth = 0;
    //TopBar边框颜色
    @observable  TopBarBorderColor = "#a2a2a2";
    //TopBar高度
    @observable  TopBarHeight = 45;
    //StatusBar模式===================================
    @observable StatusBarMode = 1;//1沉浸,2染色
    //StatusBar背景色=========================
    @observable _StatusBarColor;
    get StatusBarColor() {
        if (this._StatusBarColor === undefined) {
            return this.PrimaryColor
        }
        return this._StatusBarColor
    }

    set StatusBarColor(value) {
        this._StatusBarColor = value
    }

    @observable TouchableViewMaskColor = "#0001";

    @observable ActivityIndicatorColor = "#999999"
    @observable ActivityIndicatorSize = 30

    //============================
    //用于计算屏幕坐标的偏移量
    @computed
    get statusBarHeightOffset() {
        if (this.StatusBarMode === 1) {
            return StatusBar.currentHeight
        } else {
            return 0
        }
    }

    //===========================================
    @action setTheme = (theme) => {
        for (let key in theme) {
            if (theme.hasOwnProperty(key)) {
                if (this.customValues.hasOwnProperty(key)) {
                    this.customValues[key] = theme[key]
                } else {
                    this[key] = theme[key];
                }
            }
        }
    };

    @observable
    customValues = {};

    @action register = (value) => {
        this.customValues = observable(value);
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                this.__defineGetter__(key, () => {
                    return this.customValues[key]
                })
            }
        }
    };

    createStyle = (styleRender) => {
        return new StyleHolder(styleRender)
    }
}

class StyleHolder {

    constructor(getStyle) {
        let stylesSheet = computed(() => {
            return getStyle()
        });
        let style = getStyle();
        for (let key in style) {
            if (style.hasOwnProperty(key)) {
                this.__defineGetter__(key, () => {
                    return stylesSheet.get()[key]
                })
            }
        }
    }

}

//修改Text的render方法，达到修改所有Text字体的目的
import _ from 'lodash'
import React, {Component} from 'react'
import {Text} from 'react-native'
// _.wrap是lodash的一个函数,用来包裹传入的函数，然后返回一个新的函数
Text.prototype.render = _.wrap(Text.prototype.render, function (func, ...args) {
    let originText = func.apply(this, args);
    return React.cloneElement(originText, {
        style: [
            {backgroundColor: '#0000'},
            originText.props.style,
        ]
    });
});

let theme = new Theme();

// export default observable(theme)
export default theme