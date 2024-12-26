import React, {ReactNode} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../Styles/colors';
import {moderateScaleVertical} from '../Styles/responsiveSize';

interface WrapperContainerProps {
  children: ReactNode;
  isLoading?: boolean;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  removeTopInset?: boolean;
  removeBottomInset?: boolean;
  noRadius?: boolean;
  addBackGround?: boolean;
  backgroundColor?: string;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({
  children,
  removeTopInset,
  removeBottomInset = true,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: Colors.appColor,
        // paddingTop: removeTopInset
        //   ? 0
        //   : Platform.OS == 'android'
        //   ? moderateScaleVertical(35)
        //   : insets.top,
        paddingBottom: removeBottomInset ? 0 : insets.bottom,
      }}>
      {/* <StatusBar backgroundColor={Colors.appColor} barStyle={'light-content'} /> */}
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default WrapperContainer;
