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
import ActionSheetView from './ActionSheetView'

class ActionSheet {

    static show(info) {
        let id = uuid.v4();
        let view = ViewOverlay.addLayer(<ActionSheetView
            info={info} onDismiss={() => {
            ViewOverlay.removeLayer(id)
        }} key={id}
        />, id);
        return {id, view, hide: () => ViewOverlay.removeLayer(id)}
    }

    static hide(dialog) {
        ViewOverlay.removeLayer(dialog.id)
    }
}

export default ActionSheet