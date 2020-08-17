import React, { useState, useEffect } from 'react';
import "./App.css";

export default function Body(props) {
    const {picture, setPicture} = props;
    return(
        <img src={props.picture}/>

    )
}