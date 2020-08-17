import React, { useState, useEffect } from "react";
import "./App.css";

import Header from './Header';
import Body from './Body';

import { nasaSite, nasaKey } from './Constants'
import Axios from "axios";

function App() {
  const [title, setTitle] = useState('Nasa Picture of the Day');
  const [picture, setPicture] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // make sure to use template literals
    // include the call for the demo key: '?api_key=' 
    Axios.get(`${nasaSite}?api_key=${nasaKey}`)
      .then(res => {
        console.log(res);
        console.log(res.data.date);
        console.log(res.data.title);
        console.log(res.data.explanation);
        console.log(res.data.url);
      })
      .then(res => {
        const picTitle = res.data.title;
        const picDate = res.data.date;
        const picLink = res.data.url;

        setTitle(picTitle);
        setPicture(picLink);
        setDate(picDate);
      })
      .catch(err => {
        console.log("Error: ", err)
      })
  }, [date]);

  return (
    <div className="App">
      <Header />     
      <Body picture={picture} setPicture={setPicture}/>
    </div>
  );
}

export default App;
