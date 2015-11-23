/**
 * Created by ben on 15/11/15.
 */
import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import history from '../utils/history.js';

function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth();
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth();
        }

        checkAuth () {
            if (!this.props.auth.isAuthenticated) {
                history.pushState(null, '/login');
            } else {
                history.pushState(null, '/chat');
            }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return { auth: state.auth }
    }

    return connect(mapStateToProps)(AuthenticatedComponent);
}

const routeConfig = [
    {
        componet: require('../components/APP'),
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
                getComponent: (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('components/Chat'))
                    })
                }
            },
            { path: '/',
                getComponent: (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, requireAuth(require('components/Home')))
                    })
                }
            }
        ]
    }
];

export default (
    <Router routes={routeConfig} history={history}/>
);

/*
export default(
    <Router history={history}>
        <Route path='/' component={APP}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
            <Route path="chat" component={Chat}/>
        </Route>
    </Router>
);
*/
