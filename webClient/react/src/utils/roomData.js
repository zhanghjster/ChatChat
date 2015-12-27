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
        console.log(member);
        if (this._members[roomID] == null) {
            this._members[roomID] = {};
        }
        this._members[roomID][member.id] = member;
    }

    removeMember(roomID, memberID) {
        delete this._members[roomID][memberID];
    }

    addMessage(roomID, message) {
        if (this._messages[roomID] == null) {
            this._messages[roomID] = [];
        }

        if (arrayContains(this._messages[roomID], message)) {
            return;
        }

        this._messages[roomID].push(message);
    }

    getMember(roomID, userID) {
        if (this._members[roomID] == null) {
            return null;
        }
        return this._members[roomID][userID];
    }

    updateMemberStatus(roomID, userID, status) {
        if (this._members[roomID] == null) {
            return;
        }

        let member = this._members[roomID][userID];
        if (member == null) {
            return;
        }
        member["status"] = status;
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
