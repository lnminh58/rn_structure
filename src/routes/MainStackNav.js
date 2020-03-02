import { createStackNavigator } from 'react-navigation-stack';

import Home from '@/screens/Home';
import Detail from '@/screens/Detail';

const MainStackNav = createStackNavigator({
  Home: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
  },
});

export default MainStackNav;
