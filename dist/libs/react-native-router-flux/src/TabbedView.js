Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_jsxFileName='src/libs/react-native-router-flux/src/TabbedView.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactStaticContainer=require('react-static-container');var _reactStaticContainer2=_interopRequireDefault(_reactStaticContainer);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var styles=_reactNative.StyleSheet.create({
scene:{
bottom:0,
left:0,
position:'absolute',
right:0,
top:0}});var



TabbedView=(_temp=_class=function(_Component){_inherits(TabbedView,_Component);







function TabbedView(props,context){_classCallCheck(this,TabbedView);var _this=_possibleConstructorReturn(this,(TabbedView.__proto__||Object.getPrototypeOf(TabbedView)).call(this,
props,context));
_this.renderedSceneKeys={};
_this.renderScene=_this.renderScene.bind(_this);return _this;
}_createClass(TabbedView,[{key:'renderScene',value:function renderScene(

navigationState,index){
var isSelected=index===this.props.navigationState.index;
return(
_react2.default.createElement(_reactNative.View,{
key:navigationState.key,
pointerEvents:isSelected?'auto':'none',
removeClippedSubviews:!isSelected,
style:[
styles.scene,
{opacity:isSelected?1:0}],__source:{fileName:_jsxFileName,lineNumber:32}},


_react2.default.createElement(_reactStaticContainer2.default,{shouldUpdate:isSelected,__source:{fileName:_jsxFileName,lineNumber:41}},
this.props.renderScene(navigationState,index))));



}},{key:'render',value:function render()

{var _this2=this;
var scenes=[];var _props$navigationStat=
this.props.navigationState,index=_props$navigationStat.index,children=_props$navigationStat.children;
children.forEach(function(item,i){
var key=item.key;
if(i!==index&&!_this2.renderedSceneKeys[key]){
return;
}
_this2.renderedSceneKeys[key]=true;
scenes.push(_this2.renderScene(item,i));
});
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style,__source:{fileName:_jsxFileName,lineNumber:60}},
scenes));


}}]);return TabbedView;}(_react.Component),_class.propTypes={navigationState:_propTypes2.default.object.isRequired,renderScene:_propTypes2.default.func.isRequired},_temp);exports.default=



TabbedView;