/**
 * Created by ben on 15/11/18.
 */
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import routes from '../routes';
import rootReducer from '../reducers'

export default function configureStore(initialState) {

    let ceateStoreWithMiddleware;

    if (__DEV__ || true) {
        const { persistState, devTools } = require('redux-devtools');
        ceateStoreWithMiddleware = compose(
            applyMiddleware(thunk),
            devTools(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        );
    } else {
        ceateStoreWithMiddleware = compose(
            applyMiddleware(thunk, createLogger)
        );
    }

    const store = ceateStoreWithMiddleware(createStore)(rootReducer, initialState);

    return store;
}


