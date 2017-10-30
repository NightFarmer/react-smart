Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_jsxFileName='src/SpinProgress/SpinView.js';var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');











var _ProgressCircle=require('../ProgressCircle');var _ProgressCircle2=_interopRequireDefault(_ProgressCircle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=

_reactNative.Dimensions.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height;var

SpinView=(_temp=_class=function(_Component){_inherits(SpinView,_Component);





function SpinView(props){_classCallCheck(this,SpinView);var _this=_possibleConstructorReturn(this,(SpinView.__proto__||Object.getPrototypeOf(SpinView)).call(this,
props));_this.opacityAnim=new _reactNative.Animated.Value(0);_this.
















buildStyle=function(){
return{

opacity:_this.opacityAnim};

};_this.




































onBackPress=function(){
_this.dismiss();
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
};_this.state={message:_this.props.info.message?_this.props.info.message:'',progress:0};return _this;}_createClass(SpinView,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.Animated.View,{style:[styles.container,this.buildStyle()],__source:{fileName:_jsxFileName,lineNumber:36}},_react2.default.createElement(_reactNative.Animated.View,{style:[styles.spinCard,this.buildStyle()],__source:{fileName:_jsxFileName,lineNumber:37}},_react2.default.createElement(_ProgressCircle2.default,{size:width*0.12,color:'#337ab7',style:styles.indicator,progress:this.state.progress,__source:{fileName:_jsxFileName,lineNumber:38}}),_react2.default.createElement(_reactNative.Text,{style:styles.label,__source:{fileName:_jsxFileName,lineNumber:40}},this.state.message)));}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.setState({message:nextProps.info.message?nextProps.info.message:'',progress:0});}},{key:'componentDidMount',value:function componentDidMount(){var _this2=this;_reactNative.BackHandler.addEventListener('hardwareBackPress',this.onBackPress);_reactNative.DeviceEventEmitter.addListener(SpinView.EventType,function(event){if(event.event==='dismiss'){_this2.dismiss();}else if(event.event==='update'){_this2.setState({progress:event.value});}});_reactNative.Animated.timing(this.opacityAnim,{toValue:1,duration:100,easing:_reactNative.Easing.linear}).start();}},{key:'componentWillUnmount',value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.onBackPress);_reactNative.DeviceEventEmitter.removeAllListeners(SpinView.EventType);}}]);return SpinView;}(_react.Component),_class.EventType="smart-span-progress-view",_temp);


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

spinCard:{
minWidth:width*0.27,
maxWidth:width*0.3,
minHeight:width*0.27,
backgroundColor:"#FFF",
borderRadius:width*0.025,
padding:10},

indicator:{
height:width*0.15,
alignSelf:'center'},


label:{
fontSize:width*0.035,
color:"#333333",
paddingTop:5,
textAlign:"center"}});exports.default=



SpinView;