import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';

const rootReducer = combineReducers({
    authReducer: authReducer,
});

// Exports
export default rootReducer;

