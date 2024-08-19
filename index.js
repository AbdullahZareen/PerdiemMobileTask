/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
PushNotification.createChannel(
    {
        channelId: '1', // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional)
        soundName: "default", // (optional)
        importance: 4, // (optional)
        vibrate: true, // (optional)
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional)
);
PushNotification.configure({
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
        console.log("NOTIFICATION:");
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});
AppRegistry.registerComponent(appName, () => App);
