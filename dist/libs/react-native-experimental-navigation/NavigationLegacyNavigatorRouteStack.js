










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var invariant=require('fbjs/lib/invariant');








function isRouteEmpty(route){
return route===undefined||route===null||route===''||false;
}

function areRouteNodesEqual(
one,
two)
{
if(one===two){
return true;
}

if(one.length!==two.length){
return false;
}
for(var ii=0,jj=one.length;ii<jj;ii++){
if(one[ii]!==two[ii]){
return false;
}
}
return true;
}

var _nextRouteNodeID=0;var




RouteNode=function(){_createClass(RouteNode,null,[{key:'fromNavigationState',value:function fromNavigationState(







navigationState){
invariant(
navigationState instanceof RouteNode,
'navigationState should be an instacne of RouteNode');

return navigationState;
}}]);

function RouteNode(route){_classCallCheck(this,RouteNode);



var key=String(_nextRouteNodeID++);
if(__DEV__){

Object.defineProperty(this,'key',{
enumerable:true,
configurable:false,
writable:false,
value:key});

Object.defineProperty(this,'route',{
enumerable:true,
configurable:false,
writable:false,
value:route});

}else{
this.key=key;
this.route=route;
}
}_createClass(RouteNode,[{key:'toNavigationState',value:function toNavigationState()

{
return this;
}}]);return RouteNode;}();


var _nextRouteStackID=0;var






RouteStack=function(){_createClass(RouteStack,null,[{key:'getRouteByNavigationState',value:function getRouteByNavigationState(




navigationState){
return RouteNode.fromNavigationState(navigationState).route;
}}]);

function RouteStack(index,routes){_classCallCheck(this,RouteStack);
invariant(
routes.length>0,
'routes must not be an empty array');


invariant(
index>-1&&index<=routes.length-1,
'RouteStack: index out of bound');



var routeNodes=void 0;
if(routes[0]instanceof RouteNode){

routeNodes=routes;
}else{

routeNodes=routes.map(function(route){
invariant(!isRouteEmpty(route),'route must not be mepty');
return new RouteNode(route);
});
}

this._routeNodes=routeNodes;
this._index=index;
this._key=String(_nextRouteStackID++);
}_createClass(RouteStack,[{key:'toArray',value:function toArray()












{
return this._routeNodes.map(function(node){return node.route;});
}},{key:'toNavigationState',value:function toNavigationState()

{
return{
index:this._index,
key:this._key,
children:this._routeNodes.map(function(node){return node.toNavigationState();})};

}},{key:'get',value:function get(

index){
if(index<0||index>this._routeNodes.length-1){
return null;
}
return this._routeNodes[index].route;
}},{key:'keyOf',value:function keyOf(







route){
if(isRouteEmpty(route)){
return null;
}
var index=this.indexOf(route);
return index>-1?
this._routeNodes[index].key:
null;
}},{key:'indexOf',value:function indexOf(

route){
if(isRouteEmpty(route)){
return-1;
}

for(var ii=0,jj=this._routeNodes.length;ii<jj;ii++){
var node=this._routeNodes[ii];
if(node.route===route){
return ii;
}
}

return-1;
}},{key:'slice',value:function slice(

begin,end){

var routeNodes=end===undefined||end===null?
this._routeNodes.slice(begin||0):
this._routeNodes.slice(begin||0,end||0);

var index=Math.min(this._index,routeNodes.length-1);
return this._update(index,routeNodes);
}},{key:'push',value:function push(





route){

invariant(
!isRouteEmpty(route),
'Must supply route to push');


invariant(this.indexOf(route)===-1,'route must be unique');


var routeNodes=this._routeNodes.slice(0,this._index+1);
routeNodes.push(new RouteNode(route));
return this._update(routeNodes.length-1,routeNodes);
}},{key:'pop',value:function pop()





{
if(this._routeNodes.length<=1){
return this;
}


var routeNodes=this._routeNodes.slice(0,this._index);
return this._update(routeNodes.length-1,routeNodes);
}},{key:'popToRoute',value:function popToRoute(

route){
var index=this.indexOf(route);
invariant(
index>-1,
'Calling popToRoute for a route that doesn\'t exist!');

return this.slice(0,index+1);
}},{key:'jumpTo',value:function jumpTo(

route){
var index=this.indexOf(route);
return this.jumpToIndex(index);
}},{key:'jumpToIndex',value:function jumpToIndex(

index){
invariant(
index>-1&&index<this._routeNodes.length,
'jumpToIndex: index out of bound');


return this._update(index,this._routeNodes);
}},{key:'jumpForward',value:function jumpForward()

{
var index=this._index+1;
if(index>=this._routeNodes.length){
return this;
}
return this._update(index,this._routeNodes);
}},{key:'jumpBack',value:function jumpBack()

{
var index=this._index-1;
if(index<0){
return this;
}
return this._update(index,this._routeNodes);
}},{key:'replaceAtIndex',value:function replaceAtIndex(







index,route){
invariant(
!isRouteEmpty(route),
'Must supply route to replace');


if(this.get(index)===route){
return this;
}

invariant(this.indexOf(route)===-1,'route must be unique');

var size=this._routeNodes.length;
if(index<0){
index+=size;
}

if(index<0||index>=size){
return this;
}

var routeNodes=this._routeNodes.slice(0);
routeNodes[index]=new RouteNode(route);
return this._update(index,routeNodes);
}},{key:'replacePreviousAndPop',value:function replacePreviousAndPop(

route){
if(this._index<1){

return this;
}

var index=this.indexOf(route);
invariant(
index===-1||index===this._index-1,
'route already exists in the stack');


return this.replaceAtIndex(this._index-1,route).popToRoute(route);
}},{key:'resetTo',value:function resetTo(







route){
invariant(!isRouteEmpty(route),'Must supply route');
var index=this.indexOf(route);
if(index===this._index){

return this;
}
invariant(index===-1,'route already exists in the stack');
var routeNodes=this._routeNodes.slice(0,this._index);
routeNodes.push(new RouteNode(route));
return this._update(routeNodes.length-1,routeNodes);
}},{key:'resetRoutes',value:function resetRoutes(

routes){
var index=routes.length-1;
return new RouteStack(index,routes);
}},{key:'forEach',value:function forEach(


callback,context){
this._routeNodes.forEach(function(node,index){
callback.call(context,node.route,index,node.key);
});
}},{key:'mapToArray',value:function mapToArray(

callback,context){
return this._routeNodes.map(function(node,index){
return callback.call(context,node.route,index,node.key);
});
}},{key:'_update',value:function _update(

index,routeNodes){
if(
this._index===index&&
areRouteNodesEqual(this._routeNodes,routeNodes))
{
return this;
}

return new RouteStack(index,routeNodes);
}},{key:'size',get:function get(){return this._routeNodes.length;}},{key:'index',get:function get(){return this._index;}}]);return RouteStack;}();


module.exports=RouteStack;