/**
 * Created by Ben on 15/11/18.
 */
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    SIGNUP_REQUEST, SIGNUP_FAIL,
} from '../constants';
import { pushState } from 'redux-router';
import { checkHttpStatus, parseJSON } from '../utils';
import history from '../utils/history.js';

var API_BASE = "http://localhost:3001/api/v1";

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token: token
        }
    }
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        payload: {
            loginError: error
        }
    }
}

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function signupFail(error) {
    return {
        type: SIGNUP_FAIL,
        payload: {
            signupError: error
        }
    }
}

export function login(username, password) {
    return function(dispatch) {
        dispatch(loginRequest())
        return fetch(API_BASE + "/login", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then((response) => {
                dispatch(loginSuccess(response.TOKEN));
                history.pushState(null, '/chat');
            }
        ).catch( (err) => {
                if (err.response != null) {
                    err.response.json().then( json => {
                        dispatch(signupFail(json.ERR));
                    })
                } else {
                    console.log(err);
                }
             }
        );
    }
}

export function signup(username, password) {
    return function(dispatch) {
        return fetch(API_BASE + "/signup", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                // do login after signup
                dispatch(loginSuccess(response.TOKEN));
                history.pushState(null, '/chat');
            }
        ).catch( (err) => {
                if (err.response != null) {
                    err.response.json().then( json => {
                        dispatch(signupFail(json.ERR));
                    })
                } else {
                    console.log(err);
                }
            }
        );
    }
}
