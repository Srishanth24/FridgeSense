import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Camera from '../components/Camera';
import { useCamera } from '../hooks/useCamera';

const CameraScreen = () => {
  const { requestCameraPermission, takePicture } = useCamera();

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleCapture = async () => {
    const imageUri = await takePicture();
    // Handle the captured image (e.g., send it to food detection service)
  };

  return (
    <View style={styles.container}>
      <Camera onCapture={handleCapture} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraScreen;