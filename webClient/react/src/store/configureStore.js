/**
 * Created by ben on 15/11/18.
 */
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reduxCreateRouter} from 'redux-router';
import routes from '../routes';
import createHistory from 'history/lib/createBrowserHistory';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

    let ceateStoreWithMiddleware = compose(
        applyMiddleware(thunk, createLogger),
        reduxReactRouter({routes, createHistory})
    );

    const store = ceateStoreWithMiddleware(createStore)(rootReducer, initialState);

    return store;
}


