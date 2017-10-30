Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src/TouchableView/index.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







TouchableView=function(_Component){_inherits(TouchableView,_Component);function TouchableView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TouchableView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TouchableView.__proto__||Object.getPrototypeOf(TouchableView)).call.apply(_ref,[this].concat(args))),_this),_this.















onPress=function(){
if(_this.props.onPress){
_this.props.onPress();
}
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TouchableView,[{key:"render",value:function render(){return _react2.default.createElement(_reactNative.View,{style:this.parseParentStyle0(),__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement(_reactNative.View,{style:[styles.fillParent,{backgroundColor:"#EEE"}],__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement(_reactNative.TouchableOpacity,{style:[styles.fillParent,this.parseParentStyle1()],onPress:this.onPress,__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement(_reactNative.View,{style:[styles.fillParent,this.parseParentStyle()],__source:{fileName:_jsxFileName,lineNumber:17}},this.props.children))));}},{key:"parseParentStyle0",value:function parseParentStyle0()

{
var style=this.props.style;
var result={};
for(var key in style){
if(style.hasOwnProperty(key)){
if(key.indexOf('padding')!==-1)continue;
result[key]=style[key];
}
}
return result;
}},{key:"parseParentStyle1",value:function parseParentStyle1()

{
var style=this.props.style;
var result={
backgroundColor:style.backgroundColor?style.backgroundColor:"#FFF"};

for(var key in style){
if(style.hasOwnProperty(key)){
if(key.indexOf('padding')!==-1){
result[key]=style[key];
}
}
}
return result;
}},{key:"parseParentStyle",value:function parseParentStyle()

{
var style=this.props.style;
var result={
alignItems:style.alignItems,
justifyContent:style.justifyContent};

return result;
}}]);return TouchableView;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
fillParent:{
alignSelf:"stretch",
flex:1}});exports.default=



TouchableView;