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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        let query = this.state.formInput
        console.log(query)
            API.scrapeArticles(query).then(data =>{
                console.log(data)
            }).catch(err => {
                if (err) {
                    console.log(err)
                }
            })
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