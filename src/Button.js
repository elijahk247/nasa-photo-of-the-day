import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import { nasaSite, nasaKey } from './Constants'


export default function Button(props) {
    const { toggleExplanation } = props;
    
    return(
        <button onClick={props.toggleExplanation}>Toggle Explanation</button>
    )
}