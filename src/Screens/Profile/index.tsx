import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Utilities/Component/WrapperContainer';
import ImagePath from '../../Utilities/Constants/ImagePath';
import commonStyles from '../../Utilities/Styles/commonStyles';
import Slider from '@react-native-community/slider';
import {width} from '../../Utilities/Styles/responsiveSize';
import {SizeBox} from '../../Utilities/Component/Helpers';
import {Colors} from '../../Utilities/Styles/colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Radar = () => {
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
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={ImagePath.profileIcon} style={styles.image} />
            <Text style={styles.nameText}>{'  '}Sam, 26</Text>
          </View>
          <Image source={ImagePath.EditIcon} style={{height: 30, width: 30}} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Connection Duration Index (CDI)</Text>
          <Image
            source={ImagePath.Information_CircleIcon}
            style={{height: 30, width: 30}}
          />
        </View>
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
          containerStyle={{alignSelf: 'center'}}
          sliderLength={width / 1.2}
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
        <SizeBox size={10} />
        <View style={styles.row}>
          <Text style={styles.label}>Genuine Vibe Index (GVI)</Text>
          <Image
            source={ImagePath.Information_CircleIcon}
            style={{height: 30, width: 30}}
          />
        </View>
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
          containerStyle={{alignSelf: 'center'}}
          sliderLength={width / 1.2}
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
        <SizeBox size={10} />
        <View style={styles.row}>
          <Text style={styles.label}>Biometric Comfort Index (BCI)</Text>
          <Image
            source={ImagePath.Information_CircleIcon}
            style={{height: 30, width: 30}}
          />
        </View>
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
          containerStyle={{alignSelf: 'center'}}
          sliderLength={width / 1.2}
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
        <SizeBox size={10} />
        <View style={styles.row}>
          <Text style={styles.label}>Acceptance Rate (AR)</Text>
          <Image
            source={ImagePath.Information_CircleIcon}
            style={{height: 30, width: 30}}
          />
        </View>
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
          containerStyle={{alignSelf: 'center'}}
          sliderLength={width / 1.2}
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
        <SizeBox size={10} />
        <Text style={[styles.label, {fontSize: 20}]}>Karma Points: 10</Text>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Radar;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  nameText: {
    ...commonStyles.font12BlackMedium,
    fontSize: 30,
  },
  label: {
    ...commonStyles.font18BlackMedium,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
