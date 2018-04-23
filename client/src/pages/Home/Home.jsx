import React, { Component } from 'react';
import { Container, Row, Column } from '../../components/BootstrapGrid';
import { Input, TextArea, FormBtn } from '../../components/Form'
import API from '../../utils/API'
import { List, ListItem } from '../../components/List'
class Home extends Component {

    state = {
        title: "",
        posts: []
    }
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
            .then(res =>
                this.setState({ posts: res.data, title: "" })
            )
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.savePost({
                title: this.state.title
            }).then(res => this.loadPosts())
                .catch(err => console.log(err))
            console.log(this.state)
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