/**
 * Created by ben on 15/11/27.
 */
import {createReducer} from '../utils';
import {combineReducers} from 'redux';
import {
    CHAT_INITIALIZE_SUCCESS,
    TAB_INITIALIZE_SUCCESS, TAB_INITIALIZING, TAB_INITIALIZE_FAIL, TAB_CHANGING, TAB_CHANGED,
    ROOMLIST_INITIALIZED, LEAVE_ROOM, JOIN_ROOM, CREATE_ROOM,
    NEW_MESSAGE,
    MEMBER_ACTIVE, MEMBER_UNACTIVE, MEMBER_JOIN, MEMBER_LEAVE,
    TAB_LOBBY, TAB_ROOM, TAB_PEER,
    CHANGE_TAB, LOGOUT, ROOM_CREATED,
    LOBBY_INITIALIZE_SUCCESS, ROOM_INITIALIZE_SUCCESS, MEMBER_STATUS_UPDATE,
    MAX_MSG_ID_UPDATE
} from "../constants";

var tabInitialState = {
    initialized: false,
    initializing: false,
    Type: null,
    ID : null,
    Name: ""
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
            Name: payload.currentTab.Name,
        };
    },
    [TAB_INITIALIZING]: (state, payload) => {
        return Object.assign({}, state, {
            initializing: true,
        });
    },

    [TAB_INITIALIZE_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            initialized: true,
            initializing: false,
        });
    },
    [TAB_INITIALIZE_FAIL] :  (state, payload) => {
        return Object.assign({}, state, {
            initialized: false,
            initializing: false,
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
            Name: payload.Name,
        });
    },
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
    [ROOM_CREATED]: (state, payload) => {
        return [
            {
                ID: payload.ID,
                Name: payload.Name,
                MaxMsgID: 0,
                LastReadMsgID: 0,
            },
            ...state,
        ];
    },
    [JOIN_ROOM]: (state, payload) => {
        return [
            {
                ID: payload.ID,
                Name: payload.Name,
                MaxMsgID: payload.MaxMsgID,
                LastReadMsgID: payload.MaxMsgID,
            },
            ...state,
        ];
    },
    [NEW_MESSAGE]: (state, payload) => {
        return state.map((r) => {
            if (r.ID == payload.ID) {
                let s = {MaxMsgID: payload.MaxMsgID };
                if (r.ID == payload.TabID) {
                    s["LastReadMsgID"] = payload.MaxMsgID;
                }
                return Object.assign({}, r, s);
            }
            return r;
        });
    },
    [TAB_CHANGED]: (state, payload) => {
        return state.map((r) => {
            if (r.ID == payload.ID) {
                return Object.assign({}, r, {
                    LastReadMsgID: r.MaxMsgID,
                });
            }
            return r;
        })
    }
});

var messageList = createReducer([], {
    [ROOM_INITIALIZE_SUCCESS]: (state, payload) => {
        return [...payload.messageList];
    },

    [NEW_MESSAGE]: (state, payload) => {
        if (payload.addToList != 1) {
            return state;
        } else {
            return [
                ...state, payload.message
            ]
        }
    },
    [TAB_CHANGING]: (state, payload) => {
        return [];
    },
    [TAB_CHANGED]: (state, payload) => {
        return [...payload.messageList];
    }
});

var initializedTab = createReducer([], {
    [TAB_INITIALIZE_SUCCESS]: (state, payload) => {
        state[payload.ID] = true;
        return Object.assign({}, state)
    }
})

var memberList = createReducer([], {
    [ROOM_INITIALIZE_SUCCESS]: (state, payload) => {
        return [...payload.memberList];
    },
    [MEMBER_ACTIVE]: (state, payload) => {
        return [...payload.memberList];
    },
    [MEMBER_UNACTIVE]: (state, payload) => {
        return [...payload.memberList];
    },
    [MEMBER_JOIN]: (state, payload) => {
        return [...payload.memberList];
    },
    [MEMBER_LEAVE]: (sate, payload) => {
        return [...payload.memberList];
    },
    [TAB_CHANGING]: (state, payload) => {
        return [];
    },
    [TAB_CHANGED]: (state, payload) => {
        return [...payload.memberList];
    },
    [MEMBER_STATUS_UPDATE]: (state, payload) => {
        let members = state.map((m) => {
            if (m.id == payload.id) {
                return Object.assign({}, m, {
                    status: payload.status,
                });
            }
            return m;
        });
        return [...members];
    }
})

var lobbyRoomList = createReducer([], {
    [LOBBY_INITIALIZE_SUCCESS] : (stated, payload) => {
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
