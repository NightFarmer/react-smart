Object.defineProperty(exports,"__esModule",{value:true});exports.actionMap=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _actionMap,_jsxFileName='src/Router/Actions.js',_desc,_value,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4;var _react=require('react');var _react2=_interopRequireDefault(_react);
var _mobx=require('mobx');
var _ActionConst=require('./ActionConst');var ActionConst=_interopRequireWildcard(_ActionConst);
var _Util=require('./Util');
var _reactNative=require('react-native');

var _Scene=require('./Scene');var _Scene2=_interopRequireDefault(_Scene);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}


var RightNavBarButton=void 0;
var LeftNavBarButton=void 0;
var BackNavBarButton=void 0;
var counter=0;

var actionMap=exports.actionMap=(_actionMap={},_defineProperty(_actionMap,
ActionConst.JUMP,'jump'),_defineProperty(_actionMap,
ActionConst.PUSH,'push'),_defineProperty(_actionMap,
ActionConst.REPLACE,'replace'),_defineProperty(_actionMap,
ActionConst.BACK,'pop'),_defineProperty(_actionMap,
ActionConst.BACK_ACTION,'pop'),_defineProperty(_actionMap,
ActionConst.POP_TO,'popTo'),_defineProperty(_actionMap,
ActionConst.REFRESH,'refresh'),_defineProperty(_actionMap,
ActionConst.RESET,'reset'),_defineProperty(_actionMap,
ActionConst.PUSH_OR_POP,'push'),_actionMap);


var reservedKeys=[
'children',
'refs',
'addRef',
'removeRef',
'create',
'execute',
'popTo',
'navigate',
'replace',
'refresh',
'dispatch',
'push',
'setParams',
'run',
'onEnter',
'onRight',
'onLeft',
'left',
'back',
'right',
'rightButton',
'leftButton',
'on',
'onExit',
'pop',
'renderLeftButton',
'renderRightButton',
'renderTitle',
'navBar',
'title',
'drawerOpen',
'drawerClose'];


var dontInheritKeys=[
'component',
'contentComponent',
'tabBarComponent',
'modal',
'drawer',
'lightbox',
'overlay',
'tabs',
'navigator',
'children',
'key',
'ref',
'style',
'title',
'navTransparent',
'type',
'hideNavBar',
'hideTabBar',
'backToInitial'];


function getValue(value,params){
return value instanceof Function?value(params):value;
}

function getProperties(){var component=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var res={};
for(var _iterator=reservedKeys,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var key=_ref;
if(component[key]){
res[key]=component[key];
}
}
delete res.children;
return res;
}

function createTabBarOptions(_ref2){var tabBarStyle=_ref2.tabBarStyle,activeTintColor=_ref2.activeTintColor,inactiveTintColor=_ref2.inactiveTintColor,activeBackgroundColor=_ref2.activeBackgroundColor,inactiveBackgroundColor=_ref2.inactiveBackgroundColor,showLabel=_ref2.showLabel,labelStyle=_ref2.labelStyle,tabStyle=_ref2.tabStyle,props=_objectWithoutProperties(_ref2,['tabBarStyle','activeTintColor','inactiveTintColor','activeBackgroundColor','inactiveBackgroundColor','showLabel','labelStyle','tabStyle']);
return _extends({},
props,{
style:tabBarStyle,
activeTintColor:activeTintColor,
inactiveTintColor:inactiveTintColor,
activeBackgroundColor:activeBackgroundColor,
inactiveBackgroundColor:inactiveBackgroundColor,
showLabel:showLabel,
labelStyle:labelStyle,
tabStyle:tabStyle});

}

