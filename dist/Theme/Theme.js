Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9,_descriptor10,_descriptor11,_descriptor12;var _mobx=require("mobx");function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}var



Theme=(_class=function(){function Theme(){_classCallCheck(this,Theme);_initDefineProp(this,"PrimaryColor",_descriptor,this);_initDefineProp(this,"PrimaryDarkColor",_descriptor2,this);_initDefineProp(this,"_TopBarBackgroundColor",_descriptor3,this);_initDefineProp(this,"TopBarElementColor",_descriptor4,this);_initDefineProp(this,"TopBarBorderWidth",_descriptor5,this);_initDefineProp(this,"TopBarBorderColor",_descriptor6,this);_initDefineProp(this,"TopBarHeight",_descriptor7,this);_initDefineProp(this,"StatusBarMode",_descriptor8,this);_initDefineProp(this,"_StatusBarColor",_descriptor9,this);_initDefineProp(this,"setTheme",_descriptor10,this);_initDefineProp(this,"customValues",_descriptor11,this);_initDefineProp(this,"register",_descriptor12,this);}_createClass(Theme,[{key:"TopBarBackgroundColor",get:function get()






{
if(this._TopBarBackgroundColor===undefined){
return this.PrimaryColor;
}
return this._TopBarBackgroundColor;
},set:function set(

value){
this._TopBarBackgroundColor=value;
}},{key:"StatusBarColor",get:function get()













{
if(this._StatusBarColor===undefined){
return this.PrimaryColor;
}
return this._StatusBarColor;
},set:function set(

value){
this._StatusBarColor=value;
}}]);return Theme;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,"PrimaryColor",[_mobx.observable],{enumerable:true,initializer:function initializer(){return"#3ea0f2";}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"PrimaryDarkColor",[_mobx.observable],{enumerable:true,initializer:function initializer(){return"#3a96e4";}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,"_TopBarBackgroundColor",[_mobx.observable],{enumerable:true,initializer:null}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,"TopBarElementColor",[_mobx.observable],{enumerable:true,initializer:function initializer(){return"#FFF";}}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,"TopBarBorderWidth",[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0;}}),_descriptor6=_applyDecoratedDescriptor(_class.prototype,"TopBarBorderColor",[_mobx.observable],{enumerable:true,initializer:function initializer(){return"#a2a2a2";}}),_descriptor7=_applyDecoratedDescriptor(_class.prototype,"TopBarHeight",[_mobx.observable],{enumerable:true,initializer:function initializer(){return 45;}}),_descriptor8=_applyDecoratedDescriptor(_class.prototype,"StatusBarMode",[_mobx.observable],{enumerable:true,initializer:function initializer(){return 1;}}),_descriptor9=_applyDecoratedDescriptor(_class.prototype,"_StatusBarColor",[_mobx.observable],{enumerable:true,initializer:null}),_descriptor10=_applyDecoratedDescriptor(_class.prototype,"setTheme",[_mobx.action],{enumerable:true,initializer:function initializer(){var _this=this;return(



function(theme){
for(var key in theme){
if(theme.hasOwnProperty(key)){
if(_this.customValues.hasOwnProperty(key)){
_this.customValues[key]=theme[key];
}else{
_this[key]=theme[key];
}
}
}
});}}),_descriptor11=_applyDecoratedDescriptor(_class.prototype,"customValues",[_mobx.observable],{enumerable:true,initializer:null}),_descriptor12=_applyDecoratedDescriptor(_class.prototype,"register",[_mobx.action],{enumerable:true,initializer:function initializer(){var _this2=this;return(




function(value){
_this2.customValues=(0,_mobx.observable)(value);var _loop=function _loop(
key){
if(value.hasOwnProperty(key)){
_this2.__defineGetter__(key,function(){
return this.customValues[key];
});
}};for(var key in value){_loop(key);
}
});}})),_class);


var theme=new Theme();exports.default=


theme;