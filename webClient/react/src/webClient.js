import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import routes from './config/routes.js';
import history from './utils/history.js';

import Dispatcher from 'flux';

class APP extends React.Component {
  getInitialState() {
    return { }
  }

  render() {
    return <div>{this.pops.children}</div>;
  }
}

ReactDOM.render(
    <Router routes={routes} history={history} />,
    document.getElementById("APP")
);

