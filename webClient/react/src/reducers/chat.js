/**
 * Created by ben on 15/11/27.
 */
import {createReducer} from '../utils';
import {combineReducers} from 'redux';
import {
    CHAT_INITIALIZE_SUCCESS,
    TAB_INITIALIZE_SUCCESS, TAB_CHANGING, TAB_CHANGED,
    ROOMLIST_INITIALIZED, LEAVE_ROOM, JOIN_ROOM, CREATE_ROOM,
    NEW_MESSAGE,
    MEMBER_ACTIVE, MEMBER_UNACTIVE, MEMBER_JOIN, MEMBER_LEAVE,
    TAB_LOBBY, TAB_ROOM, TAB_PEER,
    CHANGE_TAB, LOGOUT, LOBBY_INITIALIZED_SUCCESS, ROOM_CREATED
} from "../constants";

var tabInitialState = {
    initialized: false,
    Type: null,
    ID : null,
};

var initialized = createReducer(false, {
    [CHAT_INITIALIZE_SUCCESS]: (state, payload) => {
        return true;
    },
    [LOGOUT]: (state) => {
        return false;
    }
});

var currentTab = createReducer(tabInitialState, {
    [CHAT_INITIALIZE_SUCCESS]: (state, payload) => {
        return {
            initialized: false,
            Type: payload.currentTab.Type,
            ID: payload.currentTab.ID,
        };
    },

    [TAB_INITIALIZE_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            initialized: true,
        });
    },

    [TAB_CHANGING]: (state, payload) => {
        return Object.assign({}, state, {
            initialized: false
        });
    },

    [TAB_CHANGED]: (state, payload) => {
        return Object.assign({}, state, {
            initialized: payload.initialized,
            Type: payload.Type,
            ID: payload.ID,
        });
    },

    [ROOM_CREATED]: (state, payload) => {
        return {
            initialized: false,
            Type: TAB_ROOM,
            ID: payload.ID
        }
    }
});

var roomList = createReducer([], {
    [CHAT_INITIALIZE_SUCCESS]: (state, payload) => {
        return payload.roomList;
    },
    [LEAVE_ROOM]: (state, payload) => {
        return [
            ...state.slice(0, payload.index),
            ...state.slice(payload.index + 1)
        ];
    },
    [JOIN_ROOM]: (state, payload) => {
        return [
            payload.room,
            ...state,
        ];
    },
    [ROOM_CREATED]: (state, payload) => {
        return [
            {
                ID: payload.ID,
                Name: payload.Name
            },
            ...state,
        ];
    }
});

var messageList = createReducer([], {
    [NEW_MESSAGE]: (state, payload) => {
        return [
            ...state, payload.message
        ]
    },
    [TAB_CHANGING]: (state, payload) => {
        return [];
    },
    [TAB_CHANGED]: (state, payload) => {
        return payload.messages;
    }
});

var initializedTab = createReducer([], {
    [TAB_INITIALIZE_SUCCESS]: (state, payload) => {
        state[payload.ID] = true;
        return Object.assign({}, state)
    }
})

var memberList = createReducer([], {
    [MEMBER_ACTIVE]: (state, payload) => {
        return payload.members;
    },
    [MEMBER_UNACTIVE]: (state, payload) => {
        return payload.members;
    },
    [MEMBER_JOIN]: (state, payload) => {
        return payload.members;
    },
    [MEMBER_LEAVE]: (sate, payload) => {
        return payload.members;
    },
    [TAB_CHANGING]: (state, payload) => {
        return [];
    },
    [TAB_CHANGED]: (state, payload) => {
        return payload.members;
    },
})

var lobbyRoomList = createReducer([], {
    [TAB_INITIALIZE_SUCCESS] : (stated, payload) => {
        return payload.lobbyRoomList
    }
})

export default combineReducers({
    initialized,
    currentTab,
    roomList,
    messageList,
    memberList,
    initializedTab,
    lobbyRoomList,
})
