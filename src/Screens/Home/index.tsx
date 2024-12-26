import {
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WrapperContainer from '../../Utilities/Component/WrapperContainer';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {
  height,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';
import {BarChart} from 'react-native-chart-kit';
import {
  // Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Camera, CameraType} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
import CameraScreen from './CameraScreen';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [intent, setIntent] = useState('Gather Here');
  const [seeking, setSeeking] = useState('Woman');
  const [describe, setDescribe] = useState('Invite Only');
  const [participants, setParticipants] = useState('2');
  const [ends, setEnds] = useState('Outside Zone');
  const [radius, setRadius] = useState('10 m');
  const [activeIndex, setActiveIndex] = useState(0);
  const [userAge, setUserAge] = useState([0]);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingUrl, setIsRecordingUrl] = useState({});
  const [isRecorded, setIsRecorded] = useState(false);

  const intentData = ['Mutual Meet', 'Gather Here', 'Coming There'];
  const seekingData = ['Woman', 'Man', 'Friend'];
  const descriptionData = ['Invite Only', 'All Access'];
  const participantsData = ['1', '2', '∞'];
  const endsData = ['Outside Zone', '1 Hour', '1 Day'];
  const radiusData = ['10 m', '100 m', '1000 m'];
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const format = useCameraFormat(device, [
    {videoStabilizationMode: 'cinematic-extended'},
  ]);
  const cameraRef = useRef(null);
  const [sliderCDI, setSliderCDI] = useState([0]);

  // Request Camera Permission
  useEffect(() => {
    requestCameraPermission();
    (async () => {
      const permission = await requestPermission();
      console.log(`Permission granted: ${permission}`);
    })();
  }, []);

  useEffect(() => {
    if (!isRecorded && isRecordingUrl?.duration) {
      setTimeout(() => {
        setIsRecorded(true);
      }, 4000);
    }
  }, [isRecordingUrl]);

  // if (!hasPermission) return <PermissionsPage />;
  // if (device == null) return <NoCameraDeviceError />;

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      // try {
      //   // Manually define the target path for the video (this is for Android and iOS)
      //   const filePath =
      //     Platform.OS === 'ios''/video.mp4'; // External storage path for Android
      //   const videoData = await cameraRef.c
      //       ? RNFS.TemporaryDirectoryPath + '/video.mp4' // Temporary path for iOS
      //       : RNFS.ExternalDirectoryPath + urrent.capture({
      //     path: filePath, // Provide the file path to save the video
      //     quality: Camera.constants.CaptureQuality.high,
      //     mediaType: 'video',
      //   });
      //   console.log('Recording started:', videoData);
      //   setIsRecordingUrl(videoData); // Store video URI
      // } catch (error) {
      //   console.error('Error starting recording:', error);
      // }
    }
  };

  // const stopRecording = async () => {
  //   if (cameraRef.current && isRecording) {
  //     await cameraRef.current.stopRecording();
  //     setIsRecording(false);
  //   }
  // };

  const stopRecording = () => {
    // With `capture`, there is no explicit `stopRecording` method, as it's handled automatically when the capture is done.
    setIsRecording(false);
    console.log('Recording stopped:', isRecordingUrl);
  };

  // Show a loading state if no device is available
  // if (device == null) {
  //   return (
  //     <WrapperContainer>
  //       <SafeAreaView>
  //         <Text style={styles.loadingText}>Loading Camera...</Text>
  //       </SafeAreaView>
  //     </WrapperContainer>
  //   );
  // }
  const handleSliderChangeAge = (values: any) => setUserAge(values);

  const data = {
    labels: [
      '',
      'Happy',
      '', // Center Happy label
      '',
      'Sad',
      '', // Center Sad label
      '',
      'Neutral',
      '', // Center Neutral label
      '',
      'Anger',
      '', // Center Anger label
    ],
    datasets: [
      {
        data: [
          80,
          90,
          85, // Happy values
          20,
          15,
          18, // Sad values
          60,
          30,
          65, // Neutral values
          40,
          35,
          45, // Anger values
        ],
        colors: [
          // Happy bars
          (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          // Sad bars
          (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          // Neutral bars
          (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          // Anger bars
          (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        ],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    barPercentage: 0.7,
    propsForLabels: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    xAxisLabelRotation: 0,
  };

  return (
    <WrapperContainer>
      <ScrollView contentContainerStyle={styles.container}>
        {activeIndex == 0 && (
          <View style={{flex: 1}}>
            <SizeBox size={5} />
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  ...commonStyles.font14BlackBold,
                  fontSize: 17,
                  color: Colors.black,
                  marginRight: 20,
                }}>
                Name
              </Text>
              <TextInput
                value={userName}
                onChangeText={e => setUserName(e)}
                placeholder="Enter your name"
                placeholderTextColor={Colors.grey}
                style={{
                  ...commonStyles.font14Black,
                  fontWeight: '500',
                  width: width / 2,
                  height: 40,
                  borderRadius: 15,
                  paddingLeft: 15,
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  ...commonStyles.font14BlackBold,
                  fontSize: 17,
                  color: Colors.black,
                  marginRight: 20,
                }}>
                Age
              </Text>
              <MultiSlider
                values={userAge}
                onValuesChange={handleSliderChangeAge}
                min={0}
                max={60}
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
                enableLabel
                customLabel={(value: any) => {
                  return (
                    <Text style={{...commonStyles.font14Black, fontSize: 17}}>
                      {value?.oneMarkerValue}
                    </Text>
                  );
                }}
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
            <View style={{flex: 1}}>
              {/* <Camera
                style={{flex: 1}}
                ref={cameraRef}
                device={device ? device : 'back'}
                isActive={true}
                preview
                format={format}
                video={true}
              /> */}
              {/* <CameraScreen /> */}
              <Camera
                ref={cameraRef}
                cameraType={CameraType.Front} // Specify front or back camera
                flashMode="auto" // Flash mode, can be 'auto', 'on', or 'off'
                style={{flex: 1}} // Full-screen camera view
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={isRecording ? stopRecording : startRecording}>
                  <View
                    style={[styles.circle, isRecording && styles.recording]}
                  />
                </TouchableOpacity>
                {/* {isRecordingUrl?.duration ? ( */}
                <Text
                  style={styles.retakeText}
                  onPress={() => {
                    setActiveIndex(1);
                  }}>
                  {'Continue'}
                </Text>
                {/* ) : (
                  <Text style={styles.retakeText}>
                    {isRecording ? 'Stop' : 'Record'}
                  </Text>
                )} */}
              </View>
            </View>
          </View>
        )}
        {activeIndex == 1 && (
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <SizeBox size={5} />
            <Text style={styles.title}>Intent</Text>
            <View style={styles.btnContainer}>
              {intentData?.map(i => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setIntent(i)}
                  style={[
                    styles.btn,
                    {
                      ...commonStyles.shadowStylesNormal,
                      backgroundColor:
                        i == intent ? Colors.white : 'transparent',
                      paddingHorizontal: i == intent ? 7 : 2,
                      shadowColor: i == intent ? Colors.black : Colors.white,
                      width: '33%',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnText,
                      {fontWeight: i == intent ? '800' : '500', fontSize: 14},
                    ]}>
                    {i}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {intent == 'Mutual Meet' && (
              <>
                <SizeBox size={5} />
                <Text style={styles.title}>Seeking</Text>
                <View style={styles.btnContainer}>
                  {seekingData?.map(i => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setSeeking(i)}
                      style={[
                        styles.btn,
                        {
                          ...commonStyles.shadowStylesNormal,
                          backgroundColor:
                            i == seeking ? Colors.white : 'transparent',
                          paddingHorizontal: i == seeking ? 7 : 2,
                          shadowColor:
                            i == seeking ? Colors.black : Colors.white,
                          width: '30%',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btnText,
                          {fontWeight: i == seeking ? '800' : '500'},
                        ]}>
                        {i}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
            <SizeBox size={5} />
            <Text style={styles.title}>
              Describe{'  '}
              <Text style={{fontSize: 15, color: '#D9D9D9'}}>
                Party at Hive
              </Text>
            </Text>
            <View style={styles.borderView} />
            {intent == 'Gather Here' && (
              <View style={styles.btnContainer}>
                {descriptionData?.map(i => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setDescribe(i)}
                    style={[
                      styles.btn,
                      {
                        width: '50%',
                        ...commonStyles.shadowStylesNormal,
                        backgroundColor:
                          i == describe ? Colors.white : 'transparent',
                        paddingHorizontal: i == describe ? 7 : 2,
                        shadowColor:
                          i == describe ? Colors.black : Colors.white,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.btnText,
                        {fontWeight: i == describe ? '800' : '500'},
                      ]}>
                      {i}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {intent != 'Mutual Meet' && (
              <>
                <SizeBox size={5} />
                <Text style={styles.title}>Participants</Text>
                <View style={styles.btnContainer}>
                  {participantsData?.map(i => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setParticipants(i)}
                      style={[
                        styles.btn,
                        {
                          width: '30%',
                          ...commonStyles.shadowStylesNormal,
                          backgroundColor:
                            i == participants ? Colors.white : 'transparent',
                          paddingHorizontal: i == participants ? 7 : 2,
                          shadowColor:
                            i == participants ? Colors.black : Colors.white,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btnText,
                          {fontWeight: i == participants ? '800' : '500'},
                        ]}>
                        {i}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <SizeBox size={5} />
                <Text style={styles.title}>Ends</Text>
                <View style={styles.btnContainer}>
                  {endsData?.map(i => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setEnds(i)}
                      style={[
                        styles.btn,
                        {
                          width: i == ends ? '35%' : '32%',
                          ...commonStyles.shadowStylesNormal,
                          backgroundColor:
                            i == ends ? Colors.white : 'transparent',
                          paddingHorizontal: i == ends ? 7 : 2,
                          shadowColor: i == ends ? Colors.black : Colors.white,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btnText,
                          {
                            fontWeight: i == ends ? '800' : '500',
                            color: i == ends ? '#D9D9D9' : Colors.black,
                          },
                        ]}>
                        {i}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
            <SizeBox size={5} />
            <Text style={styles.title}>Radius</Text>
            <View style={styles.btnContainer}>
              {radiusData?.map(i => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setRadius(i)}
                  style={[
                    styles.btn,
                    {
                      width: '30%',
                      ...commonStyles.shadowStylesNormal,
                      backgroundColor:
                        i == radius ? Colors.white : 'transparent',
                      paddingHorizontal: i == radius ? 7 : 2,
                      shadowColor: i == radius ? Colors.black : Colors.white,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnText,
                      {
                        fontWeight: i == radius ? '800' : '500',
                        color: i == radius ? '#D9D9D9' : Colors.black,
                      },
                    ]}>
                    {i}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        {activeIndex == 2 && (
          <View style={{flex: 1}}>
            <SizeBox size={10} />
            <Text
              style={{
                ...commonStyles.font20black,
                fontSize: 28,
                textAlign: 'center',
              }}>
              AI Emotional Analysis
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...commonStyles.font20black,
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                from your <Text style={{color: Colors.red}}>voice</Text>,{' '}
                <Text style={{color: '#34A853'}}>words</Text>, and{' '}
                <Text style={{color: '#4245F4'}}>face {'  '}</Text>
              </Text>
              <Image
                source={ImagePath.Information_CircleIcon}
                style={[styles.bottomIcon, {}]}
              />
            </View>
            <SizeBox size={10} />
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: Colors.black,
              }}>
              <BarChart
                data={data}
                width={width - 16}
                height={220}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                showBarTops={false}
                fromZero={true}
                withInnerLines={false}
                yAxisLabel=""
                yAxisSuffix=""
                flatColor={true}
                withCustomBarColorFromData={true}
              />
            </View>
            <SizeBox size={20} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    ...commonStyles.font20black,
                    fontSize: 28,
                    textAlign: 'center',
                  }}>
                  AI Authenticity
                </Text>
                <Text
                  style={{
                    ...commonStyles.font20black,
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  from how the colors match up{'   '}
                </Text>
              </View>
              <Image
                source={ImagePath.Information_CircleIcon}
                style={[styles.bottomIcon, {}]}
              />
            </View>
            <SizeBox size={20} />
            <MultiSlider
              values={sliderCDI}
              onValuesChange={values => {
                setSliderCDI(values);
              }}
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
          </View>
        )}
      </ScrollView>
      {activeIndex != 0 && (
        <View style={styles.bottomBtnContainer}>
          {/* {activeIndex == 1 ? ( */}
          <Image
            source={ImagePath.Information_CircleIcon}
            style={styles.bottomIcon}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.bottomBtn}
            onPress={() => {
              setActiveIndex(activeIndex + 1);
            }}>
            <Text style={styles.bottomBtnText}>Continue</Text>
          </TouchableOpacity>
          <View style={{width: '10%'}} />
        </View>
      )}
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingHorizontal: 15,
  },
  loadingText: {
    ...commonStyles.font18Regular,
    color: '#555',
  },
  title: {
    ...commonStyles.font18Regular,
    color: Colors.black,
    marginVertical: 10,
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  btn: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    ...commonStyles.font14Black,
    color: Colors.black,
  },
  borderView: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9',
    marginBottom: 15,
  },
  bottomBtnContainer: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 30,
  },
  bottomIcon: {
    height: 30,
    width: 30,
    // borderRadius: 30,
  },
  bottomBtn: {
    width: '50%',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  bottomBtnText: {
    ...commonStyles.font20black,
    color: Colors.white,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: moderateScaleVertical(40),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recording: {
    backgroundColor: 'red', // Border turns red when recording
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  retakeText: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    ...commonStyles.font14white,
    fontSize: 16,
  },
  text: {
    ...commonStyles.font18Regular,
    color: Colors.white,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 8,
  },
});
