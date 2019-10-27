import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from './pages/Main';
import Ranking from './pages/Ranking';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Main,
      Ranking,
    },
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#2a75bb',
        inactiveTintColor: '#2a75bb60',
        style: {
          backgroundColor: 'transparent',
        },
      },
    },
  ),
);
