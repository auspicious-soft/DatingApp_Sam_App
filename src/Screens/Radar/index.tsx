import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Utilities/Component/WrapperContainer';
import commonStyles from '../../Utilities/Styles/commonStyles';
import ImagePath from '../../Utilities/Constants/ImagePath';
import Slider from '@react-native-community/slider';
import {Colors} from '../../Utilities/Styles/colors';
import {width} from '../../Utilities/Styles/responsiveSize';
import {SizeBox} from '../../Utilities/Component/Helpers';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Radar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // States for each slider individually
  const [sliderCDI, setSliderCDI] = useState([0]);
  const [sliderGVI, setSliderGVI] = useState([0]);
  const [sliderBCI, setSliderBCI] = useState([0]);
  const [sliderAR, setSliderAR] = useState([0]);

  // Handle slider change individually
  const handleSliderChangeCDI = values => setSliderCDI(values);
  const handleSliderChangeGVI = values => setSliderGVI(values);
  const handleSliderChangeBCI = values => setSliderBCI(values);
  const handleSliderChangeAR = values => setSliderAR(values);
  return (
    <WrapperContainer>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}>
        {activeIndex == 0 && (
          <>
            <Text style={styles.headerText}>
              Rate Genuineness Vibe of Attendees{' '}
            </Text>
            <SizeBox size={10} />
            <View style={styles.row}>
              <Image source={ImagePath.profileIcon} style={styles.image} />
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
                sliderLength={width / 1.6}
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
            <View style={styles.row}>
              <Image source={ImagePath.profileIcon} style={styles.image} />
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
                sliderLength={width / 1.6}
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
            <View style={styles.row}>
              <Image source={ImagePath.profileIcon} style={styles.image} />
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
                sliderLength={width / 1.6}
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
            <View style={styles.row}>
              <Image source={ImagePath.profileIcon} style={styles.image} />
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
                sliderLength={width / 1.6}
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
            <Text style={[styles.headerText, {fontSize: 25}]}>
              Party at Drama Nightclub
            </Text>
            <SizeBox size={10} />
            <View style={styles.btn}>
              <Text style={styles.btnText}>4 attendees</Text>
            </View>
            <SizeBox size={10} />
            <TouchableOpacity
              style={[styles.btn2, {}]}
              activeOpacity={0.8}
              onPress={() => {
                setActiveIndex(1);
              }}>
              <Text style={[styles.btnText, {color: Colors.white}]}>
                Submit
              </Text>
            </TouchableOpacity>
          </>
        )}
        {activeIndex === 1 && (
          <>
            <SizeBox size={50} />
            <View style={[styles.row, {width: '50%', alignSelf: 'center'}]}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: Colors.red,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.image_user}
                  style={{width: 80, height: 80, borderRadius: 80}}
                />
              </View>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: '#34A853',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Image
                  source={ImagePath.image_user}
                  style={{width: 80, height: 80, borderRadius: 80}}
                />
              </View>
            </View>
            <SizeBox size={10} />
            <Text style={styles.title}>Contact Made</Text>
            <SizeBox size={2} />
            <Text style={styles.title2}>Party at Drama Nightclub</Text>
            <SizeBox size={2} />
            <Text style={styles.title2}>John, 42</Text>
            <SizeBox size={5} />
            <TouchableOpacity
              style={[styles.btn, {width: '40%', alignSelf: 'center'}]}
              activeOpacity={0.8}
              onPress={() => {}}>
              <Text style={styles.btnText}>Mutual Meet</Text>
            </TouchableOpacity>
            <SizeBox size={5} />
            <Text style={styles.title3}>Rate Genuineness Vibe </Text>
            <SizeBox size={10} />
            <MultiSlider
              values={sliderCDI}
              onValuesChange={handleSliderChangeCDI}
              min={0}
              max={100}
              step={1}
              snapped
              allowOverlap={false}
              containerStyle={{alignSelf: 'center'}}
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
              sliderLength={width / 1.6}
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
          </>
        )}
        <SizeBox size={30} />
      </ScrollView>
    </WrapperContainer>
  );
};

export default Radar;

const styles = StyleSheet.create({
  headerText: {
    ...commonStyles.font20black,
    marginTop: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  btn: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: '50%',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: Colors.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    ...commonStyles.font18Regular,
    color: Colors.black,
  },
  title: {
    ...commonStyles.font11BlackBold,
    fontSize: 30,
    textAlign: 'center',
  },
  title3: {
    ...commonStyles.font12White,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.black,
  },
  title2: {
    ...commonStyles.font8Regular,
    fontSize: 25,
    textAlign: 'center',
    color: Colors.black,
  },
});
