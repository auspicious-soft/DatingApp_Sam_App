import 'react-native-gesture-handler';
import React from 'react';
import * as screens from './index';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings?.Login}
        component={screens?.Login}
        options={{headerShown: false}}
      />
    </>
  );
}
