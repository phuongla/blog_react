/**
 * Created by phuongla on 9/14/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getPost, deletePost } from '../actions';

class PostShow extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const { post } = this.props;

        if(!post) {
            const { id } = this.props.match.params;
            const { getPost } = this.props;
            getPost(id);
        }
    }

    handleDelete() {
        const { id } = this.props.match.params;
        const { deletePost, history } = this.props;
        deletePost(id, () => {
            history.push('/');
        })
    }

    render() {
        const { post } = this.props;
        if(!post) {
            return (<div>Loading...</div>);
        }

        const { title, categories, content } = post;

        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <button onClick={this.handleDelete} className="btn btn-danger pull-xs-right">
                    Delete Post
                </button>
                <h3>{title}</h3>
                <h6>{categories}</h6>
                <p>{content}</p>
            </div>
        );
    }
}

function mapStateToProps({ blog }, ownProps) {
    const { posts } = blog;
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost, deletePost })(PostShow);