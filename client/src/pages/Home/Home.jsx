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
        Scrape.scrapePosts(query).then(data => {
            let articlesArray = [];
            // console.log(data)
            let article = data.data.response.docs;
            // console.log(article)
            article.forEach(element => {
                // console.log(element)
                let title = element.headline.main
                let url = element.web_url
                let synopsis = element.abstract
                let snippet = element.snippet
                let source = element.source
                let pubDate = element.pub_date
          
                let article = {
                  title: title,
                  url: url,
                  synopsis: synopsis,
                  snippet: snippet,
                  source: source,
                  pubDate: pubDate,
                }
                articlesArray.push(article)
            })
            console.log(articlesArray)
            this.setState({posts:articlesArray})
        })
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