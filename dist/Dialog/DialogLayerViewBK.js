Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_jsxFileName='src/Dialog/DialogLayerViewBK.js';var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=













_reactNative.Dimensions.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height;var

SpinView=(_temp=_class=function(_Component){_inherits(SpinView,_Component);







function SpinView(props){_classCallCheck(this,SpinView);var _this=_possibleConstructorReturn(this,(SpinView.__proto__||Object.getPrototypeOf(SpinView)).call(this,
props));_this.opacityAnim=new _reactNative.Animated.Value(0);_this.keyboardHeight=new _reactNative.Animated.Value(0);_this.








































buildStyle=function(){
return{

opacity:_this.opacityAnim};

};_this.








































keyboardWillShow=function(event){
_reactNative.Animated.timing(_this.keyboardHeight,{
duration:event.duration,
toValue:event.endCoordinates.height}).
start();
};_this.

keyboardWillHide=function(event){
_reactNative.Animated.timing(_this.keyboardHeight,{
duration:event.duration,
toValue:0}).
start();
};_this.


onBackPress=function(){
if(_this.props.info.cancel){
_this.props.info.cancel();
_this.dismiss();
}
return true;
};_this.

dismiss=function(){
_reactNative.Animated.timing(
_this.opacityAnim,
{
toValue:0,
duration:100,
easing:_reactNative.Easing.linear}).

start(_this.onDismiss);
};_this.

onDismiss=function(){
if(_this.props.onDismiss){
_this.props.onDismiss();
}
};_this.state={};return _this;}_createClass(SpinView,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.Animated.View,{style:[styles.container,this.buildStyle()],__source:{fileName:_jsxFileName,lineNumber:37}},_react2.default.createElement(_reactNative.Animated.View,{style:[styles.dialogCard,{},{marginBottom:this.keyboardHeight}],__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_reactNative.View,{style:styles.infoArea,__source:{fileName:_jsxFileName,lineNumber:39}},_react2.default.createElement(_reactNative.Text,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:40}},this.props.info.title),_react2.default.createElement(_reactNative.Text,{style:styles.label,__source:{fileName:_jsxFileName,lineNumber:41}},this.props.info.content)),_react2.default.createElement(_reactNative.View,{style:styles.btnArea,__source:{fileName:_jsxFileName,lineNumber:43}},!this.props.info.cancel?null:_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.btn,onPress:function onPress(){_this2.props.info.cancel();_this2.dismiss();},__source:{fileName:_jsxFileName,lineNumber:46}},_react2.default.createElement(_reactNative.Text,{style:styles.btnText,__source:{fileName:_jsxFileName,lineNumber:51}},'\u53D6\u6D88')),!this.props.info.cancel||!this.props.info.ok?null:_react2.default.createElement(_reactNative.View,{style:styles.lineV,__source:{fileName:_jsxFileName,lineNumber:55}}),!this.props.info.ok?null:_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.btn,onPress:function onPress(){_this2.props.info.ok();_this2.dismiss();},__source:{fileName:_jsxFileName,lineNumber:59}},_react2.default.createElement(_reactNative.Text,{style:styles.btnText,__source:{fileName:_jsxFileName,lineNumber:64}},'\u786E\u8BA4')))));}},{key:'componentDidMount',value:function componentDidMount(){var _this3=this;_reactNative.BackHandler.addEventListener('hardwareBackPress',this.onBackPress);_reactNative.DeviceEventEmitter.addListener(SpinView.EventType,function(event){if(event.event==='dismiss'){_this3.dismiss();}});_reactNative.Animated.timing(this.opacityAnim,{toValue:1,duration:100,easing:_reactNative.Easing.linear}).start();}},{key:'componentWillUnmount',value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.onBackPress);_reactNative.DeviceEventEmitter.removeAllListeners(SpinView.EventType);this.keyboardWillShowSub.remove();this.keyboardWillHideSub.remove();}},{key:'componentWillMount',value:function componentWillMount(){this.keyboardWillShowSub=_reactNative.Keyboard.addListener('keyboardWillShow',this.keyboardWillShow);this.keyboardWillHideSub=_reactNative.Keyboard.addListener('keyboardWillHide',this.keyboardWillHide);}}]);return SpinView;}(_react.Component),_class.EventType="smart-span-view",_temp);


var styles=_reactNative.StyleSheet.create({
container:{
position:"absolute",
left:0,
right:0,
top:0,
bottom:0,
flexDirection:"row",
justifyContent:"center",
backgroundColor:'#00000055',
alignItems:"center"},

dialogCard:{
minWidth:width*0.7,
maxWidth:width*0.7,

backgroundColor:"#F4F4F4",
borderRadius:width*0.025},


infoArea:{
borderBottomWidth:_reactNative.StyleSheet.hairlineWidth*2,
borderColor:"#cacace",
minHeight:100},

btnArea:{
flexDirection:'row',
alignItems:'stretch',
height:45},

lineV:{
width:_reactNative.StyleSheet.hairlineWidth*2,
backgroundColor:"#cacace"},

btn:{
flex:1,
alignItems:'center',
justifyContent:'center'},

btnText:{
fontSize:17,
color:"#007AFF"},

title:{
fontSize:16,
color:"#333333",
textAlign:"center",
marginTop:15},

label:{
fontSize:15,
color:"#656565",
textAlign:"center",

padding:15,
paddingBottom:20}});exports.default=



SpinView;