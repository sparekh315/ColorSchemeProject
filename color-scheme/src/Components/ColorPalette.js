import React, { Component } from 'react';
import ColorSquare from './ColorSquare';
import './ColorPalette.css'

class ColorPalette extends Component {
    render() {
        const colorSquares = this.props.colors.map( color => {
            return(
                <ColorSquare background={color.color} name={color.name} />
            )
        });
        return(
            <div className='ColorPalette'>
                <div className='Palette-colors'>
                    {colorSquares}
                </div>
            </div>
        )
    };
};


export default ColorPalette;
