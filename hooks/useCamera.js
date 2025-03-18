import { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const useCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      return photo;
    }
  };

  return {
    hasPermission,
    cameraRef,
    setCameraRef,
    takePicture,
  };
};

export default useCamera;