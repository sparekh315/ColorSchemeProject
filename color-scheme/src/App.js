import React, { Component } from 'react';
import ColorPalette from './Components/ColorPalette';
import defaultPalettes from './Components/defaultPalettes';
import './App.css';
import { generatePalette } from './ColorHelpers';

class App extends Component {
  render() {
      console.log(generatePalette(defaultPalettes[4]));
    return(
      <div>
        <h1>Color Scheme App</h1>
        <ColorPalette  {...defaultPalettes[4]}/>
      </div>
    )
  }
}

export default App;
