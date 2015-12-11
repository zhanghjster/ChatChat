/**
 * Created by Ben on 15/11/18.
 */
import { pushState } from 'redux-router';

import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT,
    SIGNUP_REQUEST, SIGNUP_FAIL,
    CHAT_INITIALIZE_SUCCESS, CHANNEL_INITIALIZE_FAIL,
    TAB_INITIALIZE_SUCCESS, TAB_INITIALIZE_FAIL,
    TAB_LOBBY, TAB_ROOM, TAB_PEER, TAB_CHANGED,
    CHANGE_TAB, LOBBY_INITIALIZE_SUCCESS, ROOM_CREATED,
    ROOM_INITIALIZE_SUCCESS,
} from '../constants';
import { checkHttpStatus, parseJSON, roomData, arrayContains } from '../utils';
import history from '../utils/history.js';

var API_BASE = "http://localhost:3001/api/v1";

// login
export function login(username, password) {
    return (dispatch) => {
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
                        dispatch(loginFail(json.ERR));
                    })
                } else {
                    console.log(err);
                }
             }
        );
    }
}

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

export function changeTab(newType, newID, name) {
    return (dispatch, getState) => {
        let state = getState();
        console.log(state.chat.initializedTab);

        dispatch({
            type: TAB_CHANGED,
            payload: {
                initialized: state.chat.initializedTab[newID],
                Type: newType,
                ID : newID,
                Name: name,
                messageList: roomData.getMessages(newID),
                memberList: roomData.getMembers(newID)
            }
        });

        // call api save current tab
        fetch(API_BASE + "/save_current_tab", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.auth.token}`
            },
            body: JSON.stringify({ID: newID, Type: newType})
        }).then(checkHttpStatus).then(parseJSON).then(response => {
            console.log(response);
        }).catch( err => {
            if (err.response != null) {
                err.response.json().then( json => {
                    console.log(json);
                })
            } else {
                console.log(err);
            }
        });
    }
}

// signup
export function signup(username, password) {
    return (dispatch) => {
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

export function signupFail(error) {
    return {
        type: SIGNUP_FAIL,
        payload: {
            signupError: error
        }
    }
}

// chat page initialization functions
export function chatInitialize() {
    return (dispatch, getState) => {
        let state = getState()
        let token = state.auth.token;

        fetch(API_BASE + "/chat_initialize", {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(response => {
                let currentTab = response.currentTab;
                for (var i in response.roomList) {
                    let room = response.roomList[i];
                    if (room.ID == currentTab.ID) {
                        currentTab.Name = room.Name;
                    }
                }

                dispatch(chatInitializeSuccess({
                    initialized: true,
                    currentTab:  currentTab,
                    roomList: response.roomList
                }));
        })
        .catch( (err) => {
            if (err.response != null) {
                err.response.json().then( json => {
                    dispatch(chatInitializeFail(json.ERR));
                })
            } else {
                console.log(err);
            }
        });
    }
}

export function chatInitializeFail(error) {
    return {
        type: CHAT_INITIALIZE_FAIL,
        payload: {
            signupError: error
        }
    }
}

export function chatInitializeSuccess(payload) {
    return {
        type: CHAT_INITIALIZE_SUCCESS,
        payload: payload,
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch({type: LOGOUT });
        history.replaceState("/login");
    }
}

// channel initialization functions
export function tabInitialize() {
    return (dispatch, getstate) => {
        let state = getstate();
        switch (state.chat.currentTab.Type) {
            case TAB_LOBBY:
                lobbyInitialize(dispatch, state);
                return;
            case TAB_ROOM:
                roomInitialize(dispatch, state);
                return;
            case TAB_PEER:
                return;

        }
    };
}

export function lobbyInitialize(dispatch, state)  {
    let currentTab = state.chat.currentTab;
    let token      = state.auth.token;

    //fetch the roomlist
    fetch(API_BASE + "/lobby_initialize", {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(checkHttpStatus).then(parseJSON).then(response => {
        dispatch(tabInitiallizeSuccess(currentTab.ID));
        dispatch({
            type: LOBBY_INITIALIZE_SUCCESS,
            payload: {
                lobbyRoomList: response.roomList,
                ID: currentTab.ID
            }
        });
    }).catch( (err) => {
            if (err.response != null) {
                err.response.json().then( json => {

                })
            } else {
                console.log(err);
            }
        }
    );
}

export function roomInitialize(dispatch, state) {
    let token = state.auth.token;
    let roomID = state.chat.currentTab.ID;

    fetch(API_BASE + "/room_initialize?roomID="+roomID, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then((response) => {
            // save memberList and message list to cache
            for (var i in response.memberList) {
                roomData.addMember(roomID, response.memberList[i]);
            }
            for (var i in response.messageList) {
                roomData.addMessage(roomID, response.messageList[i]);
            }

            // initialize success
            dispatch(tabInitiallizeSuccess(roomID));
            dispatch({
                type: ROOM_INITIALIZE_SUCCESS,
                payload: {
                    messageList: roomData.getMessages(roomID),
                    memberList: roomData.getMembers(roomID),
                    ID: roomID
                }
            })
    })
    .catch( (err) => {
        if (err.response != null) {
            err.response.json().then( json => {
                console.log(json.ERR);
            })
        } else {
            console.log(err);
        }
    });
}

export function tabInitiallizeSuccess(tabID) {
    return {
        type: TAB_INITIALIZE_SUCCESS,
        payload: { ID: tabID}
    }
}

export function createRoom(data) {
    return (dispatch, getState) => {
        console.log(data);
        let state = getState();
        let token = state.auth.token;
        fetch(API_BASE + "/create_room", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({name: data.name, description: data.description})
        }).then(checkHttpStatus).then(parseJSON).then(response => {
            if (data.modalCb) { data.modalCb() }
            dispatch({
                type: ROOM_CREATED,
                payload: {
                    ID: response.ID, Name: response.Name,
                }
            });
            console.log(response);
            dispatch(changeTab(TAB_ROOM, response.ID, data.name));
        }).catch(err => {
            if (err.response != null) {
                err.response.json().then( json => {
                    console.log(json);
                })
            } else {
                console.log(err);
            }
        })
    }
}


