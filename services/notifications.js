import * as Notifications from 'expo-notifications';

const scheduleNotification = async (foodItem) => {
    const trigger = new Date(foodItem.expirationDate);
    trigger.setHours(trigger.getHours() - 24); // Notify 24 hours before expiration

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Food Expiration Reminder",
            body: `${foodItem.name} is about to expire!`,
            data: { foodItemId: foodItem.id },
        },
        trigger,
    });
};

const cancelNotification = async (notificationId) => {
    await Notifications.cancelScheduledNotificationAsync(notificationId);
};

const getAllScheduledNotifications = async () => {
    const notifications = await Notifications.getAllScheduledNotificationsAsync();
    return notifications;
};

export { scheduleNotification, cancelNotification, getAllScheduledNotifications };