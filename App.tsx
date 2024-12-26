import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import Routes from './src/Navigations/Routes';
import {Colors} from './src/Utilities/Styles/colors';
import SplashScreen from './src/Screens/SplashScreen';

LogBox.ignoreAllLogs();
function App() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2500);
  }, []);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <SafeAreaProvider style={{backgroundColor: Colors.appColor}}>
        <NavigationContainer>
          {flag ? <Routes /> : <SplashScreen />}
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
