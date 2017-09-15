/**
 * Created by phuongla on 9/14/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createPost } from '../actions';

class PostNew extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    renderField(field) {
        const { meta: { touched, error }, input, label } = field;
        const formStyle = `form-group ${(touched && error) ? 'has-danger' : ''}`;

        return (
            <div className={formStyle}>
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        const { createPost, history } = this.props;
        createPost(values, () => {
            history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    name="title"
                    component={this.renderField}
                    label="Title"
                />
                <Field
                    name="categories"
                    component={this.renderField}
                    label="Categories"
                />
                <Field
                    name="content"
                    component={this.renderField}
                    label="Content"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Title is empty';
    }

    if(!values.categories) {
        errors.categories = 'Categories are empty';
    }

    if(!values.content) {
        errors.content = 'Content is empty';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(PostNew)
);