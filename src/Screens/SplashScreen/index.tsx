import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
// import styles from './style';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {height, width} from '../../Utilities/Styles/responsiveSize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import commonStyles from '../../Utilities/Styles/commonStyles';

const SplashScreen = ({navigation}: any) => {
  const scrollAnim = useRef(new Animated.Value(height / 2)).current; // Start from the middle

  useEffect(() => {
    const startAnimation = () => {
      scrollAnim.setValue(height / 10); // Reset animation starting position
      Animated.loop(
        Animated.timing(scrollAnim, {
          toValue: -height * 2, // Scroll beyond the text height
          duration: 12000, // Adjust for scroll speed
          useNativeDriver: true,
        }),
      ).start();
    };

    startAnimation();
  }, [scrollAnim]);

  const textData = `
  [System Start] Initializing Social Interaction Analysis Engine v3.7...
  [INFO] Loading user proximity data... Success.
  [INFO] Establishing neural network parameters... OK.
  [INFO] Preparing facial expression recognition... Initialized.

  [ANALYSIS MODULE] Detecting nonverbal signals... 
  [INFO] Processing gaze orientation... [0.78 sec]
  [INFO] Analyzing smile intensity variation... Complete.
  [INFO] Detecting emotional authenticity: Genuine (78%), Deliberate (22%).
  [INFO] Cross-referencing with historical interaction dataset... Match Rate: 86%

  [DATA] Verbal and Nonverbal Data Processing - Association Metrics Calculated.
  [INFO] Emotional dominance detected: 58% Confidence.
  [INFO] Emotional intelligence score estimation in progress... Done.
  [DEBUG] Social context alignment completed with 92% accuracy.

  [SOCIAL CONTEXT] Calculating social proximity metrics... Success.
  [INFO] Detecting empathy and warmth levels across spatial nodes.
  [DEBUG] Speech pattern alignment with empathy markers detected.
  [INFO] Cross-referencing interpersonal genuineness with user history... Verified.

  [AUTHENTICITY CHECK] Verifying perceived emotion genuineness...
  [RESULT] Emotion Analysis: Genuine 64%, Deliberate 36% (Confidence 85%)
  [INFO] Temporal speech pattern analysis: Synchronicity detected.
  [INFO] Body language and posture signals detected: Confidence Level 91%

  [NETWORK] Establishing interpersonal connection nodes...
  [INFO] Social intent detection module initialized.
  [RESULT] Social interaction: "Find Romantic Partner" probability 68%.
  [RESULT] Social interaction: "Invite to Social Gathering" probability 45%.
  [INFO] Calculating reciprocity alignment in current social space... Complete.

  [ALGORITHM] Computing perceived-as-genuine emotional metrics... Processed.
  [INFO] Mapping nonverbal signal intensity... High clarity score detected.
  [INFO] Real-time adjustments for user proximity-based interactions.
  [DEBUG] Analyzing fluctuations in emotional state... [PASS]
  [INFO] Tracking changes in verbal intonation... Alignment Score: 79%

  [SECURITY] Masking private data identifiers in command history... Done.
  [INFO] Gender and Age Estimation Models Deployed.
  [ANALYSIS] Nonverbal signal congruency calculated across audio, video, text.

  [NETWORK UPDATE] Connection strength recalculated for local nodes... Updated.
  [RESULT] Authenticity threshold for cluster met at 92%.
  [DEBUG] Emotional intelligence correlation matrix calculated.
  [INFO] Predictive social behavior modeling... Accuracy at 84.3%
  [DATA STREAM] Syncing with external social graph... Success

  [DATA STREAM] Social intent extraction from user: "Invite to Group Activity".
  [DEBUG] Parsing data on empathy cues and genuine expressions.
  [INFO] Realigning user clusters based on emotional proximity score.

  [SYSTEM MONITOR] Monitoring system performance... CPU Load at 45%, Memory Usage at 72%
  [ANALYTICS] Calculating interaction frequency metrics... Complete.
  [INFO] Capturing microexpressions from real-time video feed... Decoding success.

  [AUDIO MODULE] Initializing emotional tone recognition...
  [INFO] Processing tone analysis: Happiness 68%, Sadness 12%, Neutral 20%
  [DEBUG] Mapping vocal frequency to emotional markers... Verified.
  [RESULT] Empathy response level for proximity detected: 91% accurate.

  [DATA INTEGRITY] Verifying signal authenticity... No tampering detected.
  [INFO] Live updates for social context recalibration enabled.
  [NETWORK NODE] Connection strength recalculated based on proximity updates.
  [INFO] Initializing reinforcement learning model for interaction scoring.

  [COMMAND STATUS] Processing complete - Preparing user interface.
  [INFO] Updating interface with real-time proximity insights.
  [INFO] Refreshing connection dashboard... Success.

  [SYSTEM] Command Line Output End - Redirecting to User Interface.
  `;

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          source={ImagePath.SplashLogo} // Replace with your background image path
          style={{
            height: height / 2,
            width: width / 1.5,
            alignSelf: 'center',
            marginTop: height / 4,
          }}
          resizeMode="contain"
        />
      </View>
      <Animated.View
        style={[styles.textContainer, {transform: [{translateY: scrollAnim}]}]}>
        <Text style={styles.text}>{textData}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    ...commonStyles.font18Regular,
    fontSize: 16,
    color: 'black',
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default SplashScreen;
