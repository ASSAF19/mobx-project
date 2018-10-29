import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './js/store/IcecreamStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
console.log(store)
window.store = store;
serviceWorker.unregister();
