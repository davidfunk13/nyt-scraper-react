import React, { Component } from 'react';
import './Searchbox.css'
import { Input, FormBtn } from '../Form';

class Searchbox extends Component {
    state = {
        title: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('heya ')
  };
    render() {
        return (
            <div className='searchbox'>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />
                <FormBtn
                onClick={this.handleFormSubmit}
              >Submit</FormBtn>
            </div>
        )
    }
}

export default Searchbox