Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _axios=require('axios');var _axios2=_interopRequireDefault(_axios);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Http=function(_Axios){_inherits(Http,_Axios);function Http(){_classCallCheck(this,Http);return _possibleConstructorReturn(this,(Http.__proto__||Object.getPrototypeOf(Http)).apply(this,arguments));}_createClass(Http,null,[{key:'form',value:function form(

url,data,files){var formData,key,config;return regeneratorRuntime.async(function form$(_context){while(1){switch(_context.prev=_context.next){case 0:
formData=new FormData();
for(key in data){
if(data.hasOwnProperty(key)){
formData.append(key,data[key]);
}
}




config={
headers:{
'Content-Type':'multipart/form-data'},

onUploadProgress:function onUploadProgress(progressEvent){


}};return _context.abrupt('return',


_axios2.default.post(url,formData,config));case 4:case'end':return _context.stop();}}},null,this);}}]);return Http;}(_axios2.default);exports.default=



Http;