import {combineReducers} from 'redux';
import getTodo from './toggleToDo';

const rootReducer = combineReducers({
    getTodo: getTodo
});
export default rootReducer;