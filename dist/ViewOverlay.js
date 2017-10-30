Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/ViewOverlay.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _DeviceInfo=require('./DeviceInfo');var _DeviceInfo2=_interopRequireDefault(_DeviceInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
ViewOverlay=function(_Component){_inherits(ViewOverlay,_Component);

function ViewOverlay(props){_classCallCheck(this,ViewOverlay);var _this=_possibleConstructorReturn(this,(ViewOverlay.__proto__||Object.getPrototypeOf(ViewOverlay)).call(this,
props));
_this.state={
key:0,
toast:null,
spin:null,
layerList:[],
i:0};return _this;

}_createClass(ViewOverlay,[{key:'render',value:function render()

{
return _react2.default.createElement(_reactNative.View,{style:styles.viewOverlay,pointerEvents:'box-none',__source:{fileName:_jsxFileName,lineNumber:18}},
this.state.layerList.map(function(it){return it.view;}),
this.state.toast,
this.state.spin);

}},{key:'componentWillMount',value:function componentWillMount()


















{var _this2=this;
_reactNative.DeviceEventEmitter.addListener("setState",function(state){
_this2.setState(state);
});

_reactNative.DeviceEventEmitter.addListener("addLayer",function(event){
_this2.state.layerList.push(event);
_this2.setState({layerList:_this2.state.layerList});
});

_reactNative.DeviceEventEmitter.addListener("removeLayer",function(event){
var layerList=_this2.state.layerList;
for(var i=0;i<layerList.length;i++){
if(layerList[i].id===event.id){
layerList.splice(i,1);
break;
}
}
_this2.setState({layerList:layerList});
});







}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
_reactNative.DeviceEventEmitter.removeAllListeners("setState");
_reactNative.DeviceEventEmitter.removeAllListeners("addLayer");
_reactNative.DeviceEventEmitter.removeAllListeners("removeLayer");






}}],[{key:'setToast',value:function setToast(view){_reactNative.DeviceEventEmitter.emit("setState",{toast:view});}},{key:'setSpin',value:function setSpin(view){_reactNative.DeviceEventEmitter.emit("setState",{spin:view});}},{key:'addLayer',value:function addLayer(view,id){_reactNative.DeviceEventEmitter.emit("addLayer",{view:view,id:id});return view;}},{key:'removeLayer',value:function removeLayer(id){_reactNative.DeviceEventEmitter.emit("removeLayer",{id:id});}}]);return ViewOverlay;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
position:'relative'},

viewOverlay:{
position:"absolute",
left:0,
right:0,
top:0,
bottom:0,
flexDirection:"row",
justifyContent:"center"}});



var originRegister=_reactNative.AppRegistry.registerComponent;

_reactNative.AppRegistry.registerComponent=function(appKey,getAppComponent){

return originRegister(appKey,function(){
var OriginAppComponent=getAppComponent();

return function(_Component2){_inherits(_class,_Component2);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}_createClass(_class,[{key:'render',value:function render()

{
_DeviceInfo2.default.Android.SDK_INT=this.props.Android_SDK_INT;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:112}},
_react2.default.createElement(OriginAppComponent,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:113}})),
_react2.default.createElement(ViewOverlay,{__source:{fileName:_jsxFileName,lineNumber:114}})));


}}]);return _class;}(_react.Component);

});
};exports.default=

ViewOverlay;