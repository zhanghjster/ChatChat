/**
 * Created by Ben on 15/11/19.
 */

import React from 'react';
import ReactDOM from 'react-dom';

export default class APP extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

