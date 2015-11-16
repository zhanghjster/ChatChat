var EventEmitter = require('events').EventEmitter;

import AppDispatcher from '../dispatcher/appDispatcher.js';
import Constants from '../utils/constants.js';

var ActionTypes = Constants.ActionTypes;

let PAGE_CHANGE_EVENT = "page_change";

class AppStoreClass extends EventEmitter {
    constuctor() {
        super();

        this.emitChage = this.emitChage.bind(this);
    }

    addPagechangeListener(callback) {
        this.on(PAGE_CHANGE_EVENT, callback);
    }

}

var AppStore = new AppStoreClass();

// register dispatcher
AppStore.dispatchToken = AppDispatcher.register(function registry(payload) {
    var action = payload.action;

    switch(action.type) {
        case ActionTypes.PAGE_CHANGE:
            // save current page
            // emit page update event
            AppStore.emit(PAGE_CHANGE_EVENT);
            break;
        default:
    }
})