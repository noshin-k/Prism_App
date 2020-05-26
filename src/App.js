import React from 'react';
import logo from './logo.svg';
import SelectTable from './SelectTable.js';
import SelectVersion from './SelectVersion.js';
import SelectSchema from './SelectSchema.js';
import DisplayTable from './DisplayTable.js';

function App() {
  return (
    <div className="App">
      <SelectTable/>
      <SelectVersion/>
      <SelectSchema/>
      <DisplayTable/>
    </div>
  );
}

export default App;
