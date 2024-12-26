import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Colors} from '../Styles/colors';
// import VectorIcon from './vectorIcons';
import {moderateScale, moderateScaleVertical} from '../Styles/responsiveSize';
import axios from 'axios';
import Modal from 'react-native-modal';
import styles from './style';
import {BallIndicator} from 'react-native-indicators';

export function SizeBox({size}: SizeBoxProps) {
  return <View style={{marginVertical: size}} />;
}
const baseUrl = 'https://public.radio.co/stations/';

export const getData = async (endpoint: string) => {
  // console.log(endpoint, 'endpoint');
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const postData = async (endpoint: string) => {
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export function Loadingcomponent({isVisible}: LoaderProps) {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}>
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={Colors.appColor} />
      </View>
    </Modal>
  );
}

export function LoadingSplashComponent({isVisible}: LoaderSplashProps) {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}>
      <View style={styles.loader}>
        <BallIndicator size={40} color={Colors.appColor} />
      </View>
    </Modal>
  );
}
