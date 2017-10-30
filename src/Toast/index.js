import React, {
    Component,
} from 'react';
import ViewOverlay from '../ViewOverlay'
import ToastView from './ToastView'
import RichToastView from './RichToastView'

class Toast {

    static show(msg) {
        ViewOverlay.setToast(<ToastView info={{
            message: msg,
        }} onDismiss={() => {
            ViewOverlay.setToast()
        }}/>)
    }

    static richShow(msg, icon) {
        ViewOverlay.setToast(<RichToastView info={{
            message: msg,
            icon
        }} onDismiss={() => {
            ViewOverlay.setToast()
        }}/>)
    }

    static success(msg) {
        return Toast.richShow(msg, require('../../img/success.png'))
    }

    static info(msg) {
        return Toast.richShow(msg, require('../../img/info.png'))
    }

    static warn(msg) {
        return Toast.richShow(msg, require('../../img/warn.png'))
    }

    static error(msg) {
        return Toast.richShow(msg, require('../../img/error.png'))
    }
}

export default Toast
