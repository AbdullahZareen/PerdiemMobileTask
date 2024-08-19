import { AppState, Platform, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import AppStack from './src/navigations/AppStack'
import store, { persister, RootState } from './src/redux/store'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { requestNotificationPermission } from './src/notifications-popup/notification'

GoogleSignin.configure({
  webClientId: '164988742942-2omqfg5dk9u22plbqvunpcbfn942onl9.apps.googleusercontent.com',
  iosClientId: '164988742942-2omqfg5dk9u22plbqvunpcbfn942onl9.apps.googleusercontent.com',
});
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    requestNotificationPermission()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppStack />
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})