import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const authPersistConfig = {
  key: "key",
  storage,
  version: 1,
  whitelist: ["toggle"],
  blacklist: ["auth"],
};

const persistedReducer = combineReducers({
  ...rootReducer,
  auth: persistReducer(authPersistConfig, rootReducer.auth),
 toggle : persistReducer(authPersistConfig, rootReducer.toggle),
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
