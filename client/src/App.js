import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import SignInOutContainer from './container';
import Table from './components/table';

function App() {
  return (
    <div className="App">
      <Homepage/>
     <SignInOutContainer/>
    </div >
  );
}
export default App;
