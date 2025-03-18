import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { useCamera } from '../hooks/useCamera';

const CameraComponent = ({ onCapture }) => {
  const { hasPermission, cameraRef, takePicture } = useCamera();

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await takePicture();
      onCapture(photo);
    }
  };

  if (!hasPermission) {
    return <View style={styles.container}><Text>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title="Capture" onPress={handleCapture} />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraComponent;