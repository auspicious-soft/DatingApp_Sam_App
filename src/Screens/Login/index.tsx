// Login
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {height, width} from '../../Utilities/Styles/responsiveSize';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';

const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SizeBox size={5} />
        <View style={{width: '80%', alignSelf: 'center'}}>
          <Text style={styles.headerText}>Social Experiment</Text>
        </View>
        <SizeBox size={10} />
        <Image
          source={ImagePath.SplashLogo}
          style={{height: height / 2, width: width / 1.5, alignSelf: 'center'}}
          resizeMode="contain"
        />
        <SizeBox size={15} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={() => {
            navigation.navigate(NavigationStrings.BottomTabs);
          }}>
          <Image
            source={ImagePath.Google_Logo}
            style={{width: 24, height: 24}}
          />
          <Text style={styles.btnText}>{'   '}Continue with Google</Text>
        </TouchableOpacity>
        <SizeBox size={10} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate(NavigationStrings.BottomTabs);
          }}
          style={[styles.btn, {backgroundColor: Colors.black}]}>
          <Image
            source={ImagePath.Apple_Logo}
            style={{width: 24, height: 24}}
          />
          <Text style={[styles.btnText, {color: Colors.white}]}>
            {'   '}Continue with Apple
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
