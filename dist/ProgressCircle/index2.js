Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/ProgressCircle/index2.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var











ProgressCircle=function(_Component){_inherits(ProgressCircle,_Component);




function ProgressCircle(props){_classCallCheck(this,ProgressCircle);var _this=_possibleConstructorReturn(this,(ProgressCircle.__proto__||Object.getPrototypeOf(ProgressCircle)).call(this,
props));_this.rotateLeft=new _reactNative.Animated.Value(0.5);_this.rotateRight=new _reactNative.Animated.Value(0);
_this.state={
borderWidth:_this.props.borderWidth?_this.props.borderWidth:10,
backgroundColor:_this.props.backgroundColor?_this.props.backgroundColor:'#FFF',
borderColor:_this.props.borderColor?_this.props.borderColor:"#FFBB02",
size:_this.props.size?_this.props.size:300};


_this.setValue(_this.props.progress?_this.props.progress:0);return _this;



}_createClass(ProgressCircle,[{key:'render',value:function render()

{
return _react2.default.createElement(_reactNative.View,{style:[styles.container,{
backgroundColor:this.state.backgroundColor,
width:this.state.size,
height:this.state.size},
this.props.style,{
transform:[]}],__source:{fileName:_jsxFileName,lineNumber:38}},




_react2.default.createElement(_reactNative.View,{style:[styles.layer,{
backgroundColor:this.state.backgroundColor,
width:this.state.size/2,
height:this.state.size}],__source:{fileName:_jsxFileName,lineNumber:48}},

_react2.default.createElement(_reactNative.Animated.View,{style:[styles.arcLeft,{
backgroundColor:this.state.backgroundColor,
width:this.state.size,
height:this.state.size,
transform:[{
rotate:this.rotateLeft.interpolate({
inputRange:[0,0.5,1],
outputRange:['-135deg','0deg','0deg']})}]}],__source:{fileName:_jsxFileName,lineNumber:53}},





_react2.default.createElement(_reactNative.View,{style:{
width:this.state.size/2,
height:this.state.size,
position:'absolute',
backgroundColor:this.state.backgroundColor,
right:0},__source:{fileName:_jsxFileName,lineNumber:66}},

_react2.default.createElement(_reactNative.View,{style:[styles.bgd,{
borderWidth:2,
width:this.state.size-this.state.borderWidth+2,
height:this.state.size-this.state.borderWidth+2,
borderRadius:this.state.size/2,
position:'absolute',
left:-this.state.size/2+this.state.borderWidth/2-1,
right:this.state.borderWidth/2-1,
top:this.state.borderWidth/2-1,
bottom:this.state.borderWidth/2-1}],__source:{fileName:_jsxFileName,lineNumber:73}})),


_react2.default.createElement(_reactNative.View,{style:{
width:this.state.size/2,
height:this.state.size,
position:'absolute',
backgroundColor:this.state.backgroundColor},__source:{fileName:_jsxFileName,lineNumber:85}},

_react2.default.createElement(_reactNative.View,{style:[styles.circleProgress,{
borderWidth:this.state.borderWidth,
borderColor:this.state.borderColor,
width:this.state.size,
height:this.state.size,
borderRadius:this.state.size/2}],__source:{fileName:_jsxFileName,lineNumber:91}}))),



_react2.default.createElement(_reactNative.View,{
style:{
width:this.state.size,
height:this.state.size,
position:'absolute',
transform:[{
rotate:"45deg"}]},__source:{fileName:_jsxFileName,lineNumber:100}},



_react2.default.createElement(_reactNative.View,{style:{
width:this.state.size/2,
height:this.state.size,
position:'absolute',
backgroundColor:this.state.backgroundColor,

left:this.state.size/2},__source:{fileName:_jsxFileName,lineNumber:110}}))),



_react2.default.createElement(_reactNative.View,{style:[styles.layer,{
backgroundColor:this.state.backgroundColor,
width:this.state.size/2,
height:this.state.size}],__source:{fileName:_jsxFileName,lineNumber:120}},

_react2.default.createElement(_reactNative.Animated.View,{style:[styles.arcRight,{
backgroundColor:this.state.backgroundColor,
width:this.state.size,
height:this.state.size,
transform:[{
rotate:this.rotateRight.interpolate({
inputRange:[0,0.5,1],
outputRange:['-180deg','-180deg','-45deg']})}]}],__source:{fileName:_jsxFileName,lineNumber:125}},



_react2.default.createElement(_reactNative.View,{style:{
width:this.state.size/2,
height:this.state.size,
position:'absolute'},__source:{fileName:_jsxFileName,lineNumber:136}},

_react2.default.createElement(_reactNative.View,{style:[styles.bgd,{
borderWidth:2,
width:this.state.size-this.state.borderWidth+2,
height:this.state.size-this.state.borderWidth+2,
borderRadius:this.state.size/2,
left:this.state.borderWidth/2-1,
top:this.state.borderWidth/2-1,
bottom:this.state.borderWidth/2-1,
right:this.state.size-this.state.borderWidth/2+1}],__source:{fileName:_jsxFileName,lineNumber:141}})),


_react2.default.createElement(_reactNative.View,{style:{
width:this.state.size/2,
height:this.state.size,
position:'absolute',
right:0,
backgroundColor:this.state.backgroundColor},__source:{fileName:_jsxFileName,lineNumber:152}},

_react2.default.createElement(_reactNative.View,{style:[styles.circleProgress,{
borderWidth:this.state.borderWidth,
borderColor:this.state.borderColor,
width:this.state.size,
height:this.state.size,
borderRadius:this.state.size/2,
left:-this.state.size/2}],__source:{fileName:_jsxFileName,lineNumber:159}}))),



_react2.default.createElement(_reactNative.View,{
style:{
width:this.state.size,
height:this.state.size,
position:'absolute',
transform:[{
rotate:"-45deg"}],

right:0},__source:{fileName:_jsxFileName,lineNumber:169}},


_react2.default.createElement(_reactNative.View,{style:{
width:this.state.size/2,
height:this.state.size,
position:'absolute',
backgroundColor:this.state.backgroundColor},__source:{fileName:_jsxFileName,lineNumber:180}}))));






}},{key:'componentDidMount',value:function componentDidMount()

{


}},{key:'setValue',value:function setValue(

to){





this.rotateLeft.setValue(Math.max(0,Math.min(0.5,to)));
this.rotateRight.setValue(Math.max(0.5,Math.min(1,to)));
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
this.setState({
borderWidth:props.borderWidth?props.borderWidth:10,
backgroundColor:props.backgroundColor?props.backgroundColor:'#FFF',
borderColor:props.borderColor?props.borderColor:"#FFBB02",
size:this.props.size?this.props.size:300});

this.animTo(props.progress?props.progress:0);
}},{key:'animTo',value:function animTo(

to){var _this2=this;
console.log('to',to);
var leftValue=Math.max(0,Math.min(0.5,to));
var rightValue=Math.max(0.5,Math.min(1,to));
if(rightValue<this.rotateRight.__getValue()){
_reactNative.Animated.timing(this.rotateLeft,{
toValue:leftValue,
duration:2000*Math.abs(leftValue-this.rotateLeft.__getValue()),
easing:_reactNative.Easing.linear}).
start(function(){
_reactNative.Animated.timing(_this2.rotateRight,{
toValue:rightValue,
duration:2000*Math.abs(rightValue-_this2.rotateRight.__getValue()),
easing:_reactNative.Easing.linear}).
start(function(){return console.log('finish');});
});
}else{
_reactNative.Animated.timing(this.rotateRight,{
toValue:rightValue,
duration:2000*Math.abs(rightValue-this.rotateRight.__getValue()),
easing:_reactNative.Easing.linear}).
start(function(){
_reactNative.Animated.timing(_this2.rotateLeft,{
toValue:leftValue,
duration:2000*Math.abs(leftValue-_this2.rotateLeft.__getValue()),
easing:_reactNative.Easing.linear}).
start(function(){return console.log('finish');});
});
}
}}]);return ProgressCircle;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
width:160,
height:160,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

bgd:{
width:10,
height:10,

borderRadius:5,
borderColor:"#b9b9b9",
position:'absolute',
left:0,
top:0},

layer:{
height:160,
width:80},

circleProgress:{
width:160,
height:160,

borderRadius:80},

arcLeft:{
width:160,
height:160,
left:0,
position:'absolute',
transform:[
{rotate:'-10deg'}]},


arcRight:{
width:160,
height:160,
right:0,
position:'absolute',
transform:[
{rotate:'-10deg'}]},


maskLeft:{
width:80,
height:160,
position:'absolute',
left:0},

maskRight:{
width:80,
height:160,
position:'absolute',
right:0}});exports.default=



ProgressCircle;