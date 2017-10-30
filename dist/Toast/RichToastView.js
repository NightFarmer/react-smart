Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Toast/RichToastView.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=









_reactNative.Dimensions.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height;
var viewHeight=35;var

RichToastView=function(_Component){_inherits(RichToastView,_Component);





function RichToastView(props){_classCallCheck(this,RichToastView);var _this=_possibleConstructorReturn(this,(RichToastView.__proto__||Object.getPrototypeOf(RichToastView)).call(this,
props));_this.bottomAnim=new _reactNative.Animated.Value(-height/12);_this.opacityAnim=new _reactNative.Animated.Value(0);_this.dismissHandler=null;_this.


















buildStyle=function(){



return{
bottom:_this.bottomAnim,
opacity:_this.opacityAnim};

};_this.






































timingDismiss=function(){
_this.dismissHandler=setTimeout(function(){
_this.dismiss();
},1700);
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
};_this.state={message:_this.props.info.message?_this.props.info.message:'',icon:_this.props.info.icon?_this.props.info.icon:require('../../img/info.png')};return _this;}_createClass(RichToastView,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:34}},_react2.default.createElement(_reactNative.Animated.View,{style:[styles.toast,this.buildStyle()],__source:{fileName:_jsxFileName,lineNumber:35}},_react2.default.createElement(_reactNative.Image,{source:this.state.icon,style:[styles.icon,{tintColor:'#FFF'}],__source:{fileName:_jsxFileName,lineNumber:36}}),_react2.default.createElement(_reactNative.Text,{style:styles.defaultText,__source:{fileName:_jsxFileName,lineNumber:37}},this.state.message)));}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.setState({message:nextProps.info.message?nextProps.info.message:'',icon:nextProps.info.icon?nextProps.info.icon:require('../../img/info.png')});clearTimeout(this.dismissHandler);this.timingDismiss();}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.dismissHandler);}},{key:'componentDidMount',value:function componentDidMount(){_reactNative.Animated.timing(this.bottomAnim,{toValue:0,duration:250,easing:function easing(t){t-=1.0;return t*t*((2+1)*t+2)+1.0;}}).start(this.timingDismiss);_reactNative.Animated.timing(this.opacityAnim,{toValue:1,duration:100,easing:_reactNative.Easing.linear}).start();}}]);return RichToastView;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
toast:{
backgroundColor:"#000C",
borderRadius:8,
padding:10,


minWidth:width*0.23,
maxWidth:width*0.5,

alignSelf:"center",

justifyContent:"center",
alignItems:"center"},

defaultText:{
color:"#FFF",
fontSize:width*0.035,
textAlign:'center',
marginTop:9},

icon:{
width:width*0.1,
height:width*0.1},

container:{
position:"absolute",
left:0,
right:0,
top:0,
bottom:0,
flexDirection:"row",
justifyContent:"center"}});exports.default=


RichToastView;