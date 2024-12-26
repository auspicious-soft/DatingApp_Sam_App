import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from './responsiveSize';
import fontFamily from './fontFamily';
import {Colors} from './colors';

export default StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    fontWeight: '700',
    color: Colors.black,
    paddingLeft: 10,
    paddingTop: 10,
  },
  itemtxt: {
    color: Colors.blackgrey,
    fontSize: 19,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
  },
  text: {
    color: Colors.blackgrey,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#0000008A',
    fontFamily: fontFamily.regular,
  },
  mainView: {
    padding: 10,
    marginTop: 15,
    marginHorizontal: 20,
  },
  font16Grey: {
    fontSize: 16,
    color: Colors.grayscale,
    fontFamily: fontFamily.regular,
  },
  font16GreyBold: {
    fontSize: 16,
    color: Colors.grayscale,
    fontFamily: fontFamily.bold,
  },
  font24BlackBold: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: fontFamily.bold,
  },
  font24BlackSemiBold: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: fontFamily.SemiBold,
  },
  font12WhiteBold: {
    fontSize: 12,
    color: Colors.white,

    fontFamily: fontFamily.bold,
  },
  font12BlackBold: {
    fontSize: 12,
    color: Colors.black,
    fontFamily: fontFamily.bold,
  },
  font12TextColorSemiBold: {
    fontSize: 12,
    color: Colors.textColor,
    fontFamily: fontFamily.SemiBold,
  },
  font11BlackBold: {
    fontSize: 11,
    color: Colors.black,

    fontFamily: fontFamily.bold,
  },
  font32WhiteBold: {
    fontSize: 32,
    color: Colors.white,
    fontFamily: fontFamily.bold,
  },
  font18Bold: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
  },
  font18BlackBold: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: fontFamily.bold,
  },
  font18BlackMedium: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: fontFamily.medium,
  },
  font18Regular: {
    fontSize: 18,
    fontFamily: fontFamily.regular,
  },
  font8Regular: {
    fontSize: 8,
    fontFamily: fontFamily.regular,
  },
  font16WhiteBold: {
    fontSize: 16,

    color: Colors.white,
    fontFamily: fontFamily.bold,
  },
  font16BlackBold: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: fontFamily.bold,
  },
  font16GreyMedium: {
    fontSize: 16,
    color: Colors.grayscale,
    fontFamily: fontFamily.regular,
  },
  font14BlackBold: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: fontFamily.bold,
  },
  font13BlackBold: {
    fontSize: 13,
    color: Colors.black,
    fontFamily: fontFamily.bold,
  },
  font14GreyBold: {
    fontSize: 14,
    color: Colors.grayscale,
    fontFamily: fontFamily.bold,
  },
  font11Grey: {
    fontSize: 11,
    color: Colors.placeHolderGrey,
  },
  font11GreyMedium: {
    fontSize: 11,
    color: Colors.placeHolderGrey,
    fontFamily: fontFamily.regular,
  },
  font10Grey: {
    fontSize: 10,
    color: Colors.placeHolderGrey,
    fontFamily: fontFamily.regular,
  },
  font12White: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: fontFamily.regular,
  },
  font12Red: {
    fontSize: 12,
    color: Colors.amountDownColor,
    fontFamily: fontFamily.regular,
  },
  font13RedMedium: {
    fontSize: 13,
    color: Colors.amountDownColor,
    fontFamily: fontFamily.regular,
  },
  font11Red: {
    fontSize: 11,
    color: Colors.amountDownColor,
    fontFamily: fontFamily.regular,
  },
  font12RedBold: {
    fontSize: 12,
    color: Colors.amountDownColor,
    fontFamily: fontFamily.bold,
  },
  font12GreenBold: {
    fontSize: 12,
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
  },
  font14RedBold: {
    fontSize: 14,
    color: Colors.amountDownColor,
    fontFamily: fontFamily.bold,
  },
  font14GreenBold: {
    fontSize: 14,
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
  },
  font12Green: {
    fontSize: 12,
    color: Colors.amountUpColor,
    fontFamily: fontFamily.regular,
  },
  font13GreenMedium: {
    fontSize: 13,
    color: Colors.amountUpColor,
    fontFamily: fontFamily.regular,
  },
  font11Green: {
    fontSize: 11,
    color: Colors.amountUpColor,
    fontFamily: fontFamily.regular,
  },
  font12grey: {
    fontSize: 12,
    color: Colors.grayscale,
    fontFamily: fontFamily.regular,
  },
  font12greyMedium: {
    fontSize: 12,
    color: Colors.grayscale,

    fontFamily: fontFamily.regular,
  },
  font10greyMedium: {
    fontSize: 10,
    color: Colors.grayscale,
    fontFamily: fontFamily.regular,
  },
  font10greyBold: {
    fontSize: 10,
    color: Colors.grayscale,
    fontFamily: fontFamily.bold,
  },
  font11greyMedium: {
    fontSize: 11,
    color: Colors.grayscale,

    fontFamily: fontFamily.regular,
  },
  font12BlackMedium: {
    fontSize: 12,
    color: Colors.black,

    fontFamily: fontFamily.regular,
  },
  font13greyMedium: {
    fontSize: 13,
    color: Colors.grayscale,

    fontFamily: fontFamily.regular,
  },
  font14GreyMedium: {
    fontSize: 14,
    color: Colors.grayscale,

    fontFamily: fontFamily.regular,
  },
  font14BlackMedium: {
    fontSize: 14,
    color: Colors.black,

    fontFamily: fontFamily.regular,
  },
  font20whiteMedium: {
    fontSize: 20,
    color: Colors.white,

    fontFamily: fontFamily.regular,
  },
  font20black: {
    fontSize: textScale(20),
    color: Colors.black,
    fontFamily: fontFamily.regular,
  },
  font20blackBold: {
    fontSize: textScale(20),
    color: Colors.black,

    fontFamily: fontFamily.bold,
  },
  font14WhiteMedium: {
    fontSize: textScale(14),
    color: Colors.white,

    fontFamily: fontFamily.regular,
  },
  font14WhiteBold: {
    fontSize: 14,
    color: Colors.white,

    fontFamily: fontFamily.bold,
  },
  font14Black: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: fontFamily.regular,
  },
  font14SemiBold: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: fontFamily.semiBold,
  },
  font14white: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: fontFamily.regular,
  },
  font14PrimeMedium: {
    fontSize: 14,
    color: Colors.appColor,
    fontFamily: fontFamily.medium,
  },
  font16PrimeBold: {
    fontSize: 16,
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
  },
  font16SemiBold: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
  font22AppColorMedium: {
    fontSize: 22,
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
  },

  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeLoader: {
    position: 'absolute',
    left: moderateScale(1),
    right: 0,
    top: moderateScaleVertical(10),
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRect: {
    height: moderateScaleVertical(46),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },
  shadowStyle: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: moderateScale(10)},
    shadowOpacity: 0.19,
    shadowRadius: 20,
    elevation: 10,
  },
  shadowStyle2: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height:
        Platform.OS == 'ios'
          ? moderateScaleVertical(7)
          : moderateScaleVertical(12.41),
    },
    shadowOpacity: Platform.OS == 'ios' ? 0.14 : 0.19,
    shadowRadius: Platform.OS == 'ios' ? 8 : 21.27,
    elevation: 4,
  },
  shadowStyle4: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: moderateScaleVertical(4)},
    shadowOpacity: 0.19,
    shadowRadius: Platform.OS == 'ios' ? 8 : 20,
    elevation: 4,
  },
  shadowStylesNormal: {
    shadowColor: Colors.black,
    elevation: Platform.OS === 'android' ? 10 : 0,
    shadowOffset: {width: 0, height: moderateScaleVertical(10)},
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 1,
    shadowRadius: Platform.OS == 'ios' ? 10 : 1,
  },
  shadowStyleWallet: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: moderateScale(10)},
    shadowOpacity: 0.19,
    shadowRadius: 20,
    elevation: 10,
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
});
