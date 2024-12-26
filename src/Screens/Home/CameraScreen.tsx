import React, {useRef, useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const cameraRef = useRef(null);

  // Get devices (cameras)
  const devices = useCameraDevices();
  const device = devices.front;

  // Check and request permissions
  useEffect(() => {
    const requestPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();

      console.log('Camera permission:', cameraPermission);
      console.log('Microphone permission:', microphonePermission);

      setHasPermission(
        cameraPermission === 'authorized' &&
          microphonePermission === 'authorized',
      );
    };
    requestPermission();
  }, []);

  if (device == null || !hasPermission) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {device == null ? 'Camera not found' : 'Requesting permissions...'}
        </Text>
      </View>
    );
  }

  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        setIsRecording(true);
        const videoData = await cameraRef.current.startRecording({
          onRecordingError: error => console.error('Recording error:', error),
        });
        console.log('Recording started:', videoData);
        setVideoUri(videoData.uri); // Store video URI
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      try {
        const videoData = await cameraRef.current.stopRecording();
        setIsRecording(false);
        console.log('Recording stopped:', videoData);
        setVideoUri(videoData.uri); // Store the video URI
      } catch (error) {
        console.error('Error stopping recording:', error);
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <Camera
        ref={cameraRef}
        style={{flex: 1}}
        device={device}
        isActive={true}
        videoStabilizationMode="auto"
      />
      <View style={{position: 'absolute', bottom: 50, left: 20, right: 20}}>
        <Button
          title={isRecording ? 'Stop Recording' : 'Start Recording'}
          onPress={isRecording ? stopRecording : startRecording}
        />
        {videoUri && <Text>Video saved to: {videoUri}</Text>}
      </View>
    </View>
  );
};

export default CameraScreen;
