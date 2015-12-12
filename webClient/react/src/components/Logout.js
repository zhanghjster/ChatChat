/**
 * Created by ben on 15/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {logout} from '../actions';

class Logout extends React.Component {
    componentWillMount() {
        this.props.dispatch(logout());
    }

    render() {
        return <div></div>
    }
}

export default connect(state => { return { state: state} })(Logout)


