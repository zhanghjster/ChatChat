/** Created by ben on 15/11/18. **/
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {
    chatInitialize, tabInitialize, changeTab,
    createRoom, showCreateRoom, sendMessage, joinRoom
} from '../actions';
import history from '../utils/history.js';
import {ChatLeftSide, RoomList, MessageList, ChatMiddleSide, ChatRightSide} from './index';
import { authCheck } from '../utils/auth.js';
import {TAB_LOBBY, TAB_ROOM} from '../constants';

class Chat extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount () {
        authCheck(this.props.auth.isAuthenticated, '/login');
    }

    componentDidUpdate() {
        this._tabInitialize();
    }

    componentDidMount() {
        this._chatInitialize();
    }

    _chatInitialize() {
        if (!this.props.chat.initialized) {
            this.props.dispatch(chatInitialize());
        }
    }

    _tabInitialize() {
        if (!this.props.chat.currentTab.initialized
            && !this.props.chat.currentTab.initializing) {
            this.props.dispatch(tabInitialize());
        }
    }

    render() {
        let chatProps = this.props.chat;
        let currentTab = this.props.chat.currentTab;

        let list = null;
        switch (currentTab.Type) {
            case TAB_LOBBY:
                list = (
                    <RoomList
                        initialized={currentTab.initialized}
                        roomList={chatProps.lobbyRoomList}
                        createRoom={(data) => {this.props.dispatch(createRoom(data))}}
                        joinRoom={(id, name) => {this.props.dispatch(joinRoom(id,name))}}
                       />
                );
                break;
            case TAB_ROOM:
                list = (<MessageList
                    title={currentTab.Name}
                    messageList={chatProps.messageList}
                    messageSendHandler={(message) => {this.props.dispatch(sendMessage(message))}}/>);
                break;
        }

        return (
            <div className="chat-room">
                <ChatLeftSide
                roomList={this.props.chat.roomList}
                currentTab={this.props.chat.currentTab}
                    changeTab={(type, id, name) => {this.props.dispatch(changeTab(type, id, name))}}/>
                <ChatMiddleSide list={list}/>
                <ChatRightSide memberList={this.props.chat.memberList}/>
            </div>
        )
    }
}

export default connect(state => {return { chat : state.chat, auth: state.auth }})(Chat);
