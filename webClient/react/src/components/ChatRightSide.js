/**
 * Created by ben on 15/11/27.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {PEER_AVAILIABLE, PEER_UNAVAILABLE, PEER_BUSY} from "../constants";

export default class ChatRightSide extends React.Component {

    render() {
        let memberList = this.props.memberList;

        let memberItems = memberList.map((member) => {
            let statusClass = null;
            switch (member.status) {
                case PEER_AVAILIABLE:
                    statusClass = "fa fa-circle text-success";
                    break;
                case PEER_UNAVAILABLE:
                    statusClass = "fa fa-circle text-muted";
                    break;
                case PEER_BUSY:
                    statusClass = "fa fa-circle text-danger";
                    break;
            }

            return (
                <li>
                    <a href="chat_room.html">
                        <i className={statusClass}></i>
                        {member.username}
                    </a>
                </li>
            )
        });

        return (
            <aside className="right-side col-lg-2">
                <div className="user-head">
                    <a href="#" className="chat-tools btn-success"><i className="fa fa-cog"></i> </a>
                    <a href="#" className="chat-tools btn-key"><i className="fa fa-key"></i> </a>
                </div>
                <div className="invite-row">
                    <h4 className="pull-left">People</h4>
                </div>
                <ul className="chat-available-user">
                    {memberItems}
                </ul>
                <div className="footer">
                    <a href="#" className="guest-on">
                        <i className="fa fa-check"></i>
                        Guest Access On
                    </a>
                </div>
            </aside>
        );
    }

}
