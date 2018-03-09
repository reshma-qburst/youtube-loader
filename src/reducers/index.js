import { combineReducers } from 'redux';
import searchReducer from './appReducers/searchReducer';

const rootReducer = combineReducers({
    searchReducer
});

export default rootReducer;