/**
 * Created by ben on 15/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {
   TYPE_PEER_JOIN, TYPE_PEER_LEAVE, ENTER_KEY_CODE,
} from "../constants";

export default class MessageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }
    _onChange (event, value) {
        this.setState({text: event.target.value});
    }

    _onKeyDown(event, value) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.state.text.trim();
            if (text) {
                this.props.messageSendHandler(text);
            }
            this.setState({text: ''});
        }
    }

    componentDidUpdate() {
        this._scrollToBottom();
    }

    _scrollToBottom() {
        var ul = this.refs.messageList;
        ul.scrollTop = ul.scrollHeight;
    }

    _messageItems() {
        return this.props.messageList.map( (message, index) => {
            let firstPartClass = "first-part"
            let firstPart = "", secondPart = "";

            if (message.a == TYPE_PEER_JOIN) {
                secondPart = message.u + " joined room ";
            } else if (message.a == TYPE_PEER_LEAVE) {
                secondPart = message.u + " left room ";
            } else {
                firstPart = message.u;
                secondPart = message.c;
                firstPartClass = (index%2 == 0) ? "first-part" : "first-part odd";
            }

            return (
                <div className="group-rom">
                    <div className={firstPartClass}>{firstPart}</div>
                    <div className="second-part">{secondPart}</div>
                    <div className="third-part">{message.t}</div>
                </div>
            )
        });

    }

    render() {
        let messageItems = this._messageItems()
        return (
            <div>
                <div className="chat-room-head">
                    <h3>{this.props.title}</h3>
                    <form action="#" className="pull-right position">
                        <input type="text" placeholder="Search" className="form-control search-btn "/>
                    </form>
                </div>
                <div className="messages" ref="messageList">
                    {messageItems}
                </div>
                <div className="footer">
                    <div className="chat-form">
                        <div className="input-cont ">
                            <textarea
                                className="form-control"
                                id="message" rows="5"
                                placeholder="Enter a message ..."
                                value={this.state.text}
                                onChange={this._onChange.bind(this)}
                                onKeyDown={this._onKeyDown.bind(this)}>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}