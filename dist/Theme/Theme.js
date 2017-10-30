Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Theme=(_temp=_class=function(){function Theme(){_classCallCheck(this,Theme);}_createClass(Theme,null,[{key:"TopBarBackgroundColor",get:function get()








{
if(Theme._TopBarBackgroundColor===undefined){
return Theme.PrimaryColor;
}
return Theme._TopBarBackgroundColor;
},set:function set(

value){
Theme._TopBarBackgroundColor=value;
}},{key:"StatusBarColor",get:function get()













{
if(Theme._StatusBarColor===undefined){
return Theme.PrimaryColor;
}
return Theme._StatusBarColor;
},set:function set(

value){
Theme._StatusBarColor=value;
}}]);return Theme;}(),_class.PrimaryColor="#3ea0f2",_class.PrimaryDarkColor="#3a96e4",_class.TopBarElementColor="#FFF",_class.TopBarBorderWidth=0,_class.TopBarBorderColor="#a2a2a2",_class.TopBarHeight=45,_class.StatusBarMode=1,_class.



setTheme=function(theme){
for(var key in theme){
if(theme.hasOwnProperty(key)){
Theme[key]=theme[key];
}
}
},_temp);exports.default=




Theme;