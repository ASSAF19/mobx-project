import React, { Component } from 'react';
import './App.css';
import { observer , inject } from 'mobx-react';
import IceCreamForm from './js/components/IceCreamForm'

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IceCreamForm store={this.props.store} />
        </header>
        <ul>
          {this.props.store.iceCreams.map((iceCream, i) => <li key={i}>{iceCream.flavor+ " "+iceCream.color}</li>)}
        </ul>
      </div>
    );
  }
}
export default App;
