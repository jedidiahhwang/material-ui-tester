import React from "react";
import './App.css';

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={<Checkbox 
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProp={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary" size="large">
          <Button
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
