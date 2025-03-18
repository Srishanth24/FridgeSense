import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FoodContext } from '../context/FoodContext';

const FoodDetailScreen = ({ route, navigation }) => {
    const { foodId } = route.params;
    const { foods, updateFood, deleteFood } = useContext(FoodContext);
    const foodItem = foods.find(item => item.id === foodId);

    const handleUpdate = () => {
        // Logic to update food item
        updateFood(foodId, { /* updated data */ });
        navigation.goBack();
    };

    const handleDelete = () => {
        deleteFood(foodId);
        navigation.goBack();
    };

    if (!foodItem) {
        return (
            <View style={styles.container}>
                <Text>Food item not found.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{foodItem.name}</Text>
            <Text>Quantity: {foodItem.quantity}</Text>
            <Text>Expiration Date: {foodItem.expirationDate}</Text>
            <Button title="Update" onPress={handleUpdate} />
            <Button title="Delete" onPress={handleDelete} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default FoodDetailScreen;