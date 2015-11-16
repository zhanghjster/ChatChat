/**
 * Created by ben on 15/11/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import AppDispatcher from '../dispatcher/appDispatcher.js';

export default class Login extends React.Component {

    render() {
        AppDispatcher.showTest();

        return (
            <div className="container login-body">
                <form className="form-signin">
                    <h2 className="form-signin-heading">ChatChat</h2>
                    <div className="login-wrap">
                        <input type="text" className="form-control" placeholder="UserName" autofocus name="username"/>
                        <input type="password" className="form-control" placeholder="Password" name="password"/>
                        <button className="btn btn-lg btn-login btn-block" type="submit">Sign in</button>
                        <div className="registration">
                            <Link to="/signup">Create an account</Link>
                            <span className="pull-right">
                                <a data-toggle="modal" href="#myModal"> Forgot Password?</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}