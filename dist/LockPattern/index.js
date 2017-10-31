Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='src/LockPattern/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);



var _reactNative=require('react-native');












var _mobxReact=require('mobx-react');

var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


LockPattern=(0,_mobxReact.observer)(_class=function(_Component){_inherits(LockPattern,_Component);







function LockPattern(props){_classCallCheck(this,LockPattern);var _this=_possibleConstructorReturn(this,(LockPattern.__proto__||Object.getPrototypeOf(LockPattern)).call(this,
props));_this.size=300;_this.lineWidth=7;_this.borderWidth=1;_this.borderWidthActive=2;_this.
















































renderLine=function(){
return[0,1,2,3,4,5,6,7,8].map(function(index){
var line=_this.line[index];
return _react2.default.createElement(_reactNative.Animated.View,{
style:{
width:_this.size*3,
height:_this.size*3,
position:'absolute',
transform:[{
rotate:line.rotate.interpolate({
inputRange:[0,360],
outputRange:['0deg','360deg']})}],


left:line.left,
top:line.top,
opacity:line.opacity},

key:index,__source:{fileName:_jsxFileName,lineNumber:84}},

_react2.default.createElement(_reactNative.Animated.View,{
style:{
position:"absolute",
height:_this.lineWidth,
width:line.length,
backgroundColor:_this.color,
left:_this.size*3/2,
top:_this.size*3/2-_this.lineWidth/2},

ref:function ref(it){
line.ref=it;
},__source:{fileName:_jsxFileName,lineNumber:101}}));

});
};_this.















renderDot=function(){
var dotSize=_this.size*0.23;
var centerDotSize=_this.size*0.07;
return[0,1,2,3,4,5,6,7,8].map(function(index){
return _react2.default.createElement(_reactNative.View,{
style:{width:_this.size/3,height:_this.size/3,alignItems:'center',justifyContent:'center'},
key:index,__source:{fileName:_jsxFileName,lineNumber:135}},
_react2.default.createElement(_reactNative.Animated.View,{style:{
width:dotSize,
height:dotSize,
borderRadius:dotSize/2,
backgroundColor:"#FFF",

borderWidth:_this.dotArr[index].borderWidth,
borderColor:_this.color,
alignItems:'center',
justifyContent:'center'},__source:{fileName:_jsxFileName,lineNumber:138}},

_react2.default.createElement(_reactNative.Animated.View,{style:{
width:centerDotSize,
height:centerDotSize,
borderRadius:centerDotSize/2,
backgroundColor:_this.color,
opacity:_this.dotArr[index].showCenterDot},__source:{fileName:_jsxFileName,lineNumber:149}})));



});
};_this.

parentX=0;_this.
parentY=0;_this.

panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(evt,gestureState){return true;},
onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(evt,gestureState){return true;},
onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(evt,gestureState){return true;},
onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(evt,gestureState){return true;},

onPanResponderGrant:function onPanResponderGrant(evt,gestureState){

_this.parentX=gestureState.x0-evt.nativeEvent.locationX;
_this.parentY=gestureState.y0-evt.nativeEvent.locationY;

var point={x:gestureState.x0-_this.parentX,y:gestureState.y0-_this.parentY};
var inDot=_this.isInDot(point);
if(inDot){
_this.reset();

var line=_this.line[0];
line.opacity.setValue(1);
line.left.setValue(inDot.centerPoint.x-_this.size*3/2);
line.top.setValue(inDot.centerPoint.y-_this.size*3/2);
_this.pointStatck.splice(0);
_this.pointStatck.push(inDot.index);
_this.dotArr[inDot.index].borderWidth.setValue(_this.borderWidthActive);
_this.dotArr[inDot.index].showCenterDot.setValue(1);
}
},
onPanResponderMove:function onPanResponderMove(evt,gestureState){

var point={x:gestureState.moveX-_this.parentX,y:gestureState.moveY-_this.parentY};





point.x=Math.max(0,Math.min(_this.size,point.x));
point.y=Math.max(0,Math.min(_this.size,point.y));
var inDot=_this.isInDot(point);
var latestIndex=_this.pointStatck[_this.pointStatck.length-1];

if(!inDot||latestIndex===inDot.index||_this.pointUsed(inDot.index)){
var line=_this.line[_this.pointStatck.length-1];
var latestPoint=_this.index2Point(_this.pointStatck[_this.pointStatck.length-1]);
var angle=_this.angle(latestPoint,point);

line.rotate.setValue(angle);
var distance=_this.distance(latestPoint,point);
line.length.setValue(distance);

}else if(inDot&&!_this.pointUsed(inDot.index)){
var _line=_this.line[_this.pointStatck.length-1];
var _latestPoint=_this.index2Point(_this.pointStatck[_this.pointStatck.length-1]);
var _angle=_this.angle(_latestPoint,inDot.centerPoint);
_line.rotate.setValue(_angle);
var _distance=_this.distance(_latestPoint,inDot.centerPoint);
_line.length.setValue(_distance);
_this.dotArr[inDot.index].borderWidth.setValue(_this.borderWidthActive);
_this.dotArr[inDot.index].showCenterDot.setValue(1);

_this.pointStatck.push(inDot.index);
var nextLine=_this.line[_this.pointStatck.length-1];
nextLine.left.setValue(inDot.centerPoint.x-_this.size*3/2);
nextLine.top.setValue(inDot.centerPoint.y-_this.size*3/2);
nextLine.opacity.setValue(1);
}
},
onPanResponderTerminationRequest:function onPanResponderTerminationRequest(evt,gestureState){return false;},
onPanResponderRelease:function onPanResponderRelease(evt,gestureState){
_this.finish();
},
onPanResponderTerminate:function onPanResponderTerminate(evt,gestureState){
_this.finish();
},
onShouldBlockNativeResponder:function onShouldBlockNativeResponder(evt,gestureState){
return true;
}});_this.
















finish=function(){

var line=_this.line[_this.pointStatck.length-1];
line.opacity.setValue(0);
line.length.setValue(0);
if(_this.props.onFinish){
var result=_this.props.onFinish(_this.pointStatck);
_this.setState({
isWrong:!result});

}
};_this.size=_this.props.size?_this.props.size:300;_this.lineWidth=_this.props.lineWidth?_this.props.lineWidth:7;_this.borderWidth=_this.props.lineWidth?_this.props.lineWidth:1;_this.borderWidthActive=_this.props.lineWidth?_this.props.lineWidth:2;_this.line=[];_this.dotArr=[];for(var i=0;i<9;i++){_this.line.push({left:new _reactNative.Animated.Value(0),top:new _reactNative.Animated.Value(0),length:new _reactNative.Animated.Value(0),opacity:new _reactNative.Animated.Value(0),rotate:new _reactNative.Animated.Value(45)});_this.dotArr.push({showCenterDot:new _reactNative.Animated.Value(0),borderWidth:new _reactNative.Animated.Value(_this.borderWidth)});}_this.pointStatck=[];_this.state={isWrong:false};return _this;}_createClass(LockPattern,[{key:'render',value:function render(){var size=this.size;return _react2.default.createElement(_reactNative.View,{style:[{backgroundColor:"#FFF"},this.props.style,{width:size,height:size}],__source:{fileName:_jsxFileName,lineNumber:62}},_react2.default.createElement(_reactNative.View,{style:{width:size,height:size,position:'absolute'},__source:{fileName:_jsxFileName,lineNumber:63}},this.renderLine()),_react2.default.createElement(_reactNative.View,{style:{width:size,height:size,position:'absolute',flexWrap:'wrap',flexDirection:"row"},__source:{fileName:_jsxFileName,lineNumber:66}},this.renderDot()),_react2.default.createElement(_reactNative.View,_extends({style:{width:size,height:size,position:'absolute'}},this.panResponder.panHandlers,{pointerEvents:'box-only',__source:{fileName:_jsxFileName,lineNumber:75}})));}},{key:'reset',value:function reset(){var _this2=this;this.setState({isWrong:false});this.line.forEach(function(it){it.opacity.setValue(0);it.length.setValue(0);});this.dotArr.forEach(function(it){it.borderWidth.setValue(_this2.borderWidth);it.showCenterDot.setValue(0);});}},{key:'angle',value:function angle(

start,end){
var diff_x=end.x-start.x,
diff_y=end.y-start.y;

var number=360*Math.atan(diff_y/diff_x)/(2*Math.PI);
if(Math.sign(diff_x)===-1){
number+=180;
}
return number;
}},{key:'distance',value:function distance(

start,end){
return Math.sqrt(Math.pow(start.x-end.x,2)+Math.pow(start.y-end.y,2));
}},{key:'pointUsed',value:function pointUsed(

index){
for(var i=0;i<this.pointStatck.length;i++){
if(this.pointStatck[i]===index){
return true;
}
}
return false;
}},{key:'point2Index',value:function point2Index(

point){
var dotSize=this.size/3;
var rowNum=Math.floor(point.y/dotSize);
var colNum=Math.floor(point.x/dotSize);
return Math.min(8,rowNum*3+colNum);
}},{key:'index2Point',value:function index2Point(

index){
var dotSize=this.size/3;
var rowNum=Math.floor(index/3);
var colNum=index%3;
var y=rowNum*dotSize+dotSize/2;
var x=colNum*dotSize+dotSize/2;
return{x:x,y:y};
}},{key:'isInDot',value:function isInDot(

point){
var dotCircleSize=this.size*0.23;
var index=this.point2Index(point);
var centerPoint=this.index2Point(index);
var distance=this.distance(point,centerPoint);
if(distance<=dotCircleSize/2){
return{
index:index,
centerPoint:centerPoint};

}
}},{key:'color',get:function get(){if(!this.state.isWrong){if(this.props.normalColor){return this.props.normalColor;}return _Theme2.default.PrimaryColor;}else{if(this.props.wrongColor){return this.props.wrongColor;}return"#f04a52";}}}]);return LockPattern;}(_react.Component))||_class;exports.default=



LockPattern;