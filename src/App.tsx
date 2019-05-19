import React from 'react';
import logo from './logo.svg';
import Message from './message';
import './App.css';

class App extends React.Component<any> {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Message name='Manny' message='this is a simple message' />
        </header>
      </div>
    );
  }
}

export default App;
