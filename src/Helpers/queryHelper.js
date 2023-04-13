import React, { Component } from 'react';
/*
QueryHelper is a helper method that takes in a body of data, then breaks that data up into its rows.
It sends the row to the geoserviceCaller to make a request
The request is then sent back to QueryHelper to be stored into a queryStorage
This is repeated until all rows have been fetched.

*/

export function QueryHelper(queriedData){
    console.log(queriedData)

    queriedData.forEach((row) => console.log(row))
}