function createNavigationOptions(params){var

title=




params.title,backButtonImage=params.backButtonImage,navTransparent=params.navTransparent,backToInitial=params.backToInitial,hideNavBar=params.hideNavBar,hideTabBar=params.hideTabBar,backTitle=params.backTitle,right=params.right,rightButton=params.rightButton,left=params.left,leftButton=params.leftButton,navigationBarStyle=params.navigationBarStyle,headerStyle=params.headerStyle,navBarButtonColor=params.navBarButtonColor,tabBarLabel=params.tabBarLabel,tabBarIcon=params.tabBarIcon,icon=params.icon,getTitle=params.getTitle,renderTitle=params.renderTitle,panHandlers=params.panHandlers,navigationBarTitleImage=params.navigationBarTitleImage,navigationBarTitleImageStyle=params.navigationBarTitleImageStyle,component=params.component,rightTitle=params.rightTitle,leftTitle=params.leftTitle,leftButtonTextStyle=params.leftButtonTextStyle,rightButtonTextStyle=params.rightButtonTextStyle,backButtonTextStyle=params.backButtonTextStyle,headerTitleStyle=params.headerTitleStyle,titleStyle=params.titleStyle,navBar=params.navBar,onRight=params.onRight,onLeft=params.onLeft,rightButtonImage=params.rightButtonImage,leftButtonImage=params.leftButtonImage,init=params.init,back=params.back,renderBackButton=params.renderBackButton,renderNavigationBar=params.renderNavigationBar,hideDrawerButton=params.hideDrawerButton,drawerIcon=params.drawerIcon,drawerImage=params.drawerImage,drawerPosition=params.drawerPosition,props=_objectWithoutProperties(params,['title','backButtonImage','navTransparent','backToInitial','hideNavBar','hideTabBar','backTitle','right','rightButton','left','leftButton','navigationBarStyle','headerStyle','navBarButtonColor','tabBarLabel','tabBarIcon','icon','getTitle','renderTitle','panHandlers','navigationBarTitleImage','navigationBarTitleImageStyle','component','rightTitle','leftTitle','leftButtonTextStyle','rightButtonTextStyle','backButtonTextStyle','headerTitleStyle','titleStyle','navBar','onRight','onLeft','rightButtonImage','leftButtonImage','init','back','renderBackButton','renderNavigationBar','hideDrawerButton','drawerIcon','drawerImage','drawerPosition']);
var NavBar=renderNavigationBar||navBar;
if(component&&component.navigationOptions){
return component.navigationOptions;
}
return function(_ref3){var navigation=_ref3.navigation,screenProps=_ref3.screenProps;
var navigationParams=navigation.state.params||{};
var state=_extends({navigation:navigation},params,navigationParams,screenProps);
var res=_extends({},
props,{
headerTintColor:navBarButtonColor||props.tintColor||navigationParams.tintColor||navigationParams.headerTintColor,
headerTitleStyle:headerTitleStyle||titleStyle,
title:getValue(navigationParams.title||title||getTitle,state),
headerBackTitle:getValue(navigationParams.backTitle||backTitle,state),
headerRight:getValue(navigationParams.right||right||rightButton||params.renderRightButton,state),
headerLeft:getValue(navigationParams.left||left||leftButton||params.renderLeftButton,state),
headerTitle:getValue(navigationParams.renderTitle||renderTitle||params.renderTitle,state),
headerStyle:getValue(navigationParams.headerStyle||headerStyle||navigationBarStyle,state),
headerBackImage:navigationParams.backButtonImage||backButtonImage});


var NavBarFromParams=navigationParams.renderNavigationBar||navigationParams.navBar;
if(NavBarFromParams!=null){
if(NavBarFromParams){
res.header=function(data){return _react2.default.createElement(NavBarFromParams,_extends({navigation:navigation},state,data,{__source:{fileName:_jsxFileName,lineNumber:145}}));};
}
}else if(NavBar){
res.header=function(data){return _react2.default.createElement(NavBar,_extends({navigation:navigation},state,data,{__source:{fileName:_jsxFileName,lineNumber:148}}));};
}

if(typeof navigationParams.panHandlers!=='undefined'){
if(navigationParams.panHandlers===null){
res.gesturesEnabled=false;
}
}else if(panHandlers===null){
res.gesturesEnabled=false;
}

if(navigationBarTitleImage){
res.headerTitle=_react2.default.createElement(_reactNative.Image,{source:navigationBarTitleImage,style:navigationBarTitleImageStyle,__source:{fileName:_jsxFileName,lineNumber:160}});
}

if(tabBarLabel){
res.tabBarLabel=tabBarLabel;
}

if(tabBarIcon||icon){
var Icon=tabBarIcon||icon;
res.tabBarIcon=function(data){return _react2.default.createElement(Icon,_extends({},state,data,{__source:{fileName:_jsxFileName,lineNumber:169}}));};
}
var componentData={};

if(component){var _arr=
['onRight','onLeft','rightButton','leftButton','leftTitle','rightTitle','rightButtonImage',
'leftButtonImage','rightButtonTextStyle','leftButtonTextStyle','rightButtonIconStyle','leftButtonIconStyle',
'leftButtonTintColor','rightButtonTintColor'];for(var _i2=0;_i2<_arr.length;_i2++){var key=_arr[_i2];
if(component[key]){
componentData[key]=component[key];
}
}
}

if(rightButtonImage||rightTitle||params.renderRightButton||onRight||navigationParams.onRight||
navigationParams.rightTitle||navigationParams.rightButtonImage||rightButtonTextStyle||
(drawerImage||drawerIcon)&&!hideDrawerButton&&drawerPosition==='right'){
res.headerRight=getValue(navigationParams.right||navigationParams.rightButton||params.renderRightButton,_extends({},
navigationParams,screenProps))||
_react2.default.createElement(RightNavBarButton,_extends({},params,navigationParams,componentData,{__source:{fileName:_jsxFileName,lineNumber:188}}));
}

if(leftButtonImage||backButtonImage||backTitle||leftTitle||params.renderLeftButton||leftButtonTextStyle||renderBackButton||
backButtonTextStyle||onLeft||navigationParams.leftTitle||navigationParams.onLeft||navigationParams.leftButtonImage||
navigationParams.backButtonImage||navigationParams.backTitle||(drawerImage||drawerIcon)&&!hideDrawerButton&&drawerPosition!=='right'){
res.headerLeft=getValue(navigationParams.left||navigationParams.leftButton||params.renderLeftButton,_extends({},params,navigationParams,screenProps))||
(onLeft&&(leftTitle||navigationParams.leftTitle||leftButtonImage||navigationParams.leftButtonImage)||drawerImage||drawerIcon)&&
_react2.default.createElement(LeftNavBarButton,_extends({},params,navigationParams,componentData,{__source:{fileName:_jsxFileName,lineNumber:196}}))||res.headerLeft||(
init?null:renderBackButton&&renderBackButton(state)||_react2.default.createElement(BackNavBarButton,_extends({},state,{__source:{fileName:_jsxFileName,lineNumber:197}})));
}

if(back){
res.headerLeft=renderBackButton&&renderBackButton(state)||_react2.default.createElement(BackNavBarButton,_extends({},state,{__source:{fileName:_jsxFileName,lineNumber:201}}));
}

if(typeof navigationParams.left!=='undefined'||typeof navigationParams.leftButton!=='undefined'||
typeof navigationParams.renderLeftButton!=='undefined'){
if(navigationParams.left===null||navigationParams.leftButton===null||navigationParams.renderLeftButton===null){
res.headerLeft=null;
}
}



if(navigationParams.hideTabBar!=null){
if(navigationParams.hideTabBar){
res.tabBarVisible=false;
}
}else if(hideTabBar){
res.tabBarVisible=false;
}

if(hideNavBar){
res.header=null;
}

if(navTransparent){
res.headerStyle={
position:'absolute',backgroundColor:'transparent',zIndex:100,top:0,left:0,right:0,
borderBottomWidth:0,elevation:1};

}

if(backToInitial){
res.tabBarOnPress=function(tab,jumpToIndex){
if(tab.focused){
if(tab.route.index!==0){






for(var i=1;i<tab.route.routes.length;i++){
navigation.dispatch(NavigationActions.back());
}
}
}else{
jumpToIndex(tab.index);
}
};
}
return res;
};
}

