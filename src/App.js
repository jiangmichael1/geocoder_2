import './App.css';
import React, { UseEffect, Component } from 'react';
import axios from 'axios';
import ParseExcel from './Import/parseExcel';
import GeoserviceCaller from './Helpers/geoserviceCaller';

// Hot Table Imports
import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

class App extends Component {
  state = {
    // Imported file data
    fileName: '',
    fileHeader: {},
    fileBody: {},
    fileUploaded: false,

    //Query Results: Contains each query as an array 
    queryStorage: [],

    // Data (string) specific to Function 1B Call
    // For Boroughs: ‘1’ = Manhattan, ‘2’ = Bronx, ‘3’ = Brooklyn, ‘4’ = Queens, ‘5’ = Staten Island
    borough: "4",
    addressNum: "6140",
    streetName: "Saunders Street",

    // Data (string) specific to Function 3 Call
    borough1: "4",
    onStreet: "63rd Drive",
    borough2: "4",
    secondCrossStreet: "Queens Blvd",
    borough3: "4",
    firstCrossStreet: "Saunders"
  }

  // Change imported file's header state when file imports
  importHeader = (header) => {
    this.setState({fileHeader: header})
  }

  // Change imported file's header state when file imports
  importBody = (body) => {
    this.setState({fileBody: body})
  }

  importStatus = (bool) => {
    this.setState({fileUploaded: bool})
  }

  render()
  {
    
    
    return (
      <div className="App">
        <h1>Geocoder</h1>
        <p>Please select a file to geocode:</p>
        
        <ParseExcel 
          importHeader={this.importHeader}
          importBody={this.importBody}
          importStatus={this.importStatus}
        />

        <HotTable
          data={this.state.fileBody}
          rowHeaders = {false}
          colHeaders = {this.state.fileHeader}
          height="auto"
          licenseKey="non-commercial-and-evaluation" 
        />

        <GeoserviceCaller 
          queryRequest = {this.importBody}
          queryStorage = {this.state.queryStorage}
          data = {this.state.fileBody}
          fileUploaded = {this.state.fileUploaded}
          assignBorough = {this.queryBorough}
          assignAddressNum = {this.queryAddressNum}
          assignStreetName = {this.queryStreetName}
          borough = {this.state.borough}
          addressNum = {this.state.addressNum}
          streetName = {this.state.streetName}
        />

      </div>
    );
  }
}

export default App;

/*
  1. Add second HotTable for Geocoded results
*/