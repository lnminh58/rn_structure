import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import AppNavigator from '@/routes';

const ReduxAppContainer = createReduxContainer(AppNavigator);

class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { state, dispatch } = this.props;
    return (
      <ReduxAppContainer
        state={state}
        dispatch={dispatch}
      />
    );
  }
}

export default connect(
  state => ({
    state: state.navigation
  }),
  null
)(App);
