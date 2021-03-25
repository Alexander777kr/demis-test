import { combineReducers, createStore } from "redux";
import {reducer as formReducer} from 'redux-form';
import { formDataTableReducer } from './formDataTableReducer';

let reducers = combineReducers({
    form: formReducer,
    tablePage: formDataTableReducer 
});

let store = createStore(reducers);



export default store;