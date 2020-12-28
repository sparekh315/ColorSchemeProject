import React, { Component } from 'react';
import './ColorSquare.css'




class ColorSquare extends Component {


    render() {
        return(
            <div style={{ background: this.props.background }}className='ColorSquare'>
                <span>{this.props.name}</span>
                <span>MORE</span>
            </div>
        )
    };
};



export default ColorSquare