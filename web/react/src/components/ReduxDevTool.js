/**
 * Created by Ron on 15/12/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class ReduxDevTool extends React.Component {

    //function toggleDevTool() {
    //    $('.reduxDevToolCon').toggle();
    //}

    render() {
        const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
        let debugPannel = (<DebugPanel top right bottom><DevTools store={this.props.store} monitor={LogMonitor} /></DebugPanel>);
        return (
            <div className="reduxDevToolWrapper">
                <a className="reduxDevToolCtr btn btn-primary btn-sm"
                   onClick={() => $('.reduxDevToolWrapper').toggleClass('open')}>
                    <i className="fa fa-bug"></i>
                </a>
                <div className="reduxDevToolCon">
                    { debugPannel }
                </div>
            </div>
        )
    }
}
