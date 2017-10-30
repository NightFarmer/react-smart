Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/ActionSheet/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _uuid=require('uuid');var _uuid2=_interopRequireDefault(_uuid);
var _ViewOverlay=require('../ViewOverlay');var _ViewOverlay2=_interopRequireDefault(_ViewOverlay);
var _ActionSheetView=require('./ActionSheetView');var _ActionSheetView2=_interopRequireDefault(_ActionSheetView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ActionSheet=function(){function ActionSheet(){_classCallCheck(this,ActionSheet);}_createClass(ActionSheet,null,[{key:'show',value:function show(

info){
var id=_uuid2.default.v4();
var view=_ViewOverlay2.default.addLayer(_react2.default.createElement(_ActionSheetView2.default,{
info:info,onDismiss:function onDismiss(){
_ViewOverlay2.default.removeLayer(id);
},key:id,__source:{fileName:_jsxFileName,lineNumber:17}}),
id);
return{id:id,view:view,hide:function hide(){return _ViewOverlay2.default.removeLayer(id);}};
}},{key:'hide',value:function hide(

dialog){
_ViewOverlay2.default.removeLayer(dialog.id);
}}]);return ActionSheet;}();exports.default=


ActionSheet;