/**
 * Created by ben on 15/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class MessageList extends React.Component {


    render() {

        let time = " at 1:55pm, 13th April 2013";
        return (
            <div>
                <div className="chat-room-head">
                    <h3>Water Cooler</h3>
                    <form action="#" className="pull-right position">
                        <input type="text" placeholder="Search" className="form-control search-btn "/>
                    </form>
                </div>
                <div className="message-list" >
                    <section className="panel ">
                        <div className="panel-body " >
                            <div className="activity terques">

                                     <span>
                                          ZHJ
                                      </span>

                                <div className="activity-desk">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="arrow"></div>
                                            <h5><a href="#">Jhon Doe</a><div className="message_time">{time}</div></h5>
                                            <p> Purchased new equipments for zonal office setup and stationaries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="activity alt purple">
                                      <span>
                                          ZHJ
                                      </span>
                                <div className="activity-desk">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="arrow-alt"></div>
                                            <h5><a href="#">Jhon Doe</a><div className="message_time">{time}</div></h5>
                                            <p>Lorem ipsum dolor sit amet consiquest dio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="activity blue">
                                      <span>
                                          JAU
                                      </span>
                                <div className="activity-desk">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="arrow"></div>

                                            <h5><a href="#">Jhon Doe</a><div className="message_time">{time}</div></h5>
                                            <p>Please note which location you will consider, or both. Reporting to the VP  you will be responsible for managing.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="activity alt green">
                                      <span>
                                          Lee
                                      </span>
                                <div className="activity-desk">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="arrow-alt"></div>
                                            <h5><a href="#">Jhon Doe</a><div className="message_time">{time}</div></h5>
                                            <p>Please note which location you will consider, or both.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="footer">
                    <div className="chat-form">
                        <div className="input-cont ">
                            <textarea className="form-control" id="message" rows="5" placeholder="Enter a message ..." ></textarea>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}