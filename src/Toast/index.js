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
        return Toast.richShow(msg, require('./icon/success.png'))
    }

    static info(msg) {
        return Toast.richShow(msg, require('./icon/info.png'))
    }

    static warn(msg) {
        return Toast.richShow(msg, require('./icon/warn.png'))
    }

    static error(msg) {
        return Toast.richShow(msg, require('./icon/error.png'))
    }
}

export default Toast
