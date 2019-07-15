import React from 'react';
import logo from '../logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
      </div>
    </React.StrictMode >
  );
};

export default App;
