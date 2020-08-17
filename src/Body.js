import React, { useState, useEffect } from 'react';
import "./App.css";

import Axios from 'axios'
import { nasaSite, nasaKey } from './Constants'

export default function Body(props) {
    const { picture, setPicture } = props;

    useEffect(() => {
        Axios.get(`${nasaSite}?api_key=${nasaKey}`)
            .then(res => {
                const picLink = res.data.url;
                setPicture(picLink);
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    },[])


    return(
        <img src={props.picture}/>

    )
}