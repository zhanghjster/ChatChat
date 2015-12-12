/**
 * Created by ben on 15/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export class Loading extends React.Component {

    render() {
        return (
             <div className="container">
                <div className="chat-loading">
                    <img src="/img/loader.gif"/>
                </div>
            </div>
        )
    }
}