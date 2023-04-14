import React from 'react';

/*
ResultsTable receives a prop that is an object. 
resultsTable splits the object into header and body then returns a table

*/

const resultsTable = (props) => {
 
    return (
        <HotTable
          data={arrayBody}
          rowHeaders = {false}
          colHeaders = {arrayHeader}
          height="auto"
          licenseKey="non-commercial-and-evaluation" 
        />
    )
}

export default resultsTable;