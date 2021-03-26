import { combineReducers, createStore } from "redux";
import {reducer as formReducer} from 'redux-form';
import { formDataTableReducer } from './formDataTableReducer';
import { homePageReducer } from './homePageReducer';

let reducers = combineReducers({
    form: formReducer,
    tablePage: formDataTableReducer,
    homePage: homePageReducer 
});

let store = createStore(reducers);



export default store;