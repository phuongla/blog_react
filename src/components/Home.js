/**
 * Created by phuongla on 9/14/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    renderPosts() {
        const { posts } = this.props;
        const postItems =  _.map(posts, (post) => {
            const { id, title, category, content } = post;
            return (
                <li className="list-group-item">
                    {title}
                </li>
            );
        });
        return postItems;
    }

    render() {
        const { posts } = this.props;
        console.log(posts);

        if(!posts) {
            return <h3>Empty Post</h3>;
        }

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new" >
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ blog }) {
    const { posts } = blog;
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(Home);