import React, {
    Component,
} from 'react';
import {
    View,
    DeviceEventEmitter
} from 'react-native'
import uuid from 'uuid'
import ViewOverlay from '../ViewOverlay'

class Container extends Component {
    static EventType = "pop-view";

    constructor(props) {
        super(props);
        this.state = {
            params: this.props.params
        }
    }

    render() {
        return <View
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {this.props.viewRender(this.state.params)}
        </View>
    }

    update(params) {
        this.setState({
            params
        })
    }

    componentDidMount() {
        DeviceEventEmitter.addListener(Container.EventType, event => {
            if (event.event === 'update' && event.id === this.props.id) {
                this.update(event.params)
            }
        });

    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners(Container.EventType);
    }

}


class PopView {

    static popOver(viewRender, params) {
        let id = uuid.v4();
        let view = <Container viewRender={viewRender} params={params} key={id} id={id}/>;
        ViewOverlay.addLayer(view, id);
        return {
            id, view,
            hide: () => ViewOverlay.removeLayer(id),
            update: (params) => {
                DeviceEventEmitter.emit(Container.EventType, {
                    event: 'update',
                    id,
                    params
                })
            }
        }
    }

    static hide(info) {
        ViewOverlay.removeLayer(info.id)
    }
}

export default PopView