function originalRouteName(routeName){
if(routeName.startsWith('_')){
return routeName.substring(1);
}
return routeName;
}

function extendProps(props,store){
if(!props){
return{};
}
var res=_extends({},props);var _loop=function _loop(
transition){
if(reservedKeys.indexOf(transition)===-1&&transition.startsWith('on')&&
transition.charAt(2)>='A'&&transition.charAt(2)<='Z'&&typeof props[transition]==='string'){
if(store[props[transition]]){
res[transition]=function(params){return store[props[transition]](params);};
}
}};for(var _iterator2=Object.keys(props),_isArray2=Array.isArray(_iterator2),_i3=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref4;if(_isArray2){if(_i3>=_iterator2.length)break;_ref4=_iterator2[_i3++];}else{_i3=_iterator2.next();if(_i3.done)break;_ref4=_i3.value;}var transition=_ref4;_loop(transition);
}
return res;
}


function createWrapper(Component,wrapBy,store){
if(!Component){
return null;
}
var wrapper=wrapBy||function(props){return props;};




if(!Component.prototype||Component.prototype.render){var _class,_temp;var
Wrapped=(_temp=_class=function(_React$Component){_inherits(Wrapped,_React$Component);function Wrapped(){_classCallCheck(this,Wrapped);return _possibleConstructorReturn(this,(Wrapped.__proto__||Object.getPrototypeOf(Wrapped)).apply(this,arguments));}_createClass(Wrapped,[{key:'componentDidMount',value:function componentDidMount()




{
var navigation=this.props.navigation;
if(this.ref&&navigation&&navigation.state&&navigation.state.routeName){
store.addRef(originalRouteName(navigation.state.routeName),this.ref);
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
var navigation=this.props.navigation;
this.ref=null;
if(this.ref&&navigation&&navigation.state&&navigation.state.routeName){
store.deleteRef(originalRouteName(navigation.state.routeName));
}
}},{key:'render',value:function render()

{var _this2=this;
var navigation=this.props.navigation;
if(!navigation||!navigation.state){
return _react2.default.createElement(Component,_extends({ref:function ref(_ref5){return _this2.ref=_ref5;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:312}}));
}
return _react2.default.createElement(Component,_extends({
ref:function ref(_ref6){return _this2.ref=_ref6;}},this.props,extendProps(navigation.state.params,store),{
name:navigation.state.routeName,__source:{fileName:_jsxFileName,lineNumber:314}}));
}}]);return Wrapped;}(_react2.default.Component),_class.propTypes={navigation:_propTypes2.default.object},_temp);


return wrapper(Wrapped);
}


function StatelessWrapped(_ref7){var navigation=_ref7.navigation,props=_objectWithoutProperties(_ref7,['navigation']);
return _react2.default.createElement(Component,_extends({},props,{navigation:navigation},extendProps(navigation.state.params,store),{
name:navigation.state.routeName,__source:{fileName:_jsxFileName,lineNumber:325}}));
}

StatelessWrapped.propTypes={
navigation:_propTypes2.default.object};

return wrapper(StatelessWrapped);
}

function filterParam(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
if(data.toString()!=='[object Object]'){
return{data:data};
}
var proto=(data||{}).constructor.name;

if(!data||proto!=='Object'){
return{};
}
return data;
}

function uniteParams(routeName,params){
var res={};
for(var _iterator3=params,_isArray3=Array.isArray(_iterator3),_i4=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref8;if(_isArray3){if(_i4>=_iterator3.length)break;_ref8=_iterator3[_i4++];}else{_i4=_iterator3.next();if(_i4.done)break;_ref8=_i4.value;}var param=_ref8;
if(param){
res=_extends({},res,filterParam(param));
}
}
res.routeName=routeName;
return res;
}

var defaultSuccess=function defaultSuccess(){
};
var defaultFailure=function defaultFailure(){
};


function getInheritProps(props){var

key=props.key,style=props.style,type=props.type,component=props.component,tabs=props.tabs,sceneKey=props.sceneKey,parent=props.parent,children=props.children,parentProps=_objectWithoutProperties(props,['key','style','type','component','tabs','sceneKey','parent','children']);
return parentProps.passProps?parentProps:{};
}var

NavigationStore=(_class2=function(){function NavigationStore(){var _this3=this;_classCallCheck(this,NavigationStore);this.
refs={};this.
states={};this.
reducer=null;_initDefineProp(this,'currentScene',_descriptor,this);_initDefineProp(this,'currentParams',_descriptor2,this);_initDefineProp(this,'sceneStack',_descriptor3,this);this.

















addRef=function(name,ref){
_this3.refs[name]=ref;
};this.

deleteRef=function(name){
delete _this3.refs[name];
};this.

create=function(scene){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var wrapBy=arguments.length>2&&arguments[2]!==undefined?arguments[2]:function(props){return props;};
(0,_Util.assert)(!Array.isArray(scene),'Router should contain only one scene, please wrap your scenes with root Scene ');
var refs={};
_this3.iterate(scene,{},refs,wrapBy);
return refs;







};this.


























































































































nextState=function(state,cmd){return _this3.reducer?_this3.reducer(state,cmd):reducer(state,cmd);};this.

dispatch=function(cmd){
_this3.setState(_this3.nextState(_this3.state,cmd));
};_initDefineProp(this,'setState',_descriptor4,this);this.

























































execute=function(actionType,routeName){









};this.

push=function(routeName,data){


_this3.sceneStack.push(_this3.scenesMap[routeName]);
};this.

jump=function(routeName,data){


};this.

drawerOpen=function(){

};this.

drawerClose=function(){

};this.

refresh=function(data){



};this.

pop=function(){var _ref9=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},timeout=_ref9.timeout,params=_objectWithoutProperties(_ref9,['timeout']);









};this.

popTo=function(routeName,data){


};this.

popAndPush=function(routeName,data){


};this.

replace=function(routeName,data){


};this.

reset=function(routeName,data){







};}_createClass(NavigationStore,[{key:'iterate',value:function iterate(root){var parentProps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _this4=this;var refsParam=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var wrapBy=arguments[3];var refs=refsParam;(0,_Util.assert)(root.props,'props should be defined for stack');var key=root.key;(0,_Util.assert)(key,'unique key should be defined ');(0,_Util.assert)(reservedKeys.indexOf(key)===-1,'\''+key+'\' is not allowed as key name. Reserved keys: ['+reservedKeys.join(', ')+']');var _root$props=root.props,children=_root$props.children,component=_root$props.component,staticProps=_objectWithoutProperties(_root$props,['children','component']);var type=root.props.type||(parentProps.tabs?ActionConst.JUMP:ActionConst.PUSH);if(type==='switch'){type=ActionConst.JUMP;}var inheritProps=getInheritProps(parentProps);var componentProps=component?{component:wrapBy(component)}:{};if(wrapBy){Object.keys(staticProps).forEach(function(prop){var componentClass=staticProps[prop];if(componentClass&&componentClass.prototype&&componentClass.prototype.render){componentProps[prop]=wrapBy(componentClass);delete staticProps[prop];}});}var res=_extends({key:key,name:key,sceneKey:key,parent:parentProps.key,type:type},inheritProps,staticProps,componentProps);var list=children||[];var normalized=[];if(!(list instanceof Array)){list=[list];}list.forEach(function(item){if(item){if(item instanceof Array){item.forEach(function(it){normalized.push(it);});}else{normalized.push(item);}}});list=normalized;var condition=function condition(el){return!el.props.component&&!el.props.children&&!el.props.onPress&&(!el.props.type||ActionMap[el.props.type]===ActionConst.REFRESH);};var baseKey=root.key;var subStateParent=parentProps.key;var subStates=list.filter(condition);list=list.filter(function(el){return!condition(el);});if(list.length){res.children=list.map(function(c){return _this4.iterate(c,res,refs,wrapBy).key;});}else{if(!staticProps.onPress){(0,_Util.assert)(component,'component property is not set for key='+key);}if(parentProps.tabs){var innerKey=res.key+'_';baseKey=innerKey;subStateParent=res.key;var inner=_extends({},res,{name:key,key:innerKey,sceneKey:innerKey,type:ActionConst.PUSH,parent:res.key});refs[innerKey]=inner;res.children=[innerKey];delete res.component;}res.index=0;}var _loop2=function _loop2(el){refs[el.key]=_extends({key:el.key,name:el.key},el.props,{type:ActionConst.REFRESH,base:baseKey,parent:subStateParent});if(_this4[el.key]){console.log('Key '+el.key+' is already defined!');}_this4[el.key]=function(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_Util.assert)(_this4.callback,'Actions.callback is not defined!');_this4.callback(_extends({key:el.key,type:ActionConst.REFRESH},filterParam(props)));};};for(var _iterator4=subStates,_isArray4=Array.isArray(_iterator4),_i5=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref10;if(_isArray4){if(_i5>=_iterator4.length)break;_ref10=_iterator4[_i5++];}else{_i5=_iterator4.next();if(_i5.done)break;_ref10=_i5.value;}var el=_ref10;_loop2(el);}if(this[key]){console.log('Key '+key+' is already defined!');}this[key]=function(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_this4.push(key,props);};refs[res.key]=res;return res;}},{key:'state',get:function get(){var scene=this.currentScene;var params=this.currentParams;return this._state;}}]);return NavigationStore;}(),(_descriptor=_applyDecoratedDescriptor(_class2.prototype,'currentScene',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'';}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,'currentParams',[_mobx.observable],{enumerable:true,initializer:null}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,'sceneStack',[_mobx.observable],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,'setState',[_mobx.action],{enumerable:true,initializer:function initializer(){var _this5=this;return function _callee(newState){var state,currentScene,exitHandler,res,handler,success,failure,params,_res;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(newState){_context.next=2;break;}return _context.abrupt('return');case 2:state=getActiveState(newState);if(!(isEqual(state.params,_this5._currentParams)&&state.routeName===_this5.currentScene)){_context.next=5;break;}return _context.abrupt('return');case 5:currentScene=_this5.currentScene;_this5._state=newState;_this5.currentScene=state.routeName;_this5.currentParams=state.params;_this5._currentParams=state.params;if(!(currentScene!==_this5.currentScene&&_this5.currentScene!=='DrawerOpen'&&_this5.currentScene!=='DrawerClose')){_context.next=31;break;}_this5.dispatch({type:ActionConst.BLUR,routeName:currentScene});exitHandler=_this5[currentScene+_Util.OnExit];if(exitHandler){try{res=exitHandler();if(res instanceof Promise){res.then(defaultSuccess,defaultFailure);}}catch(e){console.error('Error during onExit handler:',e);}}_this5.dispatch({type:ActionConst.FOCUS,routeName:_this5.currentScene,params:_this5._currentParams});if(!_this5.states[_this5.currentScene]){_context.next=31;break;}handler=_this5[_this5.currentScene+_Util.OnEnter];success=_this5.states[_this5.currentScene].success||defaultSuccess;failure=_this5.states[_this5.currentScene].failure||defaultFailure;if(!handler){_context.next=31;break;}_context.prev=20;params=getActiveState(_this5._state).params;_context.next=24;return regeneratorRuntime.awrap(handler(params));case 24:_res=_context.sent;if(_res){success(_res);}else{failure();}_context.next=31;break;case 28:_context.prev=28;_context.t0=_context['catch'](20);failure({error:_context.t0.message});case 31:case'end':return _context.stop();}}},null,_this5,[[20,28]]);};}})),_class2);exports.default=



new NavigationStore();