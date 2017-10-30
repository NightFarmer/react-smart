Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/TopBar/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _reactNativeRouterFlux=require('../libs/react-native-router-flux');

var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);

var _DeviceInfo=require('../DeviceInfo');var _DeviceInfo2=_interopRequireDefault(_DeviceInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TopBar=function(_Component){_inherits(TopBar,_Component);function TopBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TopBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TopBar.__proto__||Object.getPrototypeOf(TopBar)).call.apply(_ref,[this].concat(args))),_this),_this.






























































getStatusHeight=function(){
return _reactNative.Platform.select({
android:_reactNative.StatusBar.currentHeight,
ios:_this.isIphoneX()?44:20});

},_this.


isIphoneX=function(){var _Dimensions$get=
_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;
var iphoneX=parseFloat((width/height).toString().substring(0,5));
var iphoneY=parseFloat((height/width).toString().substring(0,5));
return _reactNative.Platform.OS==='ios'&&iphoneX===2.165||_reactNative.Platform.OS==='ios'&&iphoneY===2.165;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TopBar,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.View,{style:{alignSelf:"stretch",alignItems:'stretch'},__source:{fileName:_jsxFileName,lineNumber:20}},!this.statusBarCouldTranslucent()?null:_react2.default.createElement(_reactNative.View,{style:{height:this.getStatusHeight(),backgroundColor:_Theme2.default.StatusBarColor},__source:{fileName:_jsxFileName,lineNumber:23}}),_react2.default.createElement(_reactNative.View,{style:[styles.topBar,{backgroundColor:_Theme2.default.TopBarBackgroundColor,borderBottomWidth:_Theme2.default.TopBarBorderWidth,borderBottomColor:_Theme2.default.TopBarBorderColor,height:_Theme2.default.TopBarHeight}],__source:{fileName:_jsxFileName,lineNumber:25}},this.props.hideBack?null:_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.backIcon,onPress:function onPress(){if(_this2.props.onBackPress){_this2.props.onBackPress();}else{_reactNativeRouterFlux.Actions.pop();}},__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_reactNative.Image,{source:require('../../img/back.png'),style:[styles.backIconImg,{tintColor:_Theme2.default.TopBarElementColor}],__source:{fileName:_jsxFileName,lineNumber:40}})),this.props.children?this.props.children:_react2.default.createElement(_reactNative.Text,{style:[styles.title,{color:_Theme2.default.TopBarElementColor}],__source:{fileName:_jsxFileName,lineNumber:46}},this.props.title)));}},{key:'componentWillMount',value:function componentWillMount(){this.setStatusBarStyle();}},{key:'componentDidMount',value:function componentDidMount(){this.setStatusBarStyle();}},{key:'setStatusBarStyle',value:function setStatusBarStyle(){if(_Theme2.default.StatusBarMode===1){_reactNative.StatusBar.setBackgroundColor('#0000');_reactNative.StatusBar.setTranslucent(true);}else{_reactNative.StatusBar.setBackgroundColor(_Theme2.default.StatusBarColor);_reactNative.StatusBar.setTranslucent(false);}}},{key:'statusBarCouldTranslucent',value:function statusBarCouldTranslucent(){return _reactNative.Platform.select({ios:true,android:_DeviceInfo2.default.Android.SDK_INT?_DeviceInfo2.default.Android.SDK_INT>19:true})&&_Theme2.default.StatusBarMode===1;}}]);return TopBar;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
topBar:{
backgroundColor:'#74a8eb',
height:45,
justifyContent:'center',
alignItems:'center',
alignSelf:'stretch'},

title:{
color:'#FFF',
fontSize:20},

backIcon:{
position:'absolute',
height:45,
width:45,
justifyContent:'center',
alignItems:'center',
left:0},

backIconImg:{
height:20,
width:20,
resizeMode:'contain',
tintColor:'#FFF'}});exports.default=



TopBar;