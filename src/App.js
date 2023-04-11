import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    file: null,
    header: [],
    body: [],
    results: [],
    status: {
      start: false,
      count: 0,
      resultsCount: 0,
      errorsCount: 0,
      finshed: false,
    },
    tabOptions: [],
    tabValue: 0,
    fileName : '',
    fileError: false,
    exportColumns: {},
    isEditorOpen: false,
    currentEdit: {}
  }

  render()
  {
    return (
      <div className="App">
        <h1>Geocoder</h1>
      </div>
    );
  }
}

export default App;
