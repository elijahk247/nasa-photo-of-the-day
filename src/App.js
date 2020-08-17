import React, { useState, useEffect } from "react";
import "./App.css";

import Header from './Header';
import Body from './Body';
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
    <Header />
    
    <Body />
    </div>
  );
}

export default App;
