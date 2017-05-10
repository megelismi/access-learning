import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';
import WelcomePage from './components/WelcomePage';

const routes = (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/game" component={App} />
      </div>
   </HashRouter>
  </Provider>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

console.log(`Client running in ${process.env.NODE_ENV} mode`);
