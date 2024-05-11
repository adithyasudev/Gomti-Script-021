
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { adminReducer, loginReducer } from './reducers';


let rootReducer= combineReducers({user :loginReducer,admin: adminReducer}   )
const store = configureStore({
  reducer: rootReducer
});

export default store;

