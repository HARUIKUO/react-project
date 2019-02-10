import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './app/store/configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import App from './app/containers/App';
import Home from './app/containers/home'

const store = configureStore()

ReactDOM.render((<Provider store={store}>
  <div>
    <BrowserRouter>
      <Route path='/' component={Home}></Route>
    </BrowserRouter>
  </div>
</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
