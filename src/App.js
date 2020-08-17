import React, { useState, useEffect } from "react";
import "./App.css";

import Header from './Header';
import Body from './Body';

import { nasaSite, nasaKey } from './Constants'
import Axios from "axios";
import styled from 'styled-components'


// utilizing styled-components instead of the App css file 
const StyledDiv = styled.div `
  text-align: center;
`

function App() {
  const [title, setTitle] = useState('Nasa Picture of the Day');
  const [picture, setPicture] = useState('');
  const [date, setDate] = useState('');
  const [keyCounter, setKeyCounter] = useState(1);
  const [explanation, setExplanation] = useState('');

  const toggleExplanation = () => {
    keyCounter === 1 ? setKeyCounter(null) : setKeyCounter(1);
  }

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

        console.log(keyCounter)
      })
      .catch(err => {
        console.log("Error: ", err)
      })
  }, [keyCounter])

  return (
    //<div className="App">
    <StyledDiv>
      <Header title={title} setTitle={setTitle} date={date} setDate={setDate} />     
      <Body picture={picture} setPicture={setPicture}
        explanation={explanation} setExplanation={setExplanation} keyCounter={keyCounter} toggleExplantion={toggleExplanation}/>
    </StyledDiv>
  );
}

export default App;
