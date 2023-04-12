import axios from "axios";
import React, { UseEffect } from 'react';

/* 
Geoservice Caller does the following:
1. Receives the state, which the is user uploaded file's content body
2. Takes one row and uses that row's information to create parameters for the geoservice call request
3. It makes the call request, obtains the data, and then sends it back to App
*/

const geoserviceCaller = async (props) => {
    const response = await axios
        .get(props.proxy + props.f1B_url)
        .catch((err) => {
            console.log("Err", err)
        })
        .then((res) => console.log(res))
    
    UseEffect(() => {
        geoserviceCaller();
    }, [])

    return (
        <div className="ui grid container">        
            <p>Hi</p>
        </div>
    );
};

export default geoserviceCaller;