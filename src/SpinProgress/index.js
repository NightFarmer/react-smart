import React, {
    Component,
} from 'react';
import {
    DeviceEventEmitter
} from 'react-native';
import ViewOverlay from '../ViewOverlay'
import SpinView from './SpinView'

class Spin {

    static show(msg, onDismiss) {
        ViewOverlay.setSpin(<SpinView info={{
            message: msg,
        }} onDismiss={() => {
            ViewOverlay.setSpin()
            if (onDismiss) {
                onDismiss()
            }
        }}/>)
    }

    static hide() {
        DeviceEventEmitter.emit(SpinView.EventType, {
            event: 'dismiss'
        })
    }

    static update(value, message) {
        DeviceEventEmitter.emit(SpinView.EventType, {
            event: 'update',
            value,
            message
        })
    }
}

export default Spin