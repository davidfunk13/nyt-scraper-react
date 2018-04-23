import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import { Input, FormBtn } from '../../components/Form'
import API from '../../utils/API'
import request from 'request'
import Cheerio from '../../utils/Cheerio'
import { List, ListItem } from '../../components/List'
class Home extends Component {

    state = {
        title: "",
        posts: [],
        cheerios: []
    }
    componentDidMount() {
        this.loadPosts();
    }


cheerioScrape = () => {
    Cheerio.cheerioScrape().then(res => this.setState({cheerios: res.data })).catch(err => console.log(err))
    console.log(this.state.cheerios)
}

    loadPosts = () => {
        // request.get({
        //     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        //     qs: {
        //       'api-key': "a039a30e45144355ba84c17a25a0796c"
        //     },
        //   }, function(err, response, body) {
        //     body = JSON.parse(body);
        //   })
        // API.getPosts()
        //     .then(res =>
        //         this.setState({ posts: res.data, title: "" })
        //     )
        //     .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.title)
        if (this.state.title) {
            request.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                  'api-key': "a039a30e45144355ba84c17a25a0796c",
                  'q' : this.state.title
                },
              }, function(err, response, body) {
                body = JSON.parse(body);
                console.log(body);
              })

        }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Column>
                        <form>
                            <Input value={this.state.title}
                                name='title'
                                onChange={this.handleInputChange} />
                            <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
                        </form>
                    </Column>
                    <Column>
                        {this.state.posts.length ? (
                            <List>
                                {this.state.posts.map(post => (
                                    <ListItem key={post.title}>
                                        {post.title}
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>None to show</h3>
                            )}
                    </Column>
                </Row>

            </Container>

        );
    }
}

export default Home;