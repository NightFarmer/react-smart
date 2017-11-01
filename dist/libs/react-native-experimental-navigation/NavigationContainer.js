










'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/libs/react-native-experimental-navigation/NavigationContainer.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=require('react');var NavigationRootContainer=require('./NavigationRootContainer');
function createNavigationContainer(
Component)
{var
NavigationComponent=function(_React$Component){_inherits(NavigationComponent,_React$Component);function NavigationComponent(){_classCallCheck(this,NavigationComponent);return _possibleConstructorReturn(this,(NavigationComponent.__proto__||Object.getPrototypeOf(NavigationComponent)).apply(this,arguments));}_createClass(NavigationComponent,[{key:'render',value:function render()
{
return(
React.createElement(Component,_extends({
onNavigate:this.getNavigationHandler()},
this.props,{__source:{fileName:_jsxFileName,lineNumber:23}})));


}},{key:'getNavigationHandler',value:function getNavigationHandler()
{
return this.props.onNavigate||this.context.onNavigate;
}},{key:'getChildContext',value:function getChildContext()
{
return{
onNavigate:this.getNavigationHandler()};

}}]);return NavigationComponent;}(React.Component);

NavigationComponent.contextTypes={
onNavigate:_propTypes2.default.func};

NavigationComponent.childContextTypes={
onNavigate:_propTypes2.default.func};

return NavigationComponent;
}

var NavigationContainer={
create:createNavigationContainer,
RootContainer:NavigationRootContainer};



module.exports=NavigationContainer;