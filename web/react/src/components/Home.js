/**
 * Created by Ben on 15/11/20.
 */
import React, { PropTypes } from 'react';
import {authCheck} from "../utils/auth.js";
import {connect} from "react-redux";

class Home extends React.Component {
    componentWillMount () {
        authCheck(this.props.auth.isAuthenticated, '/login', "/chat");
    }

    componentWillReceiveProps() {
        authCheck(this.props.auth.isAuthenticated, '/login', "/chat");
    }

    render() {
        return <div></div>;
    }
}

export default connect(state => { return {auth : state.auth }})(Home)


