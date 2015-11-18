/**
 * Created by ben on 15/11/18.
 */
import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';

export default combineReducers({
    auth,
    router: routerStateReducer
})