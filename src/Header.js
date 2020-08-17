import React, { useState, useEffect } from 'react';
import "./App.css";

import Navigation from './Navigation';

export default function Header() {
    return (
        <div className='App-header'>
            <h1> Nasa Picture of the Day </h1>
            <Navigation />
        </div>
    )
}