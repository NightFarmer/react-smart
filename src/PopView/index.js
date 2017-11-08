import React, {
    Component,
} from 'react';
import {
    View,
    DeviceEventEmitter,
    TouchableWithoutFeedback
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
            <TouchableWithoutFeedback
                onPress={() => {
                    if (this.props.info.touchDismiss) {
                        this.props.removeSelf()
                    }
                }}
            >
                <View style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: this.props.info.maskColor ? this.props.info.maskColor : "#00000000"
                }}/>
            </TouchableWithoutFeedback>
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


//添加浮动层, 底层使用
class PopView {

    static popOver(info) {
        let {render, params} = info;
        let id = uuid.v4();
        let view = <Container viewRender={render} params={params} key={id} id={id} info={info}
                              removeSelf={() => ViewOverlay.removeLayer(id)}/>;
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
