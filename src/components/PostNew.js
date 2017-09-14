/**
 * Created by phuongla on 9/14/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { fetchPosts } from '../actions';

class PostNew extends Component {

    constructor(props) {
        super(props);
    }

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderField}
                    label="Title"
                />
                <Field
                    name="tags"
                    component={this.renderField}
                    label="Tags"
                />
                <Field
                    name="content"
                    component={this.renderField}
                    label="Content"
                />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Title is empty';
    }

    if(!values.tag) {
        errors.tag = 'Title is empty';
    }

    if(!values.content) {
        errors.content = 'Title is empty';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(PostNew);