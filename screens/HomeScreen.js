import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FoodContext } from '../context/FoodContext';
import FoodItem from '../components/FoodItem';
import ReminderCard from '../components/ReminderCard';

const HomeScreen = () => {
    const { foodItems, reminders } = useContext(FoodContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fridge Food Tracker</Text>
            <FlatList
                data={reminders}
                renderItem={({ item }) => <ReminderCard reminder={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.reminderList}
            />
            <FlatList
                data={foodItems}
                renderItem={({ item }) => <FoodItem food={item} />}
                keyExtractor={(item) => item.id}
                style={styles.foodList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    reminderList: {
        marginBottom: 20,
    },
    foodList: {
        flexGrow: 0,
    },
});

export default HomeScreen;