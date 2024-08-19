import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice/AppSlice';

import {
    PersistConfig, persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    app: appReducer,
});
const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })

});
export const persister = persistStore(store);

export default store;