import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import { ColorConst, ScreenConst } from '../constants';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation: any = useNavigation();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password123') {
            setTimeout(() => {
                navigation.replace(ScreenConst.LIST_VIEW_SCREEN)
            }, 1000);
        } else {
            Alert.alert('Error', 'Invalid credentials');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
                navigation.replace(ScreenConst.LIST_VIEW_SCREEN)
                Alert.alert('Success', `Logged in as ${userInfo.user.name}`);
            }

        } catch (error: any) {
            Alert.alert('Error', 'Google login failed');
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {

                console.log('User cancelled sign-in');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Sign-in is in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services not available');
            } else {
                console.log('An error occurred: ', error);
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>OR</Text>
                <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={handleGoogleLogin}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: ColorConst.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: ColorConst.borderGray,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#6200EE',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: ColorConst.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16,
        color: ColorConst.gray,
    },
    googleButton: {
        width: '100%',
        height: 48,
    },
});

export default LoginScreen;
