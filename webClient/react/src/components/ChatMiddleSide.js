/**
 * Created by ben on 15/12/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default  class ChatMiddleSide extends React.Component {


    render() {

        return (
            <aside className="mid-side col-lg-8">
                {this.props.list}
            </aside>
        );
    }
}