import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import * as screens from './index';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      {AuthStack(Stack)}
      {MainStack(Stack)}
    </Stack.Navigator>
  );
}

export default Routes;
