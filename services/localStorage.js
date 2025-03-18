import AsyncStorage from '@react-native-async-storage/async-storage';

const LOCAL_STORAGE_KEY = '@fridge_food_tracker:foodItems';

export const saveFoodItems = async (foodItems) => {
    try {
        const jsonValue = JSON.stringify(foodItems);
        await AsyncStorage.setItem(LOCAL_STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error('Failed to save food items:', e);
    }
};

export const getFoodItems = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Failed to fetch food items:', e);
        return [];
    }
};

export const clearFoodItems = async () => {
    try {
        await AsyncStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
        console.error('Failed to clear food items:', e);
    }
};