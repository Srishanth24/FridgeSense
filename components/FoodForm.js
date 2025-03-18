import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FoodContext } from '../context/FoodContext';

const FoodForm = () => {
    const { addFoodItem } = useContext(FoodContext);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleSubmit = () => {
        if (name && quantity && expirationDate) {
            addFoodItem({ name, quantity, expirationDate });
            setName('');
            setQuantity('');
            setExpirationDate('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Food Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Quantity</Text>
            <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Expiration Date</Text>
            <TextInput
                style={styles.input}
                value={expirationDate}
                onChangeText={setExpirationDate}
            />
            <Button title="Add Food" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});

export default FoodForm;