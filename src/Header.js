import React, { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios'

import Button from './Button'
import { nasaSite, nasaKey } from './Constants'

// Header, contain basic information 
export default function Header(props) {
    const { title, setTitle, date, setDate, refreshDate } = props;

    
    useEffect(() => {
        Axios.get(`${nasaSite}?api_key=${nasaKey}`)
            .then(res => {
                const picTitle = res.data.title;
                setTitle(picTitle)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    },[])

    return (
        <div className='App-header'>
            <h1> {props.title} </h1>
            <Button date={props.date} setDate={props.setDate} refreshDate={props.refreshDate}/>
        </div>
    )
}