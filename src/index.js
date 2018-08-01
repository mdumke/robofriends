import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import App from './containers/App';
import { searchRobotsReducer } from './reducers';
import './index.css';

const store = createStore(searchRobotsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
