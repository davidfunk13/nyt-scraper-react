import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import {Input, TextArea, FormBtn} from '../../components/Form'
class Home extends Component {

    state = {
        search: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
      };

    render() {
        return (
            <Container>
                <Row>
                    <Column>
                    <form>
                    <Input value={this.state.search}
                    name='search'
                    onChange={this.handleInputChange}/>
                    <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form>
                    </Column>
                </Row>

            </Container>

        );
    }
}

export default Home;