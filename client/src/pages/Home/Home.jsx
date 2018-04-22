import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid'
import Searchbox from '../../components/SearchBox/Searchbox';
import Results from '../../components/Results/Results';
import Saved from '../../components/Saved/Saved';
class Home extends Component {
    // state= {

    // }

    render() {
        return (
            <Container>
                <Row>
                    <Column>
                    <div className='greetings'>yo yo whats uuuuuup got it </div>
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