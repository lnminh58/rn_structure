import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from '@/store/reducers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigation,
);

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
  debug: true,
};

const middlewares = [thunk, navigationMiddleware];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const reducers = persistCombineReducers(rootPersistConfig, { ...rootReducers });

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, composeEnhancers);
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return { store, persistor };
}
