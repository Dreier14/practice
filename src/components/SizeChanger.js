import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }
  
render(){

return(
    <select className="dropDownContainer" onChange={ (e) => this.props.update( parseInt(e.target.value)) } disabled={ this.props.allowEdit === "false"}>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="24">24</option>
    </select>
    )
  }
}