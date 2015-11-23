/**
 * Created by ben on 15/11/8.
 */
import React from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {login} from '../actions';

class Login extends React.Component {

    componentDidMount() {
        this._showError();
    }

    componentDidUpdate() {
        this._showError();
    }

    _showError() {
        if (this.props.loginError != null) {
            this.refs.password.focus();
        }
    }

    doLogin() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.dispatch(login(username, password));
    }

    render() {
        return (
            <div className="container login-body">
                <form className="form-signin">
                    <h2 className="form-signin-heading">ChatChat</h2>
                    <div className="login-wrap">
                        <div className="form-group">
                            <input ref="username"
                                   type="text"
                                   className="form-control"
                                   placeholder="UserName"
                                   autofocus
                                   name="username"/>
                        </div>
                        <div className={this.props.loginError == null ? ("form-group") : ("form-group has-error")}>
                            <input ref="password"
                                   type="password"
                                   className="form-control"
                                   placeholder="Password"
                                   name="password"/>
                        </div>
                        <button className="btn btn-lg btn-login btn-block btn-danger btn-shadow"
                                type="button"
                                onClick={this.doLogin.bind(this)}>Sign in
                        </button>
                        <div className="registration">
                            <Link to="/signup">Create an account</Link>
                            <span className="pull-right">
                                <a data-toggle="modal" href="#"> Forgot Password?</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        'loginError': state.auth.loginError
    }
}

export default connect(mapStateToProp)(Login);


