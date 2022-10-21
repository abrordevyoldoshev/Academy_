import { configureStore,combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

})

const persistConfig = {
    key: 'root',
    storage,
}

export default configureStore({
    reducer:{

    }
})



