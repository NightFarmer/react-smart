Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='src/TouchableView/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);
var _mobxReact=require('mobx-react');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


TouchableView=(0,_mobxReact.observer)(_class=function(_Component){_inherits(TouchableView,_Component);function TouchableView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TouchableView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TouchableView.__proto__||Object.getPrototypeOf(TouchableView)).call.apply(_ref,[this].concat(args))),_this),_this.

maskOpacity=new _reactNative.Animated.Value(0),_this.













onPress=function(){
if(_this.props.onPress){
_this.props.onPress();
}
},_this.

panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(evt,gestureState){return true;},
onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(evt,gestureState){return true;},
onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(evt,gestureState){return true;},
onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(evt,gestureState){return true;},

onPanResponderGrant:function onPanResponderGrant(evt,gestureState){
_this.maskOpacity.setValue(1);
},
onPanResponderMove:function onPanResponderMove(evt,gestureState){

},
onPanResponderTerminationRequest:function onPanResponderTerminationRequest(evt,gestureState){return true;},
onPanResponderRelease:function onPanResponderRelease(evt,gestureState){

_reactNative.Animated.timing(_this.maskOpacity,{
toValue:0,
duration:100}).
start();
_this.onPress();
},
onPanResponderTerminate:function onPanResponderTerminate(evt,gestureState){

_reactNative.Animated.timing(_this.maskOpacity,{
toValue:0,
duration:100}).
start();
},
onShouldBlockNativeResponder:function onShouldBlockNativeResponder(evt,gestureState){
return false;
}}),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TouchableView,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.View,_extends({style:[this.props.style]},this.panResponder.panHandlers,{__source:{fileName:_jsxFileName,lineNumber:20}}),_react2.default.createElement(_reactNative.Animated.View,{style:[styles.fillParent,{backgroundColor:this.props.maskColor?this.props.maskColor:_Theme2.default.TouchableViewMaskColor,opacity:this.maskOpacity}],__source:{fileName:_jsxFileName,lineNumber:21}}),this.props.children);}}]);return TouchableView;}(_react.Component))||_class;




var styles=_reactNative.StyleSheet.create({
fillParent:{
position:'absolute',left:0,right:0,top:0,bottom:0}});exports.default=



TouchableView;