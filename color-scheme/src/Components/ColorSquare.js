import React, { Component } from 'react';
import './ColorSquare.css'




class ColorSquare extends Component {


    render() {
        const {name, background} = this.props
        return(
            <div style={{ background }}className='ColorSquare'>
                <div className='copy-container'>
                    <div className='square-content'>
                        <span>{ name }</span>
                    </div>
                    <button className='copy-button'>
                        Copy
                    </button>
                </div>
                <span className='more'>More</span> 
            </div>
        )
    };
};



export default ColorSquare