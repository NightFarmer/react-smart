Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/RowGroup/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







RowGroup=function(_Component){_inherits(RowGroup,_Component);function RowGroup(){_classCallCheck(this,RowGroup);return _possibleConstructorReturn(this,(RowGroup.__proto__||Object.getPrototypeOf(RowGroup)).apply(this,arguments));}_createClass(RowGroup,[{key:'render',value:function render()

{var _this2=this;
console.log(this.props.children.length);
console.log(typeof this.props.children);
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style,__source:{fileName:_jsxFileName,lineNumber:16}},

!this.props.children?null:
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:19}},
_react2.default.createElement(_reactNative.View,{style:styles.lineH,__source:{fileName:_jsxFileName,lineNumber:20}}),

this.props.children.length?
this.props.children.map(function(item,index){
if(index<_this2.props.children.length-1){
return[item,_react2.default.createElement(_reactNative.View,{style:styles.lineSplit,key:'line'+index,__source:{fileName:_jsxFileName,lineNumber:25}})];
}else{
return item;
}
}):this.props.children,

_react2.default.createElement(_reactNative.View,{style:styles.lineH,__source:{fileName:_jsxFileName,lineNumber:31}}))));




}}]);return RowGroup;}(_react.Component);


RowGroup.Row=function(_Component2){_inherits(_class,_Component2);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}_createClass(_class,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:[this.props.style,{padding:10}],__source:{fileName:_jsxFileName,lineNumber:43}},
this.props.children));


}}]);return _class;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
lineH:{
height:_reactNative.StyleSheet.hairlineWidth,
backgroundColor:"#AAA"},

lineSplit:{
height:_reactNative.StyleSheet.hairlineWidth,
backgroundColor:"#AAA",
marginLeft:10,
marginRight:10}});exports.default=



RowGroup;