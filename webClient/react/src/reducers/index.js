/**
 * Created by ben on 15/11/18.
 */
import {combineReducers} from 'redux';
import auth from './auth';
import chat from './chat';

export default combineReducers({
    auth, chat
})