import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FoodContext } from '../context/FoodContext';
import ReminderCard from '../components/ReminderCard';

const AnalyticsScreen = () => {
    const { foodItems } = useContext(FoodContext);

    const calculateUsageStats = () => {
        const totalItems = foodItems.length;
        const expiredItems = foodItems.filter(item => new Date(item.expirationDate) < new Date()).length;
        const remainingItems = totalItems - expiredItems;

        return { totalItems, expiredItems, remainingItems };
    };

    const { totalItems, expiredItems, remainingItems } = calculateUsageStats();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food Analytics</Text>
            <Text style={styles.stats}>Total Items: {totalItems}</Text>
            <Text style={styles.stats}>Expired Items: {expiredItems}</Text>
            <Text style={styles.stats}>Remaining Items: {remainingItems}</Text>
            <Text style={styles.remindersTitle}>Reminders:</Text>
            <FlatList
                data={foodItems.filter(item => new Date(item.expirationDate) < new Date(new Date().setDate(new Date().getDate() + 3)))}
                renderItem={({ item }) => <ReminderCard item={item} />}
                keyExtractor={item => item.id}
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
    stats: {
        fontSize: 18,
        marginVertical: 5,
    },
    remindersTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default AnalyticsScreen;