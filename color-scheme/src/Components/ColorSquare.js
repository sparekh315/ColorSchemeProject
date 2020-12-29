import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorSquare.css'




class ColorSquare extends Component {


    render() {
        const {name, background} = this.props
        return(
            <CopyToClipboard  text={background}>
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
            </CopyToClipboard>
        )
    };
};



export default ColorSquare



