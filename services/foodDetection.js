import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { decodeImage } from 'react-native-image-manipulator';

let model;

export const loadModel = async () => {
    model = await mobilenet.load();
};

export const detectFoodItems = async (imageUri) => {
    if (!model) {
        throw new Error('Model not loaded. Please load the model first.');
    }

    const response = await fetch(imageUri);
    const imageData = await response.blob();
    const imageTensor = await decodeImage(imageData);

    const predictions = await model.classify(imageTensor);
    return predictions;
};