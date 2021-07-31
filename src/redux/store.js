import {contactsReducer} from "./contacts"
import {authReducer} from "./auth";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'


const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware,
});



const persistor = persistStore(store)

export default {store, persistor}