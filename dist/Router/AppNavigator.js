Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='src/Router/AppNavigator.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _mobxReact=require('mobx-react');
var _Actions=require('./Actions');var _Actions2=_interopRequireDefault(_Actions);
var _NavigationCard=require('./NavigationCard');var _NavigationCard2=_interopRequireDefault(_NavigationCard);

var _uuid=require('uuid');var _uuid2=_interopRequireDefault(_uuid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


AppNavigator=(0,_mobxReact.observer)(_class=function(_Component){_inherits(AppNavigator,_Component);function AppNavigator(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppNavigator);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppNavigator.__proto__||Object.getPrototypeOf(AppNavigator)).call.apply(_ref,[this].concat(args))),_this),_this.









_renderScene=function(){
return _Actions2.default.sceneStack.map(function(it){return(
_react2.default.createElement(_NavigationCard2.default,{key:_uuid2.default.v4(),__source:{fileName:_jsxFileName,lineNumber:29}},
_react2.default.createElement(it.component,{__source:{fileName:_jsxFileName,lineNumber:30}})));});


},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppNavigator,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:21}},this._renderScene());}}]);return AppNavigator;}(_react.Component))||_class;exports.default=


AppNavigator;