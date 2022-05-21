import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
 // import { Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
// import axios from 'axios';

function App() {
  const title = 'Take a pitcher! It will last longer.'
  return (
    <div className="App">
      <Header/>
      <div className = 'content'>
        <Home/>
        <h1>{title}</h1>
      </div>
     
    </div>
  );
}

export default App;
