/**
 * Created by ben on 15/11/25.
 */
import {arrayContains} from "./index.js";

class RoomData  {

    constructor() {
        this._messages = {};
        this._members  = {};
    }

    addMember(roomID, member) {
        if (this._members[roomID] == null) {
            this._members[roomID] = {};
        }
        this._members[roomID][member.userID] = member;
    }

    removeMember(roomID, memberID) {
        delete this._members[roomID][memberID];
    }

    addMessage(roomID, message) {
        if (this._messages[roomID] == null) {
            this._messages[roomID] = [];
        }

        if (arrayContains(this._members[roomID], message)) {
            return;
        }
        this._messages[roomID].push(message);
    }

    getMember(roomID, userID) {
        return this._members[roomID][userID];
    }

    getMembers(roomID) {
        let members = [];
        for (var m in this._members[roomID]) {
            if (this._members[roomID].hasOwnProperty(m)) {
                members.push(this._members[roomID][m])
            }
        }
        return members;
    }

    getMessages(roomID) {
        if ((typeof this._messages[roomID]) == "undefined") {
            return [];
        }
        return this._messages[roomID];
    }
}

let roomData = new RoomData();

export default roomData;
