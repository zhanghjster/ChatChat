var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

import Constants from '../utils/constants.js';

var AppDispatcher = assign(new Dispatcher(), {
    handleServerAction: function performServerAction(action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction: function performViewAction(action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    showTest: function () {
        console.log("dispatcher working");
    },
});

export default AppDispatcher;

