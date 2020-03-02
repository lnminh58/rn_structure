import _ from 'lodash';
import { StackActions, NavigationActions } from 'react-navigation';

import AppNavigator from '@/routes';

const getNestedRouteAction = prevRoute => {
  if (_.get(prevRoute, 'routes.length')) {
    return getNestedRouteAction(prevRoute.routes[prevRoute.index]);
  }
  return prevRoute;
};

const navReducer = (state, action) => {
  let nextState,
    currentState,
    currentPage;

  switch (action.type) {
    case 'LOGIN':
      currentState = AppNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: 'MainStackNav' })],
        }),
        state,
      );
      currentPage = _.get(getNestedRouteAction(currentState), 'routeName');
      nextState = { ...currentState, currentPage };
      break;

    case 'LOGOUT':
      currentState = AppNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({ routeName: 'UnauthStackNav' }),
          ],
        }),
        state,
      );
      currentPage = _.get(getNestedRouteAction(currentState), 'routeName');
      nextState = { ...currentState, currentPage };
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
