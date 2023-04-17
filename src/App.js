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
import QueryHelper from './Helpers/queryHelper';

registerAllModules();

class App extends Component {
  state = {
    // Imported file data
    fileName: '',
    fileHeader: {},
    fileBody: {},

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

  // Stores the queried data into the current state
  // queryStorage = (data) => {

  // }

  render()
  {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const baseURL = "https://geoservice.planning.nyc.gov/geoservice/geoservice.svc/"
    const key = "r4u7xXABDHG7JaNd";
    
    const f1B_url = baseURL + "function_1B?Borough=" + 
                    this.state.borough + "&AddressNo=" + 
                    this.state.addressNum + "&StreetName=" + 
                    this.state.streetName + "&Key=" + key
    const f3_url = baseURL + "function_3S?Borough1=" + 
                    this.state.borough1 + "&OnStreet=" + 
                    this.state.onStreet + "&SecondCrossStreet=" + 
                    this.state.secondCrossStreet + "&Borough2=" + 
                    this.state.borough2 + "&FirstCrossStreet=" + 
                    this.state.firstCrossStreet + "&Borough3=" + 
                    this.state.borough3 + "&key=" + key
    
    return (
      <div className="App">
        <h1>Geocoder</h1>
        <p>Please select a file to geocode:</p>
        
        <ParseExcel 
          importHeader={this.importHeader}
          importBody={this.importBody}
        />

        <HotTable
          data={this.state.fileBody}
          rowHeaders = {false}
          colHeaders = {this.state.fileHeader}
          height="auto"
          licenseKey="non-commercial-and-evaluation" 
        />

        <GeoserviceCaller 
          proxy = {proxy}
          baseURL = {baseURL}
          key = {key}
          f1B_url = {f1B_url}
          f3_url = {f3_url}
          queryRequest = {this.importBody}
          queryStorage = {this.queryStorage}
        />

        <QueryHelper 
          data={this.state.fileBody} 
          onChange = {this.queryStorage}
        />

      </div>
    );
  }
}

export default App;

/*
  1. Add second HotTable for Geocoded results
*/