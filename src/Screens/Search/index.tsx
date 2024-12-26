import {
  Animated,
  Button,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WrapperContainer from '../../Utilities/Component/WrapperContainer';
import commonStyles from '../../Utilities/Styles/commonStyles';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {height, width} from '../../Utilities/Styles/responsiveSize';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
// const {width, height} = Dimensions.get('window');
const RADIUS = Math.min(width, height) / 3;

const Search = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // States for each slider individually
  const [sliderCDI, setSliderCDI] = useState([0]);
  const [sliderGVI, setSliderGVI] = useState([0]);
  const [sliderBCI, setSliderBCI] = useState([0]);
  const [sliderAR, setSliderAR] = useState([0]);

  // Handle slider change individually
  const handleSliderChangeCDI = (values: any) => setSliderCDI(values);
  const handleSliderChangeGVI = (values: any) => setSliderGVI(values);
  const handleSliderChangeBCI = (values: any) => setSliderBCI(values);
  const handleSliderChangeAR = (values: any) => setSliderAR(values);

  const blinkAnim = useRef(new Animated.Value(0)).current;

  // Red dot animation values (angles)
  const redDot1Anim = useRef(new Animated.Value(0)).current;
  const redDot2Anim = useRef(new Animated.Value(0)).current;
  const redDot3Anim = useRef(new Animated.Value(0)).current;

  // Blinking effect for the red dot
  useEffect(() => {
    // Blinking effect for radar circles
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Red dots moving along circular paths
    const animateDot = (animatedValue: any) => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 360, // Full rotation
          duration: 5000, // Adjust speed here
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    animateDot(redDot1Anim);
    animateDot(redDot2Anim);
    animateDot(redDot3Anim);
  }, [blinkAnim, redDot1Anim, redDot2Anim, redDot3Anim]);

  // Interpolating rotation
  const getDotPosition = (angle: any, radius: any) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radians),
      y: radius * Math.sin(radians),
    };
  };

  return (
    <WrapperContainer>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        {activeIndex == 0 ? (
          <>
            <Text style={styles.headerText}>
              Swipe right to Accept Swipe left to Deny
            </Text>
            <ImageBackground
              source={ImagePath.image_user}
              borderRadius={10}
              style={{
                width: width / 1.1,
                height: height / 2,
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
              }}>
              <Text
                style={[
                  styles.headerText,
                  {textAlign: 'left', color: Colors.white},
                ]}>
                Sally, 19
              </Text>
            </ImageBackground>
            <SizeBox size={5} />
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => setActiveIndex(1)}>
              <Text style={styles.btnText}>Mutual Meet</Text>
            </TouchableOpacity>
            <SizeBox size={10} />

            {/* CDI Slider */}
            <View style={styles.row}>
              <Text style={styles.label}>CDI</Text>
              <MultiSlider
                values={sliderCDI}
                onValuesChange={handleSliderChangeCDI}
                min={0}
                max={100}
                step={1}
                snapped
                allowOverlap={false}
                selectedStyle={{
                  backgroundColor: Colors.blackgrey,
                  borderColor: Colors.black,
                  borderWidth: 2,
                }}
                unselectedStyle={{
                  backgroundColor: Colors.white,
                  borderColor: Colors.black,
                  borderWidth: 2,
                }}
                sliderLength={width / 1.35}
                trackStyle={{height: 20}}
                customMarker={() => (
                  <View
                    style={{
                      width: 20,
                      height: 40,
                      backgroundColor: Colors.white,
                      borderColor: Colors.black,
                      borderWidth: 2,
                      top: 10,
                    }}
                  />
                )}
              />
            </View>
            <SizeBox size={10} />

            {/* GVI Slider */}
            <View style={styles.row}>
              <Text style={styles.label}>GVI</Text>
              <MultiSlider
                values={sliderGVI}
                onValuesChange={handleSliderChangeGVI}
                min={0}
                max={1}
                step={0.1}
                snapped
                allowOverlap={false}
                selectedStyle={{
                  backgroundColor: Colors.blackgrey,
                  borderColor: Colors.black,
                  borderWidth: 2,
                }}
                unselectedStyle={{
                  backgroundColor: Colors.white,
                  borderColor: Colors.black,
                  borderWidth: 2,
                }}
                sliderLength={width / 1.35}
                trackStyle={{height: 20}}
                customMarker={() => (
                  <View
                    style={{
                      width: 20,
                      height: 40,
                      backgroundColor: Colors.white,
                      borderColor: Colors.black,
                      borderWidth: 2,
                      top: 10,
                    }}
                  />
                )}
              />
            </View>
            <SizeBox size={10} />

            {/* BCI Slider */}
            <View style={styles.row}>
              <Text style={styles.label}>BCI</Text>
              <MultiSlider
                values={sliderBCI}
                onValuesChange={handleSliderChangeBCI}
                min={0}
                max={1}
                step={0.1}
                snapped
                allowOverlap={false}
                selectedStyle={{
                  backgroundColor: Colors.blackgrey,
                  borderColor: Colors.black,
                  borderWidth: 2,
                }}
                unselectedStyle={{
                  backgroundColor: Colors.white,
                  borderColor: Colors.black,
                  borderWidth: 2,
                }}
                sliderLength={width / 1.35}
                trackStyle={{height: 20}}
                customMarker={() => (
                  <View
                    style={{
                      width: 20,
                      height: 40,
                      backgroundColor: Colors.white,
                      borderColor: Colors.black,
                      borderWidth: 2,
                      top: 10,
                    }}
                  />
                )}
              />
            </View>
            <SizeBox size={10} />

            {/* AR Slider */}
            <View style={styles.row}>
              <Text style={styles.label}>AR</Text>
              <View style={{height: 40}}>
                <MultiSlider
                  values={sliderAR}
                  onValuesChange={handleSliderChangeAR}
                  min={0}
                  max={1}
                  step={0.1}
                  snapped
                  allowOverlap={false}
                  selectedStyle={{
                    backgroundColor: Colors.blackgrey,
                    borderColor: Colors.black,
                    borderWidth: 2,
                  }}
                  unselectedStyle={{
                    backgroundColor: Colors.white,
                    borderColor: Colors.black,
                    borderWidth: 2,
                  }}
                  sliderLength={width / 1.35}
                  trackStyle={{height: 20}}
                  customMarker={() => (
                    <View
                      style={{
                        width: 20,
                        height: 40,
                        backgroundColor: Colors.white,
                        borderColor: Colors.black,
                        borderWidth: 2,
                        top: 10,
                      }}
                    />
                  )}
                />
              </View>
            </View>
          </>
        ) : (
          // <View style={{ paddingHorizontal: 20, flex: 1 }}>
          //   <SizeBox size={10} />
          //   <Text style={styles.contentText}>
          //     To swipe right, you must make a compatible{' '}
          //     <Text style={{ padding: 5, backgroundColor: '#D9D9D9' }}>
          //       {' '}
          //       Mutual Meet{' '}
          //     </Text>
          //     {'  '}
          //     bio in &#43;
          //   </Text>
          //   <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          //     <TouchableOpacity
          //       style={[styles.btn, { backgroundColor: Colors.black }]}
          //       activeOpacity={0.8}
          //       onPress={() => setActiveIndex(0)}>
          //       <Text style={[styles.btnText, { color: Colors.white }]}>
          //         Back
          //       </Text>
          //     </TouchableOpacity>
          //   </View>
          // </View>
          <View style={styles.container}>
            {/* Radar Background */}
            <View style={styles.radarContainer}>
              {/* Blinking Radar Circles */}
              <Animated.View
                style={[
                  styles.circle,
                  {opacity: blinkAnim, width: RADIUS * 2, height: RADIUS * 2},
                ]}
              />
              <Animated.View
                style={[
                  styles.circle,
                  {
                    opacity: blinkAnim,
                    width: RADIUS * 1.5,
                    height: RADIUS * 1.5,
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.circle,
                  {opacity: blinkAnim, width: RADIUS, height: RADIUS},
                ]}
              />

              {/* Static Center Green Dot */}
              <View style={styles.centerDot} />

              {/* Moving Red Dots */}
              <Animated.View
                style={[
                  styles.redDot,
                  {
                    transform: [
                      {
                        translateX: redDot1Anim.interpolate({
                          inputRange: [0, 360],
                          outputRange: [
                            getDotPosition(0, RADIUS * 0.6).x,
                            getDotPosition(360, RADIUS * 0.6).x,
                          ],
                        }),
                      },
                      {
                        translateY: redDot1Anim.interpolate({
                          inputRange: [0, 360],
                          outputRange: [
                            getDotPosition(0, RADIUS * 0.6).y,
                            getDotPosition(360, RADIUS * 0.6).y,
                          ],
                        }),
                      },
                    ],
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.redDot,
                  {
                    transform: [
                      {
                        translateX: redDot2Anim.interpolate({
                          inputRange: [0, 360],
                          outputRange: [
                            getDotPosition(0, RADIUS * 0.8).x,
                            getDotPosition(360, RADIUS * 0.8).x,
                          ],
                        }),
                      },
                      {
                        translateY: redDot2Anim.interpolate({
                          inputRange: [0, 360],
                          outputRange: [
                            getDotPosition(0, RADIUS * 0.8).y,
                            getDotPosition(360, RADIUS * 0.8).y,
                          ],
                        }),
                      },
                    ],
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.redDot,
                  {
                    transform: [
                      {
                        translateX: redDot3Anim.interpolate({
                          inputRange: [0, 360],
                          outputRange: [
                            getDotPosition(0, RADIUS * 0.4).x,
                            getDotPosition(360, RADIUS * 0.4).x,
                          ],
                        }),
                      },
                      {
                        translateY: redDot3Anim.interpolate({
                          inputRange: [0, 360],
                          outputRange: [
                            getDotPosition(0, RADIUS * 0.4).y,
                            getDotPosition(360, RADIUS * 0.4).y,
                          ],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </View>
        )}
        <SizeBox size={30} />
      </ScrollView>
    </WrapperContainer>
  );
};

export default Search;

const styles = StyleSheet.create({
  headerText: {
    ...commonStyles.font20black,
    fontSize: 25,
    marginVertical: 20,
    textAlign: 'center',
  },
  btn: {
    width: '40%',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    ...commonStyles.font18Regular,
    color: Colors.black,
  },
  label: {
    ...commonStyles.font18BlackMedium,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentText: {
    ...commonStyles.font20black,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
  },
  radarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'rgba(104, 102, 102, 0.3)',
    borderRadius: 1000,
  },
  centerDot: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  redDot: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: 'red',
    borderRadius: 7.5,
  },
});
