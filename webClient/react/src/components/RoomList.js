/**
 * Created by ben on 15/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {NewRoomModal} from './index';

export default class RoomList extends React.Component {
    
    render() {
        let roomList = this.props.roomList;

        let roomItems = roomList.map((room) => {
            return (
                <div className="room-box">
                    <h5 className="text-primary"><a href="chat_room.html">{room.Name}</a></h5>
                    <p>{room.Description}</p>
                    <p>
                        <span className="text-muted">Admin :</span> {room.OwnerName} |
                        <span className="text-muted">Members :</span> {room.Members} |
                        <span className="text-muted">Last Activity :</span> {room.LastUpdateTime}
                    </p>
                </div>
            )
        })
        
        return (
            <div>
                <div className="chat-room-head">
                    <h3>Lobby</h3>
                    <form action="#" className="pull-right position">
                        <input type="text" placeholder="Search" className="form-control search-btn "/>
                    </form>
                </div>
                <div className="room-desk">
                    <a  className="pull-right btn btn-default" data-toggle="modal" href="#createRoom">+ Create Room</a>
                    <NewRoomModal createRoom={ this.props.createRoom }/>
                    {roomItems}
                </div>
            </div>
        )
    }
}