/**
 * Created by ben on 15/11/27.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class ChatRightSide extends React.Component {

    render() {
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
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-success"></i>
                            Jonathan Smith
                            <span className="text-muted">3h:22m</span>
                        </a>
                    </li>
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-success"></i>
                            Jhone Due
                            <span className="text-muted">1h:2m</span>
                        </a>
                    </li>
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-success"></i>
                            Franklyn Kalley
                            <span className="text-muted">2h:32m</span>
                        </a>
                    </li>
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-danger"></i>
                            Anjelina joe
                            <span className="text-muted">3h:22m</span>
                        </a>
                    </li>
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-warning"></i>
                            Aliace Stalvien
                            <span className="text-muted">1h:12m</span>
                        </a>
                    </li>
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-muted"></i>
                            Stive jones
                        </a>
                    </li>
                    <li>
                        <a href="chat_room.html">
                            <i className="fa fa-circle text-muted"></i>
                            Jonathan Smith
                        </a>
                    </li>
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
