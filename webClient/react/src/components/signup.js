/**
 * Created by ben on 15/11/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {signup} from '../actions';

class Signup extends React.Component {
    doSignup() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.dispatch(signup(username, password));
    }

    render() {
        let error = null;
        if (this.props.signupError != null) {
            error = (
                <div className="form-group has-error">
                    <p className="help-block">{this.props.signupError}</p>
                </div>);
        }
        return (
            <div className="container login-body">
                <form className="form-signin">
                    <h2 className="form-signin-heading">ChatChat</h2>
                    <div className="login-wrap">
                        {error}
                        <input type="text"
                               className="form-control"
                               placeholder="UserName"
                               ref="username"
                               autofocus
                               name="username"/>
                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               ref="password"
                               name="password"/>
                        <button
                            className="btn btn-lg btn-login btn-block btn-danger btn-shadow"
                            type="button"
                            onClick={this.doSignup.bind(this)}
                            >Sign Up</button>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        'signupError': state.auth.signupError
    }
}

export default connect(mapStateToProp)(Signup);
