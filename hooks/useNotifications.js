import { useEffect } from 'react';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

const useNotifications = (foodItems) => {
  useEffect(() => {
    const scheduleNotifications = async () => {
      for (const item of foodItems) {
        if (item.expirationDate) {
          const expirationDate = new Date(item.expirationDate);
          const now = new Date();
          const timeToExpiration = expirationDate.getTime() - now.getTime();

          if (timeToExpiration > 0 && timeToExpiration <= 86400000) { // 1 day in milliseconds
            await Notifications.scheduleNotificationAsync({
              content: {
                title: 'Food Expiration Reminder',
                body: `${item.name} is about to expire!`,
                data: { itemId: item.id },
              },
              trigger: {
                seconds: Math.floor(timeToExpiration / 1000),
              },
            });
          }
        }
      }
    };

    scheduleNotifications();

    return () => {
      // Cleanup notifications if necessary
    };
  }, [foodItems]);

  const cancelAllNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
  };

  return { cancelAllNotifications };
};

export default useNotifications;