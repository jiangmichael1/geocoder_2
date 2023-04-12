import './App.css';
import React, { Component } from 'react';
import ParseExcel from './Import/parseExcel';

// Hot Table Imports
import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

class App extends Component {
  state = {
    file: null,
    header: [],
    body: [],
    results: [],
    // Import data
    fileName : '',
    fileHeader: {},
    fileBody: {}
  }

  // Change state when file imports
  importHeader = (header) => {
    this.setState({fileHeader: header})
  }

  importBody = (body) => {
    this.setState({fileBody: body})
  }

  render()
  {
    console.log(this.state.fileHeader)
    console.log(this.state.fileBody)

    return (
      <div className="App">
        <h1>Geocoder</h1>
        <ParseExcel 
          fileName={this.state.fileName} 
          fileHeader={this.state.fileHeader} 
          fileBody={this.state.fileBody} 
          importHeader={this.importHeader}
          importBody={this.importBody}
        />
        <HotTable
      
          data={this.state.fileBody}
          rowHeaders = {false}
          colHeaders = {this.state.fileHeader}
          height="auto"
          licenseKey="non-commercial-and-evaluation" />
      </div>
    );
  }
}

export default App;




