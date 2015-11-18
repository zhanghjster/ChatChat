/**
 * Created by ben on 15/11/18.
 */
import createReducer from '../utils';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../constants';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false
}

export default createReducer(initialState, {
    [LOGIN_REQUEST] : (state, action) => {
        return Object.assign({}, state, {
            'isAuthenticating': true
        })
    },
    [LOGIN_SUCCESS]: (stat, action) => {

    }

})
