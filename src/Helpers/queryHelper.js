import React, { Component } from 'react';
/*
QueryHelper is a helper method that takes in a body of arrays, then breaks that data up into its rows.
It sends the row to the geoserviceCaller to make a request
The request is then sent back to QueryHelper to be stored into a queryStorage
This is repeated until all rows have been fetched.

*/
const QueryHelper = (props) => {
    function QueryHelper(queriedData) {
        queriedData.forEach((row) => {console.log(row)})
            // If props.storage is empty, set the state to the first row
            // Else If props.storage is the same, console.log(same data still)
            // Else if props.storage is different, set the state to the next row
    }

    QueryHelper(props.data)
}

export default QueryHelper;
