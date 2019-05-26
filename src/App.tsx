import React from 'react';
import logo from './logo.svg';
import Message from './message';
import './App.css';

const initialState = {
  name: 'Manny',
  message: 'TypeScript is cool!'
};

type State = Readonly<typeof initialState>;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Message />
        </header>
      </div>
    );
  }
}

export default App;
