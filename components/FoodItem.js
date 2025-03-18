import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FoodItem = ({ item, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.expiration}>Expires on: {item.expirationDate}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit}>
                    <MaterialIcons name="edit" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
    },
    expiration: {
        fontSize: 14,
        color: 'gray',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default FoodItem;