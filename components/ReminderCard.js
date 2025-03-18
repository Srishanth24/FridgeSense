import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatDistanceToNow } from 'date-fns';

const ReminderCard = ({ foodItem }) => {
    const { name, expirationDate } = foodItem;
    const timeLeft = formatDistanceToNow(new Date(expirationDate), { addSuffix: true });

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.reminder}>Expires in: {timeLeft}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    reminder: {
        fontSize: 14,
        color: '#666',
    },
});

export default ReminderCard;