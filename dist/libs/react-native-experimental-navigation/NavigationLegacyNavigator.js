































'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/libs/react-native-experimental-navigation/NavigationLegacyNavigator.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=require('react-native').Animated;
var NavigationAnimatedValueSubscription=require('./NavigationAnimatedValueSubscription');
var NavigationAnimatedView=require('./NavigationAnimatedView');
var NavigationCard=require('./NavigationCard');
var NavigationCardStackStyleInterpolator=require('./NavigationCardStackStyleInterpolator');
var NavigationContext=require('./NavigationContext');
var NavigationLegacyNavigatorRouteStack=require('./NavigationLegacyNavigatorRouteStack');
var NavigationCardStackPanResponder=require('./NavigationCardStackPanResponder');
var NavigationPagerPanResponder=require('./NavigationPagerPanResponder');
var NavigationPagerStyleInterpolator=require('./NavigationPagerStyleInterpolator');
var NavigatorBreadcrumbNavigationBar=require('./NavigatorBreadcrumbNavigationBar');
var NavigatorNavigationBar=require('./NavigatorNavigationBar');
var NavigatorSceneConfigs=require('./NavigatorSceneConfigs');
var React=require('react');
var ReactComponentWithPureRenderMixin=require('react-addons-pure-render-mixin');





























var RouteStack=NavigationLegacyNavigatorRouteStack;var









