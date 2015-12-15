/**
 * Created by ben on 15/11/26.
 */
var expect = require("expect"),
    assert = require("assert");

import roomData from "../src/utils/roomData.js";
import {arrayContains} from "../src/utils";

describe('misc test', () => {
    it('roomData function ', () => {
        let room_id = 1;
        let member = {
            userID: 1,
            username: "ben"
        };
        roomData.addMember(1, member);

        expect(roomData.getMember(1, 1)).toEqual(member);

        //roomData.removeMember(1, 1);
        //expect(roomData.getMember(1,1)).toEqual(null);

        expect(roomData.getMembers(1)).toEqual([member]);
    });

    it('undefined variable equal', () => {
        let a = undefined;
        let b = undefined;
        expect(a).toEqual(b);
    });

    it('array contains', () => {
        let a = ['a'];
        let b = 'a';
        assert(arrayContains(a, b), "a should contain b")
        assert(!arrayContains(a, 'c'), "a should not contain c")
    });

    it('delete operation', () => {
        let  a = {
            userID: 1,
            name: "ben",
        };
        delete a["userID"];

        expect(a).toEqual({
            name: "ben"
        })
    });

    it('object assign', () => {
        let a = { 'ben': false };
        a["lee"] = true;
        let b = Object.assign({}, a, { "ben": true});
        assert(b["lee"] && b["ben"], " ben and lee should be true")
    })
})
