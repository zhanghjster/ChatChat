/**
 * Created by ben on 15/11/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {TAB_LOBBY} from '../constants';

export default  class ChatLeftSide extends React.Component {
    
    
    render() {
        let currentTab = this.props.currentTab;
        let roomList   = this.props.roomList;

        let roomItems = roomList.map((room) => {
            return (
                <li className={ room.ID === currentTab.ID ? "active" : null }>
                    <a href="#">
                        <span>{room.Name}</span>
                    </a>
                </li>
            )
        })

        return (
          <aside className="left-side col-lg-2">
            <div className="user-head">
                <i className="fa fa-comments-o"></i>
                <h3>ChatChat</h3>
            </div>

            <ul className="chat-list">
                <li className={ currentTab.Type == TAB_LOBBY ? "active" : null }>
                    <a className="lobby" href="#">
                        <h4>
                            <i className="fa fa-list"></i>
                            Lobby
                        </h4>
                    </a>
                </li>
                {roomItems}
            </ul>
          </aside>
        );
    }
}