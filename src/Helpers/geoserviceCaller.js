import axios from "axios"
import React, { useEffect, Component } from 'react'

import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();
/* 
Geoservice Caller does the following:
1. Receives the state, which the is user uploaded file's content body/data
2. Break the data up into rows
2. Takes one row and uses that row's information to create parameters for the geoservice call request
3. It makes the call request, obtains the data, and then sends it back to App

Blockers:
Stuck on sending the data back to App without creating an infinite loop because 
geoserviceCaller rerenders upon receiving information, and when it rerenders, it sends info again
Figure out how to use componentDidUpdate or componentDidMount (What is the difference?)

1. Use Promises <- Figure out what that is
    - https://www.newline.co/fullstack-react/30-days-of-react/day-15/
2. Local APIs <- creating a temporary local api to store data instead of remaking the call (hence, query storage)

3. DOM Buffering React Table, show specific parts of the table <- Since each query will have 100+ columns, only the main ones should display until user selects more
    - https://levelup.gitconnected.com/how-to-render-your-lists-faster-with-react-virtualization-5e327588c910
4. Pagination on the rows <- another option is to paginate in order to reduce load time. Zhi had the issue with only loading up to 1000 rows before the browser started to lag, paginating would fix this 
    - https://www.npmjs.com/package/@pagination/xlsx
*/
const proxy = "https://cors-anywhere.herokuapp.com/"
const baseURL = "https://geoservice.planning.nyc.gov/geoservice/geoservice.svc/"
const key = "r4u7xXABDHG7JaNd"

let borough1 = ""
let borough2 = ""
let borough3 = ""
let onStreet = ""
let secondCrossStreet = ""
let firstCrossStreet = ""

let f3_url = baseURL + "function_3S?Borough1=" + 
                borough1 + "&OnStreet=" + 
                onStreet + "&SecondCrossStreet=" + 
                secondCrossStreet + "&Borough2=" + 
                borough2 + "&FirstCrossStreet=" + 
                firstCrossStreet + "&Borough3=" + 
                borough3 + "&key=" + key


const geoserviceCaller = (props) => {
    // Mocked data
    // Depending on the selection made on dropdown, run either f1b_url or f3_url
    function geocodeQuery(data) {
        if (props.fileUploaded !== false){
            const excelBody = props.data
            excelBody.forEach((row) => {
                let f1B_url = baseURL + "function_1B?Borough=" + row[2] + "&AddressNo=" + 
                row[0] + "&StreetName=" + row[1] + "&Key=" + key    
                const fetchData = async () => {
                    const response = await axios 
                    .get(proxy + f1B_url)
                    .catch((err) => {
                        console.log("Request Error", err)
                    })
                    console.log(response.data.display)
                    return (
                        <HotTable
                            data={response.data.display}
                            rowHeaders = {false}
                            colHeaders = {false}
                            height="auto"
                            licenseKey="non-commercial-and-evaluation" 
                        />
                    )
                    /* The first row of data is all headers:
                        - The first time this runs, it will bring back fetch request w/ data.
                        - Need to split the data into key/values
                        - On the 1st iteration, set state for the keys as headers
                        - On the 1st iteration, set state for the values as body
                        - On the 2nd iteration, append to state for the values only
                        - On the 3rd iteration, same as above, and so on until all requests are made
                    */
                } 

                useEffect(() => {
                    fetchData();
                }, [])
            })
        } else {
            console.log("no file yet")
        }
    }

    geocodeQuery(props.data)

    /* const handleRequest = () => {
        const request = e.target.data[0];
        const data = request.arrayBuffer();
        const workbook = XLSX.read(data)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        
        // Makes the first array contain all headers and the rest of the arrays have the values
        const fileFull = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: "",
        })

        // Sets state for the header and body
        props.importHeader(fileFull[0])
        const fileBody = fileFull.map((item) => item)
        fileBody.shift()
        props.importBody(fileBody)
        props.importStatus(true)
    } */


    /*
        Psuedocode:
        queryHelper(body of data) 
            First, check if a file has been uploaded
                If yes, proceed
                If no, display no file uploaded
            For each row of data:
                set the state url params to that data row
                use the state url params to make a fetch request
                set the status of fetch to success or fail
                If success, increment success counter by 1
                If fail, increment fail counter by 1
                Go to next row
        
        Using Promises:
            Promise of request success
                then receive json data and work with the data
            Request Failure
                then display error
    */
}

/*
const geoserviceCaller = (props) => {
    const full_url = props.proxy + props.f1B_url
    const response = axios
        .get(full_url)
        .then((res) => console.log(res))
        .catch((err) => {console.log("Err", err)}) 
    console.log(props.importBody)
}
*/

export default geoserviceCaller

