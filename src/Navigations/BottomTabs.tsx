import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import MyTabBar from './TabBarRender';
import * as screens from './index';
import {moderateScaleVertical, width} from '../Utilities/Styles/responsiveSize';
import {Platform} from 'react-native';
import {Colors} from '../Utilities/Styles/colors';

const Tab = createMaterialTopTabNavigator();

const BottomTabs = () => {
  const TabBarRoutes = [
    {
      name: NavigationStrings.Home,
      component: screens.Home,
    },
    {
      name: NavigationStrings.Search,
      component: screens.Search,
    },
    {
      name: NavigationStrings.Radar,
      component: screens.Radar,
    },
    {
      name: NavigationStrings.Profile,
      component: screens.Profile,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.Home}
      tabBarPosition="top"
      style={{
        // width:width,
        marginTop: moderateScaleVertical(Platform.OS == 'ios' ? 60 : 0),
        backgroundColor: Colors.black,
      }}
      screenOptions={
        {
          // swipeEnabled: false,
        }
      }
      tabBar={props => <MyTabBar {...props} />}>
      {TabBarRoutes.map((route, index) => (
        // console.log(route, 'route'),
        <Tab.Screen
          key={index}
          name={route.name}
          options={
            {
              // tabBarActiveTintColor: Colors.white,
            }
          }
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomTabs;
