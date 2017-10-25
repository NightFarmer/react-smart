// import {observable} from 'mobx'
// import ThemeConfigure from './ThemeConfigure'

class Theme {

    // @observable
    static PrimaryColor = "#3ea0f2";
    static PrimaryDarkColor = "#3a96e4";

    //TopBar背景色==========================================
    static _TopBarBackgroundColor;
    static get TopBarBackgroundColor() {
        if (Theme._TopBarBackgroundColor === undefined) {
            return Theme.PrimaryColor
        }
        return Theme._TopBarBackgroundColor
    }

    static set TopBarBackgroundColor(value) {
        Theme._TopBarBackgroundColor = value
    }
    //TopBar元素颜色=========================================
    static TopBarElementColor = "#FFF";
    //TopBar边框宽度
    static TopBarBorderWidth = 0;
    //TopBar边框颜色
    static TopBarBorderColor = "#a2a2a2";

    //StatusBar背景色=========================
    static _StatusBarColor;
    static get StatusBarColor() {
        if (Theme._StatusBarColor === undefined) {
            return Theme.PrimaryColor
        }
        return Theme._StatusBarColor
    }

    static set StatusBarColor(value) {
        Theme._StatusBarColor = value
    }


    //===========================================
    static setTheme = (theme) => {
        for (let key in theme) {
            if (theme.hasOwnProperty(key)) {
                Theme[key] = theme[key];
            }
        }
    }
}

// let theme = new Theme();

export default Theme