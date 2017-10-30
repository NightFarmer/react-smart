Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _class,_temp,_jsxFileName='src/Button/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Button=(_temp=_class=function(_TouchableOpacity){_inherits(Button,_TouchableOpacity);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'buildProps',value:function buildProps()















{var _props=
this.props,style=_props.style,type=_props.type,size=_props.size,title=_props.title,titleStyle=_props.titleStyle,activeOpacity=_props.activeOpacity,children=_props.children,others=_objectWithoutProperties(_props,['style','type','size','title','titleStyle','activeOpacity','children']);

var backgroundColor=void 0,borderColor=void 0,borderWidth=void 0,borderRadius=void 0,paddingVertical=void 0,paddingHorizontal=void 0;
var textColor=void 0,textFontSize=void 0;
switch(type){
case'primary':
backgroundColor=_Theme2.default.PrimaryColor;
borderColor=_Theme2.default.PrimaryColor;
textColor='#fff';
break;
case'secondary':
backgroundColor='#4ccb93';
borderColor='#4ccb93';
textColor='#FFF';
break;
case'danger':
backgroundColor='#ff786e';
borderColor='#ff786e';
textColor='#FFF';
break;
case'link':
backgroundColor='rgba(0, 0, 0, 0)';
borderColor='rgba(0, 0, 0, 0)';
textColor=_Theme2.default.PrimaryColor;
break;
default:
backgroundColor='rgba(0, 0, 0, 0)';
borderColor=_Theme2.default.PrimaryColor;
textColor=_Theme2.default.PrimaryColor;}

switch(size){
case'xl':
borderRadius=6;
paddingVertical=8;
paddingHorizontal=20;
textFontSize=29;
break;
case'lg':
borderRadius=6;
paddingVertical=8;
paddingHorizontal=16;
textFontSize=22;
break;
case'sm':
borderRadius=3;
paddingVertical=4;
paddingHorizontal=8;
textFontSize=11;
break;
case'xs':
borderRadius=3;
paddingVertical=2;
paddingHorizontal=4;
textFontSize=9;
break;
default:
borderRadius=4;
paddingVertical=6;
paddingHorizontal=12;
textFontSize=15;}

borderWidth=1;

var style2=[{
backgroundColor:backgroundColor,
borderColor:borderColor,
borderWidth:borderWidth,
borderRadius:borderRadius,
paddingVertical:paddingVertical,
paddingHorizontal:paddingHorizontal,
overflow:'hidden',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
margin:_reactNative.StyleSheet.hairlineWidth}];

if(!_react2.default.isValidElement(title)&&(title||title===''||title===0)){
titleStyle=[{
color:textColor,
fontSize:textFontSize,
overflow:'hidden'}].
concat(titleStyle);
title=_react2.default.createElement(_reactNative.View,{style:style2,__source:{fileName:_jsxFileName,lineNumber:106}},_react2.default.createElement(_reactNative.Text,{style:titleStyle,numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:106}},title));
}
if(title)children=title;

this.props=_extends({style:style,type:type,size:size,title:title,titleStyle:titleStyle,activeOpacity:activeOpacity,children:children},others);
}},{key:'render',value:function render()

{
this.buildProps();

if(this.props.disabled){
return(
_react2.default.createElement(_reactNative.View,{style:{opacity:0.65},__source:{fileName:_jsxFileName,lineNumber:118}},_get(Button.prototype.__proto__||Object.getPrototypeOf(Button.prototype),'render',this).call(this)));



}else{
return _get(Button.prototype.__proto__||Object.getPrototypeOf(Button.prototype),'render',this).call(this);
}
}}]);return Button;}(_reactNative.TouchableOpacity),_class.propTypes=_extends({},_reactNative.TouchableOpacity.propTypes,{type:_propTypes2.default.oneOf(['default','primary','secondary','danger','link']),size:_propTypes2.default.oneOf(['xl','lg','md','sm','xs']),title:_propTypes2.default.oneOfType([_propTypes2.default.element,_propTypes2.default.string,_propTypes2.default.number]),titleStyle:_reactNative.Text.propTypes.style}),_class.defaultProps=_extends({},_reactNative.TouchableOpacity.defaultProps,{type:'default',size:'md'}),_temp);exports.default=Button;