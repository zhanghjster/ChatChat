import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loginSuccess} from './actions';

const store = configureStore(window.__INITIAL_STATE__);

let token = localStorage.getItem("token");
if (token != null) {
    store.dispatch(loginSuccess(token));
}

let debugPannel = null;
if ( __DEV__ ) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    debugPannel = (<DebugPanel top right bottom><DevTools store={store} monitor={LogMonitor} /></DebugPanel>);
}

ReactDOM.render(
    <div>
        <Provider store={store}>
        {routes}
        </Provider>
        { debugPannel }
    </div>
    ,
    document.getElementById("APP")
);

