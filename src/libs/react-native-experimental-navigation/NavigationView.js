/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NavigationView
 * @flow
 */
'use strict';

const Animated = require('react-native').Animated;
const NavigationContainer = require('./NavigationContainer');
const React = require('react');
const StyleSheet = require('react-native').StyleSheet;
const View = require('react-native').View;
const NavigationScenesReducer = require('./NavigationScenesReducer');
const ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');

import type {
  NavigationActionCaller,
  NavigationAnimatedValue,
  NavigationLayout,
  NavigationParentState,
  NavigationScene,
  NavigationSceneRenderer,
  NavigationSceneRendererProps,
} from 'NavigationTypeDefinition';

type Props = {
  navigationState: NavigationParentState,
  onNavigate: NavigationActionCaller,
  renderScene: NavigationSceneRenderer,
  style: any,
};

type State = {
  layout: NavigationLayout,
  scenes: Array<NavigationScene>,
};

// const {PropTypes} = React;
import PropTypes from 'prop-types'; // ES6
/**
 * A simple view that will render a scene for the currently focused sub-state.
 * The most common use-case is for tabs, where no transition is needed
 */
class NavigationView extends React.Component<any, Props, any> {
  _onLayout: (event: any) => void;
  _position: NavigationAnimatedValue;

  props: Props;
  state: State;

  static propTypes = {
    navigationState: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    renderScene: PropTypes.func.isRequired,
  };

  constructor(props: Props, context: any) {
    super(props, context);

    const layout = {
      initWidth: 0,
      initHeight: 0,
      isMeasured: false,
      width: new Animated.Value(0),
      height: new Animated.Value(0),
    };

    const {navigationState} = this.props;

    this._position = new Animated.Value(navigationState.index);

    this.state = {
      layout,
      scenes: NavigationScenesReducer([], navigationState),
    };
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(
      this,
      nextProps,
      nextState
    );
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.navigationState !== this.props.navigationState) {
      const {navigationState} = nextProps;
      this.setState(
        {
          scenes: NavigationScenesReducer(
            this.state.scenes,
            navigationState,
            null, // There will be no transtion.
          ),
        },
        () => {
          this._position.setValue(navigationState.index);
        },
      );
    }
  }

  componentWillMount(): void {
    this._onLayout = this._onLayout.bind(this);
  }

  render(): ReactElement {
    const {
      navigationState,
      onNavigate
    } = this.props;

    const {
      layout,
      scenes,
    } = this.state;

    const sceneProps = {
      layout,
      navigationState: navigationState,
      onNavigate: onNavigate,
      position: this._position,
      scene: scenes[navigationState.index],
      scenes,
    };

    return (
      <View
        onLayout={this._onLayout}
        style={this.props.style}>
        {this._renderScene(sceneProps)}
      </View>
    );
  }

  _renderScene(props: NavigationSceneRendererProps): ?ReactElement {

    const child = this.props.renderScene(props);
    if (child === null) {
      return null;
    }
    return <View key={props.scene.key} style={styles.scene}>{child}</View>;
  }

  _onLayout(event: any): void {
    const {height, width} = event.nativeEvent.layout;

    const layout = {
      ...this.state.layout,
      initHeight: height,
      initWidth: width,
      isMeasured: true,
    };

    layout.height.setValue(height);
    layout.width.setValue(width);

    this.setState({ layout });
  }
}

const styles = StyleSheet.create({
  scene: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

module.exports = NavigationContainer.create(NavigationView);
