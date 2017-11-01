Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Spin/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);


var _reactNative=require('react-native');


var _ViewOverlay=require('../ViewOverlay');var _ViewOverlay2=_interopRequireDefault(_ViewOverlay);
var _SpinView=require('./SpinView');var _SpinView2=_interopRequireDefault(_SpinView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Spin=function(){function Spin(){_classCallCheck(this,Spin);}_createClass(Spin,null,[{key:'show',value:function show(

msg,_onDismiss){
_ViewOverlay2.default.setSpin(_react2.default.createElement(_SpinView2.default,{info:{
message:msg},
onDismiss:function onDismiss(){
_ViewOverlay2.default.setSpin();
if(_onDismiss){
_onDismiss();
}
},__source:{fileName:_jsxFileName,lineNumber:13}}));
}},{key:'hide',value:function hide()

{
_reactNative.DeviceEventEmitter.emit(_SpinView2.default.EventType,{
event:'dismiss'});

}}]);return Spin;}();exports.default=


Spin;