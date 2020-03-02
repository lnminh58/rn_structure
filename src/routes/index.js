import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainStackNav from './MainStackNav';

const AppNavigator = createSwitchNavigator(
  {
    MainStackNav,
  },
  {
    initialRouteName: 'MainStackNav',
  },
);

export default createAppContainer(AppNavigator);
