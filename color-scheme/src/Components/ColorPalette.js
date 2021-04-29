import React, { Component } from 'react';
import ColorSquare from './ColorSquare';
import './ColorPalette.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class ColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state =  { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({ level })
    }
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorSquares = colors[level].map( color => {
            return(
                <ColorSquare background={color.hex} name={color.name} />
            )
        });
        return(
            <div className='ColorPalette'>
                <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <div className='Palette-colors'>
                    {colorSquares}
                </div>
            </div>
        )
    };
};


export default ColorPalette;
