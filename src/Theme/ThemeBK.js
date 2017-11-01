import {observable, action} from 'mobx'

// import ThemeConfigure from './ThemeConfigure'

class Theme {

     PrimaryColor = "#3ea0f2";
     PrimaryDarkColor = "#3a96e4";

    //TopBar背景色==========================================
     _TopBarBackgroundColor;
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
     TopBarElementColor = "#FFF";
    //TopBar边框宽度
     TopBarBorderWidth = 0;
    //TopBar边框颜色
      TopBarBorderColor = "#a2a2a2";
    //TopBar高度
      TopBarHeight = 45;
    //StatusBar模式===================================
     StatusBarMode = 1;//1沉浸,2染色
    //StatusBar背景色=========================
     _StatusBarColor;
    get StatusBarColor() {
        if (this._StatusBarColor === undefined) {
            return this.PrimaryColor
        }
        return this._StatusBarColor
    }

    set StatusBarColor(value) {
        this._StatusBarColor = value
    }

    //TouchableView点击遮罩颜色
    TouchableViewMaskColor = "#0001"
    //===========================================
     setTheme = (theme) => {
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

    
    customValues;

     register = (value) => {
        this.customValues = observable(value)
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                this.__defineGetter__(key, function () {
                    return this.customValues[key]
                })
            }
        }
    }
}

let theme = new Theme();

// export default observable(theme)
export default theme