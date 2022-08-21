import React, { useRef, useState, Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Test from './test';

function App() {

    return (
      <div className="App container">

        {/* Navbar */}
        <nav>
        <Navbar></Navbar>
        </nav>
         {/* Navbar */}

        <Test></Test>

      </div>
    );

}

export default App;
