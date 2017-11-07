import React, {Component} from 'react'
import {
    View,
    Animated,
    Easing
} from 'react-native'

import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import Theme from '../Theme'

@observer
class ActivityIndicator extends Component {

    constructor(props) {
        super(props);

        this.barList = []
        for (let i = 0; i < 12; i++) {
            this.barList.push({
                opacity: new Animated.Value(0)
            })
        }
    }

    @observable size = this.props.size === undefined ? Theme.ActivityIndicatorSize : this.props.size;
    @observable color = this.props.color === undefined ? Theme.ActivityIndicatorColor : this.props.color


    @action
    componentWillReceiveProps(props) {
        this.size = props.size === undefined ? Theme.ActivityIndicatorSize : props.size
        this.color = props.color === undefined ? Theme.ActivityIndicatorColor : props.color
    }

    render() {
        let size = this.size;
        return (
            <View style={[{
                width: size,
                height: size,
                alignSelf: 'center',
                overflow: 'hidden',
                justifyContent: "center"
            }, this.props.style]}>
                <View style={{
                    width: size, height: size,
                    // backgroundColor:"#FF0"
                }}>
                    {this.renderBars(size)}
                </View>
            </View>
        )
    }

    renderBars = (size) => {
        let centerX = size / 2;
        let centerY = size / 2;
        let perRotate = 360 / 12;
        let barLength = size * 0.23;
        let barWidth = size * 0.1;
        let offset = size * 0.33;
        return this.barList.map((item, index) => {
            let offsetX = Math.cos(Math.PI * perRotate * index / 180.0) * offset;
            let offsetY = Math.sin(Math.PI * perRotate * index / 180.0) * offset;
            return <Animated.View style={{
                width: barLength,
                height: barWidth,
                backgroundColor: this.color,
                position: 'absolute',
                borderRadius: barWidth / 2,
                left: centerX - barLength / 2 + offsetX,
                top: centerY - barWidth / 2 + offsetY,
                transform: [{
                    rotate: `${index / 12 * 360}deg`
                    // rotate: item.rotate.interpolate({
                    //     inputRange: [0, 360],
                    //     outputRange: ['0deg', '360deg'],
                    // })
                }],
                // opacity: 0.1 + 0.7 * index / 12
                opacity: item.opacity
            }} key={index}/>
        })
    };

    interval = null;
    counter = 0;

    componentDidMount() {
        this.interval = setInterval(() => {
            this.counter = ++this.counter % 12
            this.barList.forEach((item, index) => {
                // item.rotate.setValue(this.counter * perRotate * ((this.counter + index) % 12))
                item.opacity.setValue(0.8 - ((this.counter - index + 12) % 12) * 0.7 / 12)
            })
        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

export default ActivityIndicator