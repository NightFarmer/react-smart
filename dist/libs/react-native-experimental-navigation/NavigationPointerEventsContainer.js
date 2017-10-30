































'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/libs/react-native-experimental-navigation/NavigationPointerEventsContainer.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=require('react');
var NavigationAnimatedValueSubscription=require('./NavigationAnimatedValueSubscription');

var invariant=require('fbjs/lib/invariant');







var MIN_POSITION_OFFSET=0.01;






function create(
Component)
{var

Container=function(_React$Component){_inherits(Container,_React$Component);









function Container(props,context){_classCallCheck(this,Container);var _this=_possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).call(this,
props,context));
_this._pointerEvents=_this._computePointerEvents();return _this;
}_createClass(Container,[{key:'componentWillMount',value:function componentWillMount()

{
this._onPositionChange=this._onPositionChange.bind(this);
this._onComponentRef=this._onComponentRef.bind(this);
}},{key:'componentDidMount',value:function componentDidMount()

{
this._bindPosition(this.props);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._positionListener&&this._positionListener.remove();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
this._bindPosition(nextProps);
}},{key:'render',value:function render()

{
this._pointerEvents=this._computePointerEvents();
return(
React.createElement(Component,_extends({},
this.props,{
pointerEvents:this._pointerEvents,
onComponentRef:this._onComponentRef,__source:{fileName:_jsxFileName,lineNumber:92}})));


}},{key:'_onComponentRef',value:function _onComponentRef(

component){
this._component=component;
if(component){
invariant(
typeof component.setNativeProps==='function',
'component must implement method `setNativeProps`');

}
}},{key:'_bindPosition',value:function _bindPosition(

props){
this._positionListener&&this._positionListener.remove();
this._positionListener=new NavigationAnimatedValueSubscription(
props.position,
this._onPositionChange);

}},{key:'_onPositionChange',value:function _onPositionChange()

{
if(this._component){
var pointerEvents=this._computePointerEvents();
if(this._pointerEvents!==pointerEvents){
this._pointerEvents=pointerEvents;
this._component.setNativeProps({pointerEvents:pointerEvents});
}
}
}},{key:'_computePointerEvents',value:function _computePointerEvents()

{var _props=




this.props,navigationState=_props.navigationState,position=_props.position,scene=_props.scene;

if(scene.isStale||navigationState.index!==scene.index){

return scene.index>navigationState.index?
'box-only':
'none';
}

var offset=position.__getAnimatedValue()-navigationState.index;
if(Math.abs(offset)>MIN_POSITION_OFFSET){



return'box-only';
}

return'auto';
}}]);return Container;}(React.Component);

return Container;
}

module.exports={
create:create};