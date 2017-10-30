Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Switch/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Switch=function(_Component){_inherits(Switch,_Component);







function Switch(props){_classCallCheck(this,Switch);var _this=_possibleConstructorReturn(this,(Switch.__proto__||Object.getPrototypeOf(Switch)).call(this,
props));_this.rightAnim=new _reactNative.Animated.Value(0);_this.leftAnim=new _reactNative.Animated.Value(0);_this.onProgressAnim=new _reactNative.Animated.Value(0);_this.onProgressAnimDesc=new _reactNative.Animated.Value(1);_this.





















































































































onLayout=function(event){



















};_this.




























































































panResponder=_reactNative.PanResponder.create({

onStartShouldSetPanResponder:function onStartShouldSetPanResponder(evt,gestureState){return true;},
onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(evt,gestureState){return true;},
onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(evt,gestureState){return true;},
onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(evt,gestureState){return true;},

onPanResponderGrant:function onPanResponderGrant(evt,gestureState){

_this.animPushDown();




},
onPanResponderMove:function onPanResponderMove(evt,gestureState){



},
onPanResponderTerminationRequest:function onPanResponderTerminationRequest(evt,gestureState){return true;},
onPanResponderRelease:function onPanResponderRelease(evt,gestureState){



_this.toggle();

},
onPanResponderTerminate:function onPanResponderTerminate(evt,gestureState){


_this.reset();
},
onShouldBlockNativeResponder:function onShouldBlockNativeResponder(evt,gestureState){


return true;
}});var stateOn=!!_this.props.stateOn;var height=_this.props.height===undefined||typeof(_this.props.height-0)!=='number'?25:_this.props.height-0;var width=_this.props.width===undefined||typeof(_this.props.width-0)!=='number'?45:_this.props.width-0;if(_this.props.style){if(_this.props.style.height!==undefined){height=_this.props.style.height;}if(_this.props.style.width!==undefined){width=_this.props.style.width;}}_this.state={height:height,width:width,stateOn:stateOn};if(stateOn){var margin=width-height;_this.rightAnim.setValue(0);_this.leftAnim.setValue(margin);_this.onProgressAnim.setValue(1);_this.onProgressAnimDesc.setValue(0);}else{var _margin=width-height;_this.rightAnim.setValue(_margin);_this.leftAnim.setValue(0);_this.onProgressAnim.setValue(0);_this.onProgressAnimDesc.setValue(1);}return _this;}_createClass(Switch,[{key:'render',value:function render(){var dotSize=this.state.height*0.84;var dotMargin=this.state.height*0.08;return _react2.default.createElement(_reactNative.Animated.View,_extends({onLayout:this.onLayout},this.panResponder.panHandlers,{style:[this.props.style,{backgroundColor:"#ccc",borderRadius:this.state.height/2,flexDirection:'row',alignItems:'center',height:this.state.height,width:this.state.width}],__source:{fileName:_jsxFileName,lineNumber:56}}),_react2.default.createElement(_reactNative.Animated.View,{style:{alignSelf:'stretch',flex:1,backgroundColor:_Theme2.default.PrimaryColor,borderRadius:this.state.height/2,opacity:this.onProgressAnim},__source:{fileName:_jsxFileName,lineNumber:69}}),this.props.openLabel===undefined?null:_react2.default.createElement(_reactNative.View,{style:{position:"absolute",left:0,right:dotSize,alignItems:"center",justifyContent:"center"},__source:{fileName:_jsxFileName,lineNumber:78}},_react2.default.createElement(_reactNative.Animated.Text,{numberOfLines:1,style:{color:"#FFF",fontSize:dotSize*0.5,opacity:this.onProgressAnim},__source:{fileName:_jsxFileName,lineNumber:85}},this.props.openLabel)),this.props.closeLabel===undefined?null:_react2.default.createElement(_reactNative.View,{style:{position:"absolute",left:dotSize,right:0,alignItems:"center",justifyContent:"center"},__source:{fileName:_jsxFileName,lineNumber:95}},_react2.default.createElement(_reactNative.Animated.Text,{numberOfLines:1,style:{color:"#FFF",fontSize:dotSize*0.5,opacity:this.onProgressAnimDesc},__source:{fileName:_jsxFileName,lineNumber:102}},this.props.closeLabel)),_react2.default.createElement(_reactNative.Animated.View,{style:{position:"absolute",height:dotSize,borderRadius:dotSize/2,backgroundColor:"#FFF",margin:dotMargin,right:this.rightAnim,left:this.leftAnim},__source:{fileName:_jsxFileName,lineNumber:109}}));}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(props){if(props.stateOn!==this.state.stateOn&&'boolean'===typeof props.stateOn){this.setState({stateOn:!!props.stateOn});if(props.stateOn===true){this.animOn();}if(props.stateOn===false){this.animOff();}}}},{key:'animOn',value:function animOn(){var blankSize=this.state.width-this.state.height;_reactNative.Animated.timing(this.rightAnim,{toValue:0,duration:200}).start();_reactNative.Animated.timing(this.leftAnim,{toValue:blankSize,duration:200}).start();_reactNative.Animated.timing(this.onProgressAnim,{toValue:1,duration:200}).start();_reactNative.Animated.timing(this.onProgressAnimDesc,{toValue:0,duration:200}).start();}},{key:'animOff',value:function animOff(){var blankSize=this.state.width-this.state.height;_reactNative.Animated.timing(this.leftAnim,{toValue:0,duration:200}).start();_reactNative.Animated.timing(this.rightAnim,{toValue:blankSize,duration:200}).start();_reactNative.Animated.timing(this.onProgressAnim,{toValue:0,duration:200}).start();_reactNative.Animated.timing(this.onProgressAnimDesc,{toValue:1,duration:200}).start();}},{key:'animPushDown',value:function animPushDown(){var blankSize=this.state.width-this.state.height;var value=this.state.stateOn?this.leftAnim:this.rightAnim;_reactNative.Animated.timing(value,{toValue:blankSize*0.8,duration:200}).start();}},{key:'toggle',value:function toggle(){var _this2=this;if(this.state.stateOn){this.animOff();}else{this.animOn();}this.setState({stateOn:!this.state.stateOn},function(){if(_this2.props.onStateChange){_this2.props.onStateChange(_this2.state.stateOn);}});}},{key:'reset',value:function reset(){if(this.state.stateOn){this.animOn();}else{this.animOff();}}}]);return Switch;}(_react.Component);exports.default=




Switch;