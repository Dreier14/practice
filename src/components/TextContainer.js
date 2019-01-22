import React, { Component } from 'react';

export default class TextContainer  extends Component {
    constructor(){
        super()
        this.state={
            text:''
        }
        this.updateText = this.updateText.bind(this)
    }

    updateText(e){
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div className='textContainer'>
                <textarea
                    style={{color:this.props.fontColor, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize}}
                    onChange={this.updateText}
                    placeholder='Type Here'
                    cols='90'
                    rows='30'>
                </textarea>
            </div>
        );
    }
}