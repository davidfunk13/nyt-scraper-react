import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import API from '../../utils/API'
import { Input, FormBtn } from '../../components/Form'
import { List, ListItem } from '../../components/List'
import Scrape from '../../utils/Scrape'
class Home extends Component {

    state = {
        formInput: "",
        posts: [],
    }

    componentDidMount() {
        this.loadArticles()
        Scrape.scrapePosts().then(data => {
            console.log(data)
        })
    };
    loadArticles = () => {
   
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // event.preventDefault();
        let query = this.state.formInput
        // console.log(query) 
        API.scrapeArticles(query)
        
    };
    render() {
        return (
            <Container>
                <Row>
                    <Column>
                        <Input
                            value={this.state.formInput}
                            onChange={this.handleInputChange}
                            name="formInput"
                            placeholder="Search Query (required)"
                        />
                        <FormBtn onClick={this.handleFormSubmit}>Scrape NYT API</FormBtn>
                    </Column>
                    <Column>
                        {this.state.posts.length ? (
                            <List>
                                {this.state.posts.map(posts => (
                                    <ListItem key={posts._id}>
                                        <strong>
                                            {posts.title}
                                        </strong>

                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Column>
                </Row>
            </Container>
        );
    }
}


export default Home;