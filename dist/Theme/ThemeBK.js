Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _mobx=require("mobx");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



Theme=function(){function Theme(){var _this=this;_classCallCheck(this,Theme);this.

PrimaryColor="#3ea0f2";this.
PrimaryDarkColor="#3a96e4";this.















TopBarElementColor="#FFF";this.

TopBarBorderWidth=0;this.

TopBarBorderColor="#a2a2a2";this.

TopBarHeight=45;this.

StatusBarMode=1;this.














TouchableViewMaskColor="#0001";this.

setTheme=function(theme){
for(var key in theme){
if(theme.hasOwnProperty(key)){
if(_this.customValues.hasOwnProperty(key)){
_this.customValues[key]=theme[key];
}else{
_this[key]=theme[key];
}
}
}
};this.




register=function(value){
_this.customValues=(0,_mobx.observable)(value);var _loop=function _loop(
key){
if(value.hasOwnProperty(key)){
_this.__defineGetter__(key,function(){
return this.customValues[key];
});
}};for(var key in value){_loop(key);
}
};}_createClass(Theme,[{key:"TopBarBackgroundColor",get:function get(){if(this._TopBarBackgroundColor===undefined){return this.PrimaryColor;}return this._TopBarBackgroundColor;},set:function set(value){this._TopBarBackgroundColor=value;}},{key:"StatusBarColor",get:function get(){if(this._StatusBarColor===undefined){return this.PrimaryColor;}return this._StatusBarColor;},set:function set(value){this._StatusBarColor=value;}}]);return Theme;}();


var theme=new Theme();exports.default=


theme;