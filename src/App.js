import React from 'react';
import logo from './logo.svg';
import SelectTable from './SelectTable.js';
import SelectVersion from './SelectVersion.js';
import SelectSchema from './SelectSchema.js';
import DisplayTable from './DisplayTable.js';
import SelectButton from './SelectButton.js';
import StartJobButton from './StartJobButton.js';
import {Button} from '@workday/canvas-kit-react-button';

function App() {
  return (
    <div className="App">
      <SelectTable/>
      <SelectVersion/>
      <SelectSchema/>
      //<Button variant={Button.Variant.Primary}>Select Button</Button>
      <SelectButton/>
      <DisplayTable/>
      //<Button variant={Button.Variant.Primary}>Start Job</Button>
      <StartJobButton/>
    </div>
  );
}

export default App;
