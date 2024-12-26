import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../Styles/responsiveSize';
import commonStyles from '../Styles/commonStyles';
import fontFamily from '../Styles/fontFamily';
import {Colors} from '../Styles/colors';

const styles = StyleSheet.create({
  loader: {
    width: 200,
    height: 200,
    backgroundColor: 'trasnsparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
