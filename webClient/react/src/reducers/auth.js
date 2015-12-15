/**
 * Created by ben on 15/11/18.
 */
import {createReducer} from '../utils';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT,
    SIGNUP_REQUEST, SIGNUP_FAIL
} from '../constants';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    loginError: null,
}

export default createReducer(initialState, {
    [LOGIN_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'loginError': null,
        });
    },
    [LOGIN_SUCCESS]: (state, payload) => {
        localStorage.setItem("token", payload.token);
        try {
            return Object.assign({}, state, {
                'isAuthenticated': true,
                'token': payload.token,
            });
        }catch (e) {
            localStorage.removeItem('token');
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'token': null,
            });
        }
    },
    [LOGIN_FAIL]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null,
            'loginError': payload.loginError,
            'isAuthenticating': false,
        })
    },

    [SIGNUP_FAIL]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null,
            'signupError': payload.signupError,
            'isAuthenticating': false,
        })
    },

    [SIGNUP_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null,
            'signupError': null,
            'isAuthenticating': false,
        })
    },

    [LOGOUT]: (state) => {
        return Object.assign({}, state, initialState);
    }
});
