import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';

import AppWithNavigationState from './App';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
);
