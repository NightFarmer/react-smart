Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='src/GridView/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _mobxReact=require('mobx-react');var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);var _uuid=require('uuid');var _uuid2=_interopRequireDefault(_uuid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var GridView=(0,_mobxReact.observer)(_class=function(_Component){_inherits(GridView,_Component);_createClass(GridView,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.setState({width:nextProps.width?nextProps.width:0,itemHeight:nextProps.itemHeight,draggable:nextProps.draggable,dataSource:nextProps.dataSource,columnCount:nextProps.columnCount?nextProps.columnCount:4,borderWidth:nextProps.borderWidth?nextProps.borderWidth:1,borderColor:nextProps.borderColor?nextProps.borderColor:"#EEE"});}}]);function GridView(props){_classCallCheck(this,GridView);var _this=_possibleConstructorReturn(this,(GridView.__proto__||Object.getPrototypeOf(GridView)).call(this,props));_this.maxZIndex=0;_this.renderSplitLine=function(){var vList=[];var hList=[];for(var i=0;i<_this.state.columnCount-1;i++){vList.push(_react2.default.createElement(_reactNative.View,{key:'vList'+i,style:{backgroundColor:_this.state.splitColor,width:_this.state.splitWidth,top:0,bottom:0,left:_this.itemWidth+(_this.itemWidth+_this.state.splitWidth)*i,position:'absolute'},__source:{fileName:_jsxFileName,lineNumber:108}}));}for(var _i=0;_i<_this.rowCount-1;_i++){hList.push(_react2.default.createElement(_reactNative.View,{key:'hList'+_i,style:{backgroundColor:_this.state.splitColor,height:_this.state.splitWidth,left:0,right:0,top:_this.itemHeight+(_this.itemHeight+_this.state.splitWidth)*_i,position:'absolute'},__source:{fileName:_jsxFileName,lineNumber:122}}));}return[].concat(vList,hList);};_this.renderItem=function(item,index){return _react2.default.createElement(_reactNative.Animated.View,_extends({style:{width:_this.itemWidth,height:_this.itemHeight,position:'absolute',left:item.left,top:item.top,zIndex:item.zIndex}},_this.createItemPanResponder(item).panHandlers,{key:_uuid2.default.v4(),__source:{fileName:_jsxFileName,lineNumber:139}}),_this.props.itemRender(item.itemSource,index));};_this.createItemPanResponder=function(item){return _reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(evt,gestureState){return _this.state.draggable;},onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(evt,gestureState){console.log('down Capture');_this.pressedTime=Date.now();_this.longPressDrag=false;_this.longPressDragCancel=false;return _this.state.draggable;},onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(evt,gestureState){console.log('move');var longPressDrag=Date.now()-_this.pressedTime>1500;return _this.state.draggable||_this.longPressDrag&&_this.props.longPressDraggable;},onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(evt,gestureState){console.log('move Capture');if(!_this.longPressDragCancel){if(Date.now()-_this.pressedTime>1500){_this.longPressDrag=true;}else if(Math.abs(gestureState.dx)>5||Math.abs(gestureState.dy)>5){_this.longPressDragCancel=true;}}return _this.state.draggable||_this.longPressDrag&&_this.props.longPressDraggable;},onPanResponderGrant:function onPanResponderGrant(evt,gestureState){item.zIndex.setValue(++_this.maxZIndex);},onPanResponderMove:function onPanResponderMove(evt,gestureState){var dx=gestureState.dx;var dy=gestureState.dy;var newLeft=item.leftStatic+dx;var newTop=item.topStatic+dy;item.left.setValue(newLeft);item.top.setValue(newTop);var selfIndex=item.sortIndex;var currentIndex=_this.point2Index({y:newTop+_this.itemHeight/2,x:newLeft+_this.itemWidth/2});if(currentIndex>selfIndex){for(var i=selfIndex+1;i<=currentIndex;i++){var newSortIndex=i-1;var moveItem=_this.findItemBySortIndex(i);moveItem.sortIndex=newSortIndex;_this._runPositionMoveAnim(moveItem);}item.sortIndex=currentIndex;}if(currentIndex<selfIndex){for(var _i2=selfIndex-1;_i2>=currentIndex;_i2--){var _newSortIndex=_i2+1;var _moveItem=_this.findItemBySortIndex(_i2);_moveItem.sortIndex=_newSortIndex;_this._runPositionMoveAnim(_moveItem);}item.sortIndex=currentIndex;}},onPanResponderTerminationRequest:function onPanResponderTerminationRequest(evt,gestureState){console.log('TerminationRequest');return!(_this.state.draggable||_this.longPressDrag&&_this.props.longPressDraggable);},onPanResponderRelease:function onPanResponderRelease(evt,gestureState){_this._runPositionMoveAnim(item,function(){if(_this.props.onDragged){_this.props.onDragged(_this.itemInfoList.sort(function(a,b){return a.sortIndex-b.sortIndex;}).map(function(item){return item.itemSource;}));}});},onPanResponderTerminate:function onPanResponderTerminate(evt,gestureState){console.log('cancel');_this._runPositionMoveAnim(item,function(){if(_this.props.onDragged){_this.props.onDragged(_this.itemInfoList.sort(function(a,b){return a.sortIndex-b.sortIndex;}).map(function(item){return item.itemSource;}));}});},onShouldBlockNativeResponder:function onShouldBlockNativeResponder(evt,gestureState){console.log('block native');return _this.state.draggable||_this.longPressDrag&&_this.props.longPressDraggable;}});};_this.findItemBySortIndex=function(sortIndex){for(var i=0;i<_this.itemInfoList.length;i++){if(_this.itemInfoList[i].sortIndex===sortIndex){return _this.itemInfoList[i];}}};_this._runPositionMoveAnim=function(item,callback){var col=item.sortIndex%_this.state.columnCount;item.leftStatic=col*_this.itemWidth+col*_this.state.splitWidth;var row=Math.floor(item.sortIndex/_this.state.columnCount);item.topStatic=row*_this.itemHeight+row*_this.state.splitWidth;_reactNative.Animated.parallel([_reactNative.Animated.timing(item.left,{toValue:item.leftStatic,duration:250}),_reactNative.Animated.timing(item.top,{toValue:item.topStatic,duration:250})]).start(callback);};_this.state={width:_this.props.width?_this.props.width:0,itemHeight:_this.props.itemHeight,draggable:_this.props.draggable,dataSource:_this.props.dataSource,columnCount:_this.props.columnCount?_this.props.columnCount:4,splitWidth:_this.props.splitWidth?_this.props.splitWidth:_this.props.style?_this.props.style.borderWidth:0,splitColor:_this.props.splitColor?_this.props.splitColor:_this.props.style?_this.props.style.borderColor:"#DDD",containerBorderWidth:_this.props.style?_this.props.style.borderWidth:0};return _this;}_createClass(GridView,[{key:'render',value:function render(){var _this2=this;var children=this.state.dataSource;var itemCount=children.length;var columnCount=this.state.columnCount;var rowCount=Math.ceil(itemCount/columnCount);var width=this.state.width;var itemWidth=(width-2*this.state.containerBorderWidth-(columnCount-1)*this.state.splitWidth)/columnCount;var itemHeight=this.state.itemHeight?this.state.itemHeight:itemWidth;var height=itemHeight*rowCount+2*this.state.containerBorderWidth+(rowCount-1)*this.state.splitWidth;this.height=height;this.itemCount=itemCount;this.rowCount=rowCount;this.itemWidth=itemWidth;this.itemHeight=itemHeight;this.itemInfoList=children.map(function(item,index){var itemSortIndex=item.sortIndex===undefined?index:item.sortIndex;var col=itemSortIndex%columnCount;var left=col*itemWidth+col*_this2.state.splitWidth;var row=Math.floor(itemSortIndex/columnCount);var top=row*itemHeight+row*_this2.state.splitWidth;return{left:new _reactNative.Animated.Value(left),leftStatic:left,top:new _reactNative.Animated.Value(top),zIndex:new _reactNative.Animated.Value(0),topStatic:top,index:index,sortIndex:itemSortIndex,itemSource:item};});this.itemWidth=itemWidth;return _react2.default.createElement(_reactNative.View,{style:[this.props.style,{width:width,height:height,overflow:'hidden'}],__source:{fileName:_jsxFileName,lineNumber:84}},_react2.default.createElement(_reactNative.View,{style:styles.fillParent,__source:{fileName:_jsxFileName,lineNumber:93}},this.renderSplitLine()),_react2.default.createElement(_reactNative.View,{style:styles.fillParent,__source:{fileName:_jsxFileName,lineNumber:96}},this.itemInfoList.map(this.renderItem)));}},{key:'point2Index',value:function point2Index(point){var rowNum=Math.floor(point.y/this.itemHeight);var colNum=Math.floor(point.x/this.itemWidth);return Math.max(0,Math.min(this.itemCount-1,rowNum*this.state.columnCount+colNum));}}]);return GridView;}(_react.Component))||_class;var styles=_Theme2.default.createStyle(function(){return{fillParent:{position:'absolute',left:0,top:0,right:0,bottom:0,overflow:'hidden'}};});exports.default=GridView;