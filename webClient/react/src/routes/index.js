/**
 * Created by ben on 15/11/15.
 */

function authCheck(nextState, replaceState) {
    // used to do redirect anywhere you want
    //history.replaceState(null, '/login');

    if (!auth.loggedIn()) {
        replaceState({
            nextPathname: nextState.location.pathname
        }, '/login')
    } else {
        replaceState({
            nextPathname: nextState.location.pathname
        }, '/signup')
    }

}
export default {
    componet: APP,
    childRoutes: [
        {
            path: '/login',
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('components/Login'))
                })
            }
        },
        { path: '/signup',
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('components/Signup'))
                })
            }
        },

        { path: '/chat',
            onEnter: authCheck,
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('components/Chat'))
                })
            }
        },
        { path: '/',
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('componets/Default'))
                })
            },
        }
    ]
}
