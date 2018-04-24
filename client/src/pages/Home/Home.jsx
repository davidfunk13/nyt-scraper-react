import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import API from '../../utils/API'
import { Input, FormBtn } from '../../components/Form'
// import Cheerio from '../../utils/Cheerio'
import { List, ListItem } from '../../components/List'
// import NYT from '../../utils/NYT'
class Home extends Component {

    state = {
        formInput: "",
        posts: [],
    }

    componentDidMount() {
        this.loadArticles()
    };
    loadArticles = () => {
        API.getPosts().then(res => {
            // console.log(res.data)
            this.setState({ posts: res.data })
        }).then(console.log(this.state))
        // console.log(this.state)
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
        this.loadArticles()
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
                                        {/* <Link to={"/books/" + book._id}> */}
                                            <strong>
                                                {posts.title}
                                            </strong>
                                        {/* </Link> */}
                                        {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
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