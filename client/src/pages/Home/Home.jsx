import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import { Input, FormBtn } from '../../components/Form'
import API from '../../utils/API'
import request from 'request'
import Cheerio from '../../utils/Cheerio'
import { List, ListItem } from '../../components/List'
import NYT from '../../utils/NYT'
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

    loadPosts = (articlesArray) => {
        if(articlesArray){
            console.log('thru')
       console.log(articlesArray)
        
    }



    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let articlesArray = []
        if (this.state.title) {
            request.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                  'api-key': "a039a30e45144355ba84c17a25a0796c",
                  'q' : this.state.title
                },
              }, function(err, response, body) {
                body = JSON.parse(body);
                // console.log(body);
                let articles = body.response.docs
              articles.forEach(articles =>{
                  articlesArray.push(articles)
              })
              })
        }
        console.log(articlesArray)
        this.loadPosts(articlesArray)
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