import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorSquare.css'




class ColorSquare extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false}), 1500)
        });
    }
    render() {
        const {name, background} = this.props
        const {copied}  = this.state
        return(
            <CopyToClipboard  text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className='ColorSquare'>
                    <div 
                        style={{ background }} 
                        /* class 'color-copy-overlay is always used, but if this.state.copied is true, also use className 'show'.  */
                        className={`color-copy-overlay ${ copied && 'show' }`} 
                    />
                    <div className={`copied-message ${ copied && 'show' }`} >
                        <h1>Copied</h1>
                        <p>{this.props.background}</p>
                    </div>
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



