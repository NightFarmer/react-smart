










'use strict';
















var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Animated=require('react-native').Animated;var React=require('react');


var action=_propTypes2.default.shape({
type:_propTypes2.default.string.isRequired});



var animatedValue=_propTypes2.default.instanceOf(Animated.Value);


var navigationState=_propTypes2.default.shape({
key:_propTypes2.default.string.isRequired});



var navigationParentState=_propTypes2.default.shape({
index:_propTypes2.default.number.isRequired,
key:_propTypes2.default.string.isRequired,
children:_propTypes2.default.arrayOf(navigationState)});



var layout=_propTypes2.default.shape({
height:animatedValue,
initHeight:_propTypes2.default.number.isRequired,
initWidth:_propTypes2.default.number.isRequired,
isMeasured:_propTypes2.default.bool.isRequired,
width:animatedValue});



var scene=_propTypes2.default.shape({
index:_propTypes2.default.number.isRequired,
isStale:_propTypes2.default.bool.isRequired,
key:_propTypes2.default.string.isRequired,
navigationState:navigationState});



var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationParentState.isRequired,
onNavigate:_propTypes2.default.func.isRequired,
position:animatedValue.isRequired,
scene:scene.isRequired,
scenes:_propTypes2.default.arrayOf(scene).isRequired};


var SceneRenderer=_propTypes2.default.shape(SceneRendererProps);


var panHandlers=_propTypes2.default.shape({
onMoveShouldSetResponder:_propTypes2.default.func.isRequired,
onMoveShouldSetResponderCapture:_propTypes2.default.func.isRequired,
onResponderEnd:_propTypes2.default.func.isRequired,
onResponderGrant:_propTypes2.default.func.isRequired,
onResponderMove:_propTypes2.default.func.isRequired,
onResponderReject:_propTypes2.default.func.isRequired,
onResponderRelease:_propTypes2.default.func.isRequired,
onResponderStart:_propTypes2.default.func.isRequired,
onResponderTerminate:_propTypes2.default.func.isRequired,
onResponderTerminationRequest:_propTypes2.default.func.isRequired,
onStartShouldSetResponder:_propTypes2.default.func.isRequired,
onStartShouldSetResponderCapture:_propTypes2.default.func.isRequired});





function extractSceneRendererProps(
props)
{
return{
layout:props.layout,
navigationState:props.navigationState,
onNavigate:props.onNavigate,
position:props.position,
scene:props.scene,
scenes:props.scenes};

}

module.exports={

extractSceneRendererProps:extractSceneRendererProps,


SceneRendererProps:SceneRendererProps,


action:action,
navigationParentState:navigationParentState,
navigationState:navigationState,
panHandlers:panHandlers,
SceneRenderer:SceneRenderer};