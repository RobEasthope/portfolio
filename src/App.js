import React, { Component } from 'react';
import Title from './components/Title/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title>Welcome to React</Title>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">Foobar Foobar Foobar</p>
      </div>
    );
  }
}

export default App;
