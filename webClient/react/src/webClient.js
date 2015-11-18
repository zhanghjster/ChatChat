import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';

import routes from './routes';

class APP extends React.Component {

  static propTypes = {
      store: React.PropTypes.object.isRequired
  };

  render () {
    return
        <Provider store={store}
            <ReduxRouter>
                {routes}
            </ReducRouter>
        </Provider>
      ;
  }
}

ReactDOM.render(<APP/>, document.getElementById("APP"));

