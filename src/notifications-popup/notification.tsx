import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { PermissionsAndroid, Platform } from "react-native";
import PushNotification from "react-native-push-notification";
const showNotification = async (title: string, message: string) => {
    if (Platform.OS === 'ios') {
        PushNotificationIOS.presentLocalNotification({
            alertTitle: title,
            alertBody: message
        });

    } else {
        PushNotification.localNotification({
            channelId: '1',
            title: title,
            message: message,
        })
    }

}
const showScheduleNotification = async (title: any, message: any, date: any) => {
    if (Platform.OS === 'ios') {
        PushNotificationIOS.scheduleLocalNotification({
            alertTitle: title,
            alertBody: message,
            soundName: 'default',
            fireDate: date ?? new Date(Date.now() + (2000)).toISOString(),
        })
    } else {
        PushNotification.localNotificationSchedule({
            channelId: '1',
            title: title,
            message: message,
            date: date ?? new Date(Date.now() + 2000),
        });
    }

}


async function requestNotificationPermission() {
    if (Platform.OS === 'ios') {
        // PushNotificationIOS.requestPermissions().then(
        //     (data) => {
        //         console.log('PushNotificationIOS permissions:', data);
        //     },
        //     (data) => {
        //         console.log('PushNotificationIOS permission request failed:', data);
        //     }
        // );
        return
    }
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
            title: "Notification Permission",
            message: "This app needs notification permissions",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use notifications");
    } else {
        console.log("Notification permission denied");
    }
}

export { showNotification, showScheduleNotification, requestNotificationPermission }