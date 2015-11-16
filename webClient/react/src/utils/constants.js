var keyMirror = require('keymirror');

export let Constants = {
    Pages: keyMirror({
        Login: null,
        Signup: null,
        Chat: null
    }),
    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    }),
    ActionTypes: keyMirror({
        PAGE_CHANGE: null
    }),
};
