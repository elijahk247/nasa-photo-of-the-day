import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import { nasaSite, nasaKey } from './Constants'


export default function Button(props) {
    const { date, setDate, refreshDate } = props;
    
    return(
        <button onClick={props.refreshDate}>Refresh the date</button>
    )
}