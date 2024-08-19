import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenConst } from '../constants';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import ListViewScreen from '../screens/ListViewScreen';
import OnboardingScreen1 from '../screens/OnBoardScreen1';
import OnboardingScreen2 from '../screens/OnBoardScreen2';
import OnboardingScreen3 from '../screens/OnBoardScreen3';
import { navigationRef } from './NavigationService';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AppState, Platform } from 'react-native';
import { showScheduleNotification } from '../notifications-popup/notification';
import { DataList } from '../models/list-view';
const Stack = createNativeStackNavigator<any>();

export default function AppStack() {

    const { isNotOnboardScreens } = useSelector((state: RootState) => state.app);
    const { dataList } = useSelector((state: RootState) => state.app)

    const scheduleNotification = () => {
        try {
            const delayTime = Platform.OS === 'ios' ? new Date(Date.now() + 10 * 60 * 1000).toISOString() : new Date(Date.now() + 10 * 60 * 1000)
            const onSwitches = dataList.filter((sw: DataList) => sw.isToggle);
            const switchNames = onSwitches.map((sw: DataList) => sw.name.replace('Switch ', ''));
            const message = switchNames.length > 0
                ? `Switch ${switchNames.join(', ')} are ON`
                : 'No switches are ON';
            showScheduleNotification('Switches Status', message, delayTime)
        } catch (error) {
            console.error('Failed to send notification.', error);
        }
    };

    useEffect(() => {
        const appStateListener = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'background') {
                scheduleNotification();
            }
        });
        return () => {
            appStateListener.remove();
        };
    }, [dataList]);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={!isNotOnboardScreens ? ScreenConst.ONBOARD_SCREEN_1 : ScreenConst.LOGIN_SCREEN}>
                <Stack.Screen
                    name={ScreenConst.ONBOARD_SCREEN_1}
                    component={OnboardingScreen1}
                />
                <Stack.Screen
                    name={ScreenConst.ONBOARD_SCREEN_2}
                    component={OnboardingScreen2}
                />
                <Stack.Screen
                    name={ScreenConst.ONBOARD_SCREEN_3}
                    component={OnboardingScreen3}
                />
                <Stack.Screen
                    name={ScreenConst.LOGIN_SCREEN}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name={ScreenConst.LIST_VIEW_SCREEN}
                    component={ListViewScreen}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}