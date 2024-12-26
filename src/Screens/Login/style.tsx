import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
import {moderateScaleVertical} from '../../Utilities/Styles/responsiveSize';
import commonStyles from '../../Utilities/Styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    ...commonStyles.font18Regular,
    fontSize: 48,
    color: Colors.black,
    fontWeight: '400',
    textAlign: 'center',
  },
  btn: {
    width: '90%',
    paddingVertical: moderateScaleVertical(15),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    ...commonStyles.shadowStylesNormal,
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  btnText: {
    ...commonStyles.btnText,
  },
});
export default styles;
