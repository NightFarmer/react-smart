Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Toast/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);


var _ViewOverlay=require('../ViewOverlay');var _ViewOverlay2=_interopRequireDefault(_ViewOverlay);
var _ToastView=require('./ToastView');var _ToastView2=_interopRequireDefault(_ToastView);
var _RichToastView=require('./RichToastView');var _RichToastView2=_interopRequireDefault(_RichToastView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Toast=function(){function Toast(){_classCallCheck(this,Toast);}_createClass(Toast,null,[{key:'show',value:function show(

msg){
_ViewOverlay2.default.setToast(_react2.default.createElement(_ToastView2.default,{info:{
message:msg},
onDismiss:function onDismiss(){
_ViewOverlay2.default.setToast();
},__source:{fileName:_jsxFileName,lineNumber:11}}));
}},{key:'richShow',value:function richShow(

msg,icon){
_ViewOverlay2.default.setToast(_react2.default.createElement(_RichToastView2.default,{info:{
message:msg,
icon:icon},
onDismiss:function onDismiss(){
_ViewOverlay2.default.setToast();
},__source:{fileName:_jsxFileName,lineNumber:19}}));
}},{key:'success',value:function success(

msg){
return Toast.richShow(msg,require('../../img/success.png'));
}},{key:'info',value:function info(

msg){
return Toast.richShow(msg,require('../../img/info.png'));
}},{key:'warn',value:function warn(

msg){
return Toast.richShow(msg,require('../../img/warn.png'));
}},{key:'error',value:function error(

msg){
return Toast.richShow(msg,require('../../img/error.png'));
}}]);return Toast;}();exports.default=


Toast;