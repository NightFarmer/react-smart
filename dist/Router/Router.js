Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_class2,_temp2,_jsxFileName='src/Router/Router.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _native=require('mobx-react/native');
var _reactNative=require('react-native');
var _Actions=require('./Actions');var _Actions2=_interopRequireDefault(_Actions);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _AppNavigator=require('./AppNavigator');var _AppNavigator2=_interopRequireDefault(_AppNavigator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


App=(0,_native.observer)(_class=(_temp2=_class2=function(_Component){_inherits(App,_Component);function App(){var _ref;var _temp,_this,_ret;_classCallCheck(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=App.__proto__||Object.getPrototypeOf(App)).call.apply(_ref,[this].concat(args))),_this),_this.













onBackPress=function(){
_Actions2.default.pop();
return _Actions2.default.currentScene!==_Actions2.default.prevScene;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(App,[{key:'componentDidMount',value:function componentDidMount(){_reactNative.BackHandler.addEventListener('hardwareBackPress',this.props.backAndroidHandler||this.onBackPress);}},{key:'componentWillUnmount',value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.props.backAndroidHandler||this.onBackPress);}},{key:'render',value:function render()

{


return(
_react2.default.createElement(_AppNavigator2.default,{__source:{fileName:_jsxFileName,lineNumber:33}}));

}}]);return App;}(_react.Component),_class2.propTypes={navigator:_propTypes2.default.func,backAndroidHandler:_propTypes2.default.func},_temp2))||_class;var


Router=function(_Component2){_inherits(Router,_Component2);




function Router(props){_classCallCheck(this,Router);var _this2=_possibleConstructorReturn(this,(Router.__proto__||Object.getPrototypeOf(Router)).call(this,
props));

_this2.handleProps=_this2.handleProps.bind(_this2);
_this2.handleBackAndroid=_this2.handleBackAndroid.bind(_this2);
var scenesMap=_this2.handleProps(props);

_Actions2.default.scenesMap=scenesMap;return _this2;
}_createClass(Router,[{key:'componentDidMount',value:function componentDidMount()

{
_reactNative.BackHandler.addEventListener('hardwareBackPress',this.handleBackAndroid);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
var scenesMap=this.handleProps(props);

_Actions2.default.scenesMap=scenesMap;
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.handleBackAndroid);
}},{key:'handleBackAndroid',value:function handleBackAndroid()

{var _props=




this.props,backAndroidHandler=_props.backAndroidHandler,onBackAndroid=_props.onBackAndroid,onExitApp=_props.onExitApp;

if(backAndroidHandler){
return backAndroidHandler();
}

try{
_Actions2.default.androidBack();
if(onBackAndroid){
onBackAndroid();
}
return true;
}catch(err){
if(onExitApp){
return onExitApp();
}

return false;
}
}},{key:'handleProps',value:function handleProps(

props){
var scenesMap=void 0;

if(props.scenes){
scenesMap=props.scenes;
}else{
var scenes=props.children;

if(Array.isArray(props.children)||props.children.props.component){
scenes=
_react2.default.createElement(Scene,_extends({
key:'__root',
hideNav:true},
this.props,{__source:{fileName:_jsxFileName,lineNumber:103}}),

props.children);


}
scenesMap=_Actions2.default.create(scenes,props.wrapBy);
}

console.log(scenesMap);






console.log(typeof _Actions2.default.sceneStack,123);
console.log(_Actions2.default.sceneStack,123);
console.log(_Actions2.default.sceneStack.push);
console.log(scenesMap.SimpleList);
console.log(scenesMap.SimpleList.component);
_Actions2.default.sceneStack.push(scenesMap.SimpleList);




return scenesMap;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(App,{__source:{fileName:_jsxFileName,lineNumber:137}}));

}}]);return Router;}(_react.Component);


























Router.propTypes={};exports.default=











Router;