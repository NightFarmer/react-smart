Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/libs/react-native-router-flux/src/Modal.js';exports.default=













Modal;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _DefaultRenderer=require('./DefaultRenderer');var _DefaultRenderer2=_interopRequireDefault(_DefaultRenderer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var propTypes={navigationState:_propTypes2.default.shape({children:_propTypes2.default.array}),onNavigate:_propTypes2.default.func};function Modal(props){
var children=props.navigationState.children;
var state=children[0];

return(
_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:20}},
_react2.default.createElement(_DefaultRenderer2.default,_extends({
navigationState:state,
key:state.key},
state,{
onNavigate:props.onNavigate,__source:{fileName:_jsxFileName,lineNumber:21}})),

children.length>1&&children.map(function(el,i){
if(i>0&&el.component){
var Component=el.component;
return(
_react2.default.createElement(Component,_extends({
navigationState:children[i],
key:el.key},
el,{
onNavigate:props.onNavigate,__source:{fileName:_jsxFileName,lineNumber:31}})));


}

return null;
})));


}

Modal.propTypes=propTypes;