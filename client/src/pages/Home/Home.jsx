import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import API from '../../utils/API'
import {Input, FormBtn} from '../../components/Form'
// import Cheerio from '../../utils/Cheerio'
// import { List, ListItem } from '../../components/List'
// import NYT from '../../utils/NYT'
class Home extends Component {

    state = {
        formInput: "",
        posts: [],
    }

    loadArticles = (res) => {
        console.log('res')
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        let query = this.state.formInput
        // console.log(query)
         API.scrapeArticles(query)

        //   console.log(this.state)
            
      };
    render() {
        return (
            <Container>
                <Row>
                    <Column>
                        
                    </Column>
                    <Column>
                    <Input
                     value={this.state.formInput}
                     onChange={this.handleInputChange}
                     name="formInput"
                     placeholder="Search Query (required)"
                    />
                      <FormBtn onClick={this.handleFormSubmit}>Scrape NYT API</FormBtn>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default Home;