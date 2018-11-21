import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './js/store/IcecreamStore';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';

ReactDOM.render(<Provider store={store} > 
   <App />
      </Provider>, document.getElementById('root'));

console.log(store)
window.store = store;
serviceWorker.unregister();
