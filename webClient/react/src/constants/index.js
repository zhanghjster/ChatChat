/**
 * Created by ben on 15/11/18.
 */
import {createConstants} from '../utils';
export default createConstants(
    'LOGIN_REQUEST', 'LOGIN_SUCCESS','LOGIN_FAIL','LOGOUT', 'LOGOUT',
    'SIGNUP_REQUEST', 'SIGNUP_FAIL',
    'CHAT_INITIALIZE_FAIL','CHAT_INITIALIZE_SUCCESS',
    'TAB_INITIALIZE_FAIL', 'TAB_INITIALIZE_SUCCESS',
    'ROOM_INITIALIZED', 'ROOM_CHANGING', 'ROOM_CHANGED',
    'ROOMLIST_INITIALIZED', 'LEAVE_ROOM', 'JOIN_ROOM', 'CREATE_ROOM',
    'NEW_MESSAGE',
    'MEMBER_ACTIVE', 'MEMBER_UNACTIVE', 'MEMBER_JOIN', 'MEMBER_LEAVE',
    'TAB_LOBBY', 'TAB_ROOM', 'TAB_PEER', 'TAB_CHANGED',
    'CHANGE_TAB',
    'ROOM_CREATED', 'LOBBY_INITIALIZE_SUCCESS', 'ROOM_INITIALIZE_SUCCESS'

)