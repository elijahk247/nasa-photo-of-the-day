import React, { useState, useEffect } from 'react';
import "./App.css";

import Axios from 'axios'
import styled from 'styled-components'
import { nasaSite, nasaKey } from './Constants'

import Button from './Button'

const StyledImg = styled.img `
    width: 100%;
`

export default function Body(props) {
    const { picture, setPicture, explanation, setExplanation, keyCounter, toggleExplanation} = props;

    useEffect(() => {
        Axios.get(`${nasaSite}?api_key=${nasaKey}`)
            .then(res => {
                const picLink = res.data.url;
                const picExpo = res.data.explanation;

                setPicture(picLink);
                setExplanation(picExpo)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    },[])


    return(
        <div>
            <StyledImg src={props.picture}/>

            <Button toggleExplanation={props.toggleExplanation} />
            {
                keyCounter && <p>{props.explanation}</p>
            }
        </div>
    )
}