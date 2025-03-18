import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FoodContext } from '../context/FoodContext';
import FoodItem from './FoodItem';

const FoodList = () => {
    const { foodItems } = useContext(FoodContext);

    const renderItem = ({ item }) => (
        <FoodItem food={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={foodItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
            {foodItems.length === 0 && (
                <Text style={styles.emptyMessage}>No food items in the fridge.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    list: {
        paddingBottom: 16,
    },
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});

export default FoodList;