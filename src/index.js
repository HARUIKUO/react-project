import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './app/store/configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './app/containers';
import Home from './app/containers/home'

const store = configureStore()

ReactDOM.render((<Provider store={store}>
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  </div>
</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
