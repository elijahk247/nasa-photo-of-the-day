import React, { useState, useEffect } from 'react';
import "./App.css";

import Navigation from './Navigation';
import Button from './Button'

// Header, contain basic information 
export default function Header() {
    return (
        <div className='App-header'>
            <h1> Nasa Picture of the Day </h1>
            <Navigation />
            <Button />
        </div>
    )
}