import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import API from '../../utils/API'
import { Input, FormBtn } from '../../components/Form'
import { ArticleContainer, Article } from '../../components/Article'
import Scrape from '../../utils/Scrape'
import './Home.css'

class Home extends Component {

    state = {
        formInput: "",
        posts: [],
    }

    componentDidMount() {
        this.loadArticles()

    };
    loadArticles = () => {
        console.log('hey')
        API.getPosts().then(res =>{
            console.log(res)
        })
    }

    inputHandler = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    saveArticle = (title) =>{
        console.log(title)
        API.saveArticle(title).then(res => this.loadArticles)


    }



    scrapeNyt = event => {
        event.preventDefault();
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
                            onChange={this.inputHandler}
                            name="formInput"
                            placeholder="Search Query (required)"
                        />
                        <FormBtn disabled={!(this.state.formInput)} onClick={this.scrapeNyt}>Scrape NYT API</FormBtn>
                    </Column>
                    <Column>
                        {this.state.posts.length ? (
                            <ArticleContainer>
                                {this.state.posts.map(posts => (
                                    <Article 
                                        key={posts.title}
                                        title={posts.title}
                                        url={posts.url}
                                        source={posts.source}
                                        snipped={posts.snippet}
                                        pubDate={posts.pubDate}
                                        saveArticle={this.saveArticle}
                                    >
                                    </Article>
                                ))}
                            </ArticleContainer>
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