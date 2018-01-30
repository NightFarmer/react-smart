Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='src/TopBar/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _mobxReact=require('mobx-react');var _reactNativeRouterFlux=require('../libs/react-native-router-flux');var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);var _DeviceInfo=require('../DeviceInfo');var _DeviceInfo2=_interopRequireDefault(_DeviceInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TopBar=(0,_mobxReact.observer)(_class=function(_Component){_inherits(TopBar,_Component);function TopBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TopBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TopBar.__proto__||Object.getPrototypeOf(TopBar)).call.apply(_ref,[this].concat(args))),_this),_this.dp=function(value){return(_Theme2.default.TopBarHeight||45)/45*value;},_this.topBarStyle=function(){return{height:_Theme2.default.TopBarHeight||45};},_this.backIconStyle=function(){return{height:_this.dp(45),width:_this.dp(45)};},_this.backIconImageStyle=function(){return{height:_this.dp(20),width:_this.dp(20)};},_this.titleStyle=function(){return{fontSize:_Theme2.default.TopBarTitleSize||_this.dp(20)};},_this.rightButtonStyle=function(){return{height:_this.dp(45)};},_this.rightButtonTextStyle=function(){return{marginRight:_this.dp(15),marginLeft:_this.dp(15),fontSize:_this.dp(14)};},_this.rightButtonIconStyle=function(){return{marginRight:_this.dp(15),marginLeft:_this.dp(13),height:_this.dp(22),width:_this.dp(22)};},_this.setStatusBarStyle=function(){_reactNative.StatusBar.setBarStyle(_Theme2.default.StatusBarStyle,true);if(_this.statusBarMode()===1){if(_reactNative.Platform.OS==='ios')return;_reactNative.StatusBar.setBackgroundColor('#0000');_reactNative.StatusBar.setTranslucent(true);}else{_reactNative.StatusBar.setBackgroundColor(_Theme2.default.StatusBarColor);_reactNative.StatusBar.setTranslucent(false);}},_this.statusBarMode=function(){return _reactNative.Platform.select({ios:1,android:_Theme2.default.StatusBarMode});},_this.statusBarCouldTranslucent=function(){return _reactNative.Platform.select({ios:true,android:_DeviceInfo2.default.Android.SDK_INT?_DeviceInfo2.default.Android.SDK_INT>19:true})&&_this.statusBarMode()===1;},_this.getStatusHeight=function(){return _reactNative.Platform.select({android:_reactNative.StatusBar.currentHeight,ios:_this.isIphoneX()?44:20});},_this.isIphoneX=function(){var _Dimensions$get=_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;var iphoneX=parseFloat((width/height).toString().substring(0,5));var iphoneY=parseFloat((height/width).toString().substring(0,5));return _reactNative.Platform.OS==='ios'&&iphoneX===2.165||_reactNative.Platform.OS==='ios'&&iphoneY===2.165;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TopBar,[{key:'render',value:function render(){var _this2=this;this.setStatusBarStyle();return _react2.default.createElement(_reactNative.View,{style:{alignSelf:"stretch",alignItems:'stretch'},__source:{fileName:_jsxFileName,lineNumber:73}},!this.statusBarCouldTranslucent()?null:_react2.default.createElement(_reactNative.View,{style:{height:this.getStatusHeight(),backgroundColor:_Theme2.default.StatusBarColor},__source:{fileName:_jsxFileName,lineNumber:76}}),_react2.default.createElement(_reactNative.View,{style:[styles.topBar,{backgroundColor:_Theme2.default.TopBarBackgroundColor,borderBottomWidth:_Theme2.default.TopBarBorderWidth,borderBottomColor:_Theme2.default.TopBarBorderColor,height:_Theme2.default.TopBarHeight}],__source:{fileName:_jsxFileName,lineNumber:78}},this.props.hideBack?null:_react2.default.createElement(_reactNative.TouchableOpacity,{style:[styles.backIcon,this.backIconStyle()],onPress:function onPress(){if(_this2.props.onBackPress){_this2.props.onBackPress();}else{_reactNativeRouterFlux.Actions.pop();}},__source:{fileName:_jsxFileName,lineNumber:86}},_react2.default.createElement(_reactNative.Image,{source:require('../../img/back.png'),style:[styles.backIconImg,{tintColor:_Theme2.default.TopBarElementColor},this.backIconImageStyle()],resizeMode:'contain',__source:{fileName:_jsxFileName,lineNumber:93}})),this.props.rightButton?_react2.default.createElement(_reactNative.TouchableOpacity,{style:[styles.rightButton,this.rightButtonStyle()],onPress:function onPress(){_this2.props.rightButton.onPress&&_this2.props.rightButton.onPress();},__source:{fileName:_jsxFileName,lineNumber:100}},!this.props.rightButton.text?null:_react2.default.createElement(_reactNative.Text,{style:[{color:_Theme2.default.TopBarElementColor},this.rightButtonTextStyle()],__source:{fileName:_jsxFileName,lineNumber:107}},this.props.rightButton.text),this.props.rightButton.text||!this.props.rightButton.icon?null:_react2.default.createElement(_reactNative.Image,{source:this.props.rightButton.icon,style:[{tintColor:_Theme2.default.TopBarElementColor},this.rightButtonIconStyle()],resizeMode:'contain',__source:{fileName:_jsxFileName,lineNumber:114}})):null,this.props.children?this.props.children:_react2.default.createElement(_reactNative.Text,{style:[styles.title,{color:_Theme2.default.TopBarElementColor},this.titleStyle()],__source:{fileName:_jsxFileName,lineNumber:123}},this.props.title)));}},{key:'componentWillMount',value:function componentWillMount(){this.setStatusBarStyle();}},{key:'componentDidMount',value:function componentDidMount(){this.setStatusBarStyle();}}]);return TopBar;}(_react.Component))||_class;var styles=_reactNative.StyleSheet.create({topBar:{backgroundColor:'#74a8eb',justifyContent:'center',alignItems:'center',alignSelf:'stretch'},title:{color:'#FFF'},backIcon:{position:'absolute',justifyContent:'center',alignItems:'center',left:0},backIconImg:{resizeMode:'contain',tintColor:'#FFF'},rightButton:{position:'absolute',justifyContent:'center',alignItems:'center',right:0}});exports.default=TopBar;