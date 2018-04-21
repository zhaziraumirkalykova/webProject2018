import React, { Component } from 'react';
import client from './client';

class CoursesDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleCreateMaterial = (id) => {
    const data = {
      'id': this.state.details[this.state.details.length - 1].id + 1,
      'title': this.state.newMaterial,
    }
    
    this.setState({
      details: [...this.state.details, data],
      newMaterial: ''
    });
    
    client.createMaterials(data, (materials) => {
      if (materials)
        alert('Created!');
    }); 
  }

  render() {
    return (
      <ul >
        <h2> {this.props.detail.title} </h2>
        <input value = {this.state.inputValue} onChange = {this.handleChange} /> 
        <button onClick = {this.state.handleCreateMaterial}> Add </button>
      </ul>
    );
  }
}

export default CoursesDetailView;
