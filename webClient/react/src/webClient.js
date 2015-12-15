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

if ( __DEV__ ) {
    let ReduxDevTool  = require('./components/ReduxDevTool');
    ReactDOM.render(
        <div classNmae='container'>
            <div  className="row">
                <div className="col-sm-12">
                    <Provider store={store}>
                        {routes}
                    </Provider>
                </div>
            </div>
            <ReduxDevTool store={store}></ReduxDevTool>
        </div>
        ,
        document.getElementById("APP")
    );
} else {
    ReactDOM.render(
        <div>
            <Provider store={store}>
                {routes}
            </Provider>
        </div>
        ,
        document.getElementById("APP")
    );
}