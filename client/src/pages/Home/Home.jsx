import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid'
import Searchbox from '../../components/SearchBox/Searchbox';
import Results from '../../components/Results/Results';
import Saved from '../../components/Saved/Saved';
class Home extends Component {

    state = {
        title: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <Container>
                <Row>
                    <Column>
                    <Searchbox/>
                    <Results/>
                    <Saved/>
                    </Column>
                </Row>

            </Container>

        );
    }
}

export default Home;