NavigationLegacyNavigator=function(_React$Component){_inherits(NavigationLegacyNavigator,_React$Component);
























function NavigationLegacyNavigator(props,context){_classCallCheck(this,NavigationLegacyNavigator);var _this=_possibleConstructorReturn(this,(NavigationLegacyNavigator.__proto__||Object.getPrototypeOf(NavigationLegacyNavigator)).call(this,
props,context));

var stack=_this._getInitialRouteStack();




_this._previousStack=stack;
_this._stack=stack;
_this._useAnimation=false;


_this.parentNavigator=props.navigator;
_this.navigationContext=new NavigationContext();

_this.state={
routeStack:stack.toArray(),
presentedIndex:stack.index};return _this;

}_createClass(NavigationLegacyNavigator,[{key:'jumpTo',value:function jumpTo(

route){
this._applyStack(this._stack.jumpTo(route));
}},{key:'jumpForward',value:function jumpForward()

{
this._applyStack(this._stack.jumpForward());
}},{key:'jumpBack',value:function jumpBack()

{
this._applyStack(this._stack.jumpBack());
}},{key:'push',value:function push(

route){
this._applyStack(this._stack.push(route));
}},{key:'pop',value:function pop()

{
this._applyStack(this._stack.pop());
}},{key:'replaceAtIndex',value:function replaceAtIndex(

route,index){
this._applyStack(this._stack.replaceAtIndex(index,route));
}},{key:'replace',value:function replace(

route){
this.replaceAtIndex(route,this._stack.index);
}},{key:'replacePrevious',value:function replacePrevious(

route){
this.replaceAtIndex(route,this._stack.index-1);
}},{key:'popToTop',value:function popToTop()

{
this._applyStack(this._stack.slice(0,1));
}},{key:'popToRoute',value:function popToRoute(

route){
this._applyStack(this._stack.popToRoute(route));
}},{key:'replacePreviousAndPop',value:function replacePreviousAndPop(

route){
this._applyStack(this._stack.replacePreviousAndPop(route));
}},{key:'resetTo',value:function resetTo(

route){
this._applyStack(this._stack.resetTo(route));
}},{key:'immediatelyResetRouteStack',value:function immediatelyResetRouteStack(

routes){
this._applyStack(this._stack.resetRoutes(routes),true);
}},{key:'getCurrentRoutes',value:function getCurrentRoutes()

{
return this._stack.toArray();
}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(



nextProps,nextState){
return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(
this,
nextProps,
nextState);

}},{key:'componentWillMount',value:function componentWillMount()

{
this._applyAnimation=this._applyAnimation.bind(this);
this._onNavigate=this._onNavigate.bind(this);
this._onNavigationBarRef=this._onNavigationBarRef.bind(this);
this._onPositionChange=this._onPositionChange.bind(this);
this._renderCard=this._renderCard.bind(this);
this._renderHeader=this._renderHeader.bind(this);
this._renderScene=this._renderScene.bind(this);

this._willFocus();
}},{key:'componentDidMount',value:function componentDidMount()

{
this._didFocus();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._positionListener&&this._positionListener.remove();
}},{key:'componentWillUpdate',value:function componentWillUpdate(

nextProps,nextState){
this._willFocus();
}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps,prevState){
if(this._useAnimation){

return;
}
this._didFocus();
}},{key:'render',value:function render()

{
return(
React.createElement(NavigationAnimatedView,{
applyAnimation:this._applyAnimation,
navigationState:this._stack.toNavigationState(),
onNavigate:this._onNavigate,
renderOverlay:this._renderHeader,
renderScene:this._renderCard,
style:this.props.style,__source:{fileName:_jsxFileName,lineNumber:236}}));


}},{key:'_getInitialRouteStack',value:function _getInitialRouteStack()

{var _props=
this.props,initialRouteStack=_props.initialRouteStack,initialRoute=_props.initialRoute;
var routes=initialRouteStack||[initialRoute];
var index=initialRoute?
routes.indexOf(initialRoute):
routes.length-1;
return new RouteStack(index,routes);
}},{key:'_renderHeader',value:function _renderHeader(

props){


this._positionListener&&this._positionListener.remove();
this._positionListener=new NavigationAnimatedValueSubscription(
props.position,
this._onPositionChange);var _props2=


this.props,navigationBar=_props2.navigationBar,navigationBarNavigator=_props2.navigationBarNavigator;
if(!navigationBar){
return null;
}

return React.cloneElement(
navigationBar,
{
key:'header_'+props.scene.key,
ref:this._onNavigationBarRef,
navigator:navigationBarNavigator||this,
navState:_extends({},this.state)});


}},{key:'_renderCard',value:function _renderCard(

props){var
scene=props.scene;var
configureScene=this.props.configureScene;


var styleGetter=NavigationCardStackStyleInterpolator.forHorizontal;
var panResponderGetter=NavigationCardStackPanResponder.forHorizontal;

if(configureScene){
var route=RouteStack.getRouteByNavigationState(scene.navigationState);
var config=configureScene(route,this.state.routeStack);

if(config){
var gestures=config.gestures||{};
if(gestures.pop&&gestures.pop.direction==='left-to-right'){

}else if(gestures.pop&&gestures.pop.direction==='top-to-bottom'){
styleGetter=NavigationCardStackStyleInterpolator.forVertical;
panResponderGetter=NavigationCardStackPanResponder.forVertical;
}else if(
gestures.jumpBack&&
gestures.jumpForward&&
gestures.jumpBack.direction==='left-to-right'&&
gestures.jumpForward.direction==='right-to-left')
{
styleGetter=NavigationPagerStyleInterpolator.forHorizontal;
panResponderGetter=NavigationPagerPanResponder.forHorizontal;
}else if(__DEV__){
console.warn('unsupported scene configuration',config);
}
}
}

var style=styleGetter(props);
var panHandlers=panResponderGetter(props);

return(
React.createElement(NavigationCard,_extends({},
props,{
key:'card_'+props.scene.key,
panHandlers:panHandlers,
renderScene:this._renderScene,
style:style,__source:{fileName:_jsxFileName,lineNumber:318}})));


}},{key:'_renderScene',value:function _renderScene(

props){var
navigationState=props.scene.navigationState;
var route=RouteStack.getRouteByNavigationState(navigationState);
return this.props.renderScene(route,this);
}},{key:'_applyStack',value:function _applyStack(


stack,
noAnimation)
{
if(stack!==this._stack){
this._previousStack=this._stack;
this._stack=stack;

this._useAnimation=noAnimation||
this._previousStack.index!==stack.index;

this.setState({
presentedIndex:stack.index,
routeStack:stack.toArray()});

}
}},{key:'_onNavigationBarRef',value:function _onNavigationBarRef(

navigationBarRef){
this._navigationBarRef=navigationBarRef;var
navigationBar=this.props.navigationBar;
if(navigationBar&&typeof navigationBar.ref==='function'){
navigationBar.ref(navigationBarRef);
}
}},{key:'_onPositionChange',value:function _onPositionChange(

data){
var fromIndex=this._previousStack.index;
var toIndex=this._stack.index;

if(
fromIndex!==toIndex&&
this._navigationBarRef&&
typeof this._navigationBarRef.updateProgress==='function')
{
var progress=(data.value-fromIndex)/(toIndex-fromIndex);
this._navigationBarRef.updateProgress(progress,fromIndex,toIndex);
}

var diff=this._stack.index-data.value;


if(diff<0.05){
this._didFocus();
}
}},{key:'_applyAnimation',value:function _applyAnimation(


position,
nextState,
prevState)
{var
index=nextState.index;

if(!this._useAnimation){
position.setValue(index);
return;
}

Animated.timing(
position,
{
duration:500,
toValue:index}).

start();
}},{key:'_willFocus',value:function _willFocus()

{
var route=this._stack.get(this._stack.index);
if(this._routeToFocus===route){
return;
}
this._routeToFocus=route;
this.navigationContext.emit('willfocus',{route:route});
this.props.onWillFocus&&this.props.onWillFocus(route);
}},{key:'_didFocus',value:function _didFocus()

{
var route=this._stack.get(this._stack.index);
if(this._routeFocused===route){
return;
}
this._routeFocused=route;
this.navigationContext.emit('didfocus',{route:route});
this.props.onDidFocus&&this.props.onDidFocus(route);
}},{key:'_onNavigate',value:function _onNavigate(

action){
switch(action){
case NavigationCardStackPanResponder.Actions.BACK:
this.pop();
break;
case NavigationPagerPanResponder.Actions.JUMP_BACK:
this.jumpBack();
break;
case NavigationPagerPanResponder.Actions.JUMP_FORWARD:
this.jumpForward();
break;
default:
if(__DEV__){
console.warn('unsupported gesture action',action);
}}

}}]);return NavigationLegacyNavigator;}(React.Component);



NavigationLegacyNavigator.BreadcrumbNavigationBar=NavigatorBreadcrumbNavigationBar;
NavigationLegacyNavigator.NavigationBar=NavigatorNavigationBar;
NavigationLegacyNavigator.SceneConfigs=NavigatorSceneConfigs;

module.exports=NavigationLegacyNavigator;