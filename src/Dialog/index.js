import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import uuid from 'uuid'
import ViewOverlay from '../ViewOverlay'
import DialogLayerView from './DialogLayerView'

class Dialog {

    static show(info) {
        let id = uuid.v4();
        let view = ViewOverlay.addLayer(<DialogLayerView
            info={info} onDismiss={() => {
            ViewOverlay.removeLayer(id)
            // ViewOverlay.setSpin();
            // if (onDismiss) {
            //     onDismiss()
            // }
        }} key={id}
        />, id);
        return {id, view, hide: () => ViewOverlay.removeLayer(id)}
    }

    static hide(dialog) {
        ViewOverlay.removeLayer(dialog.id)
    }
}

export default Dialog