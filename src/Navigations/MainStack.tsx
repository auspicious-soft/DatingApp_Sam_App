import 'react-native-gesture-handler';
import React from 'react';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import BottomTabs from './BottomTabs';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings?.BottomTabs}
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </>
  );
}
