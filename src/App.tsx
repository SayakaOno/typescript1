import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /* Complex types */
  // typle: a type of array that you can insert mulple types
  let aTuple: [string, number] = ['test', 123];
  // enum
  enum Codes {
    first = 1,
    second = 2
  }
  // any
  let firstName: any = 'Manny';
  // void
  const warning = (): void => {
    console.log('warning!');
  };

  /* Simple types */
  // let firstValue: string = 'Manny';
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 4];
  // let firstValue: Array<string> = ['2', '3', '4'];

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          The value {aTuple[1]} is of {typeof aTuple[1]} type!
          <br />
          The value {firstName} is of {typeof firstName} type!
          <br />
          The value {warning} is of {typeof warning} type!
          {/* The value {firstValue} is of {typeof firstValue} type! */}
        </p>
      </header>
    </div>
  );
}

export default App;
