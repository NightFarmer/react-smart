Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_jsxFileName='src/Popup/PopupView.js';var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=













_reactNative.Dimensions.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height;var

PopupView=(_temp=_class=function(_Component){_inherits(PopupView,_Component);






function PopupView(props){_classCallCheck(this,PopupView);var _this=_possibleConstructorReturn(this,(PopupView.__proto__||Object.getPrototypeOf(PopupView)).call(this,
props));_this.translateY=new _reactNative.Animated.Value(height/12);_this.opacityAnim=new _reactNative.Animated.Value(0);_this.
































buildStyle=function(){
return{
opacity:_this.opacityAnim};

};_this.

buildCardStyle=function(){
return{

transform:[{
translateY:_this.translateY}]};


};_this.







































cancel=function(){
if(_this.props.info.cancel){
_this.props.info.cancel();
}
_this.dismiss();
};_this.

ok=function(){
if(_this.props.info.ok){var _this$props$info;
(_this$props$info=_this.props.info).ok.apply(_this$props$info,arguments);
}
_this.dismiss();
};_this.

onBackPress=function(){
_this.cancel();
return true;
};_this.

dismiss=function(){
_reactNative.Animated.timing(
_this.opacityAnim,
{
toValue:0,
duration:200,
easing:_reactNative.Easing.linear}).

start(_this.onDismiss);

_reactNative.Animated.timing(
_this.translateY,
{
toValue:height/12,
duration:200,
easing:_reactNative.Easing.linear}).

start();
};_this.

onDismiss=function(){
if(_this.props.onDismiss){
_this.props.onDismiss();
}
};_this.state={};return _this;}_createClass(PopupView,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.Animated.View,{style:[styles.container,this.buildStyle()],__source:{fileName:_jsxFileName,lineNumber:36}},_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.blankArea,onPress:this.cancel,__source:{fileName:_jsxFileName,lineNumber:37}}),_react2.default.createElement(_reactNative.Animated.View,{style:[styles.sheetCard,this.buildCardStyle()],__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_reactNative.View,{style:styles.bodyContainer,__source:{fileName:_jsxFileName,lineNumber:39}},_react2.default.createElement(_reactNative.Text,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:40}},this.props.info.title),(this.props.info.options?this.props.info.options:[]).map(function(item,index){return[_react2.default.createElement(_reactNative.View,{style:styles.lineH,key:'line'+index,__source:{fileName:_jsxFileName,lineNumber:44}}),_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.sheetCardItem,key:'item'+index,onPress:function onPress(){return _this2.ok(item,index);},__source:{fileName:_jsxFileName,lineNumber:45}},_react2.default.createElement(_reactNative.Text,{style:styles.sheetCardItemText,__source:{fileName:_jsxFileName,lineNumber:47}},item))];})),_react2.default.createElement(_reactNative.View,{style:styles.btnCancelContainer,__source:{fileName:_jsxFileName,lineNumber:53}},_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.btnCancel,onPress:this.cancel,__source:{fileName:_jsxFileName,lineNumber:54}},_react2.default.createElement(_reactNative.Text,{style:styles.btnCancelText,__source:{fileName:_jsxFileName,lineNumber:55}},'\u53D6\u6D88')))));}},{key:'componentDidMount',value:function componentDidMount(){var _this3=this;_reactNative.BackHandler.addEventListener('hardwareBackPress',this.onBackPress);_reactNative.DeviceEventEmitter.addListener(PopupView.EventType,function(event){if(event.event==='dismiss'){_this3.dismiss();}});_reactNative.Animated.timing(this.opacityAnim,{toValue:1,duration:200,easing:_reactNative.Easing.linear}).start();_reactNative.Animated.timing(this.translateY,{toValue:0,duration:200,easing:_reactNative.Easing.linear}).start();}},{key:'componentWillUnmount',value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.onBackPress);_reactNative.DeviceEventEmitter.removeAllListeners(PopupView.EventType);}}]);return PopupView;}(_react.Component),_class.EventType="smart-span-view",_temp);


var styles=_reactNative.StyleSheet.create({
container:{
position:"absolute",
left:0,
right:0,
top:0,
bottom:0,

justifyContent:"center",
backgroundColor:'#00000055',
alignItems:"stretch"},

blankArea:{
flex:1},

sheetCard:{










margin:10},


bodyContainer:{
backgroundColor:"#F4F4F4",
borderRadius:width*0.025,
alignItems:'stretch',
justifyContent:'center'},

sheetCardItem:{
height:45,
alignItems:'center',
justifyContent:'center'},

sheetCardItemText:{
fontSize:17,
color:"#007AFF"},

btnCancelContainer:{
marginTop:10,
backgroundColor:"#F4F4F4",
borderRadius:width*0.025,
alignItems:'stretch',
justifyContent:'center'},

btnCancel:{
alignItems:'center',
justifyContent:'center',
height:45},

btnCancelText:{
fontSize:17,
color:"#007AFF"},

lineH:{
height:_reactNative.StyleSheet.hairlineWidth*2,
backgroundColor:"#cacace"},

title:{
fontSize:15,
color:"#656565",
textAlign:"center",
margin:10},


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

label:{
fontSize:15,
color:"#656565",
textAlign:"center",

padding:15,
paddingBottom:20}});exports.default=



PopupView;