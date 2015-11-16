/**
 * Created by ben on 15/11/15.
 */
module.exports = {
    login(email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken: function () {
        return localStorage.token
    },

    logout: function (cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn: function () {
        return !!localStorage.token;
    },

    onChange: function () {}
}

