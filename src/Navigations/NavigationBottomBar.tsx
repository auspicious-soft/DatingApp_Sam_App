import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import ImagePath from '../Utilities/Constants/ImagePath';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../Utilities/Styles/responsiveSize';
import {Colors} from '../Utilities/Styles/colors';

const NavigationBottomBar = ({index, onPress, navigation}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const navigation = useNavigation();

  const routes = [
    {
      id: 0,
      name: NavigationStrings.Home,
      RenderItem: ImagePath.add,
      size: 40,
    },
    {
      id: 1,
      name: NavigationStrings.Search,
      RenderItem: ImagePath.search,
      size: 40,
    },
    {
      id: 2,
      name: NavigationStrings.Radar,
      RenderItem: ImagePath.Compass,
      size: 40,
    },
    {
      id: 3,
      name: NavigationStrings.Profile,
      RenderItem: ImagePath.User_Profile_Circle,
      size: 40,
    },
  ];

  return (
    <View style={styles.container}>
      {routes?.map(route => {
        const {id, name, RenderItem, size} = route;
        // console.log(name, 'name');
        return (
          <TouchableOpacity
            key={id}
            activeOpacity={0.8}
            style={{
              height: moderateScaleVertical(80),
              width: moderateScale(80),
              backgroundColor: index === id ? Colors.white : Colors.black,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              onPress();
              setActiveIndex(index);
              navigation.navigate(name);
            }}>
            <Image
              source={RenderItem}
              style={{
                width: size,
                height: size,
                tintColor: index === id ? Colors.black : Colors.white,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavigationBottomBar;

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: moderateScaleVertical(Platform.OS == 'android' ? 75 : 85),
    // backgroundColor: '#FFFFFF',
    backgroundColor: Colors.black,
    // paddingHorizontal: moderateScale(30),
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    paddingTop: moderateScaleVertical(15),
  },
});
