Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='src/CheckBox/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');













var _mobxReact=require('mobx-react');

var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


CheckBox=(0,_mobxReact.observer)(_class=function(_Component){_inherits(CheckBox,_Component);


function CheckBox(props){_classCallCheck(this,CheckBox);var _this=_possibleConstructorReturn(this,(CheckBox.__proto__||Object.getPrototypeOf(CheckBox)).call(this,
props));_this.














handleClick=function(){
if(_this.props.disabled){
return;
}
var checked=!_this.state.checked;

_this.setState({
checked:checked});


if(_this.props.onChange){
_this.props.onChange({checked:checked});
}
};_this.state={checked:props.checked||props.defaultChecked||false};return _this;}_createClass(CheckBox,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(props){if(typeof props.checked==='boolean'){this.setState({checked:!!props.checked});}}},{key:'render',value:function render()

{var _props=
this.props,style=_props.style,disabled=_props.disabled,children=_props.children;
var checked=this.state.checked;
var imgSrc=void 0;
var tintColor=void 0;
if(checked){
imgSrc=require('../../img/checked.png');
if(disabled){
tintColor="#cbcbcb";
}else{
tintColor=_Theme2.default.PrimaryColor;
}
}else{
imgSrc=require('../../img/normal.png');
if(disabled){
tintColor="#cbcbcb";
}else{
tintColor="#787878";
}
}

return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this.handleClick,__source:{fileName:_jsxFileName,lineNumber:80}},
_react2.default.createElement(_reactNative.View,{style:[styles.wrapper],__source:{fileName:_jsxFileName,lineNumber:81}},
_react2.default.createElement(_reactNative.Image,{source:imgSrc,style:[styles.icon,style],tintColor:tintColor,__source:{fileName:_jsxFileName,lineNumber:82}}),
typeof children==='string'?
_react2.default.createElement(_reactNative.Text,{style:styles.iconRight,__source:{fileName:_jsxFileName,lineNumber:84}},this.props.children):children)));



}}]);return CheckBox;}(_react.Component))||_class;


var styles=_reactNative.StyleSheet.create({

wrapper:{
flexDirection:'row',
alignItems:'center'},

icon:{
width:21,
height:21},

iconRight:{
marginLeft:8,
color:"#333"}});exports.default=



CheckBox;