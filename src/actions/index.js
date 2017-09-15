/**
 * Created by phuongla on 9/14/2017.
 */
import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=phuongla';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
    const url = `${API_URL}/posts${API_KEY}`;
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
              type: FETCH_POST,
              payload: response
            });
        });
    };
}


export function createPost(data, callback) {
    const url = `${API_URL}/posts${API_KEY}`;
    return (dispatch) => {
        axios.post(url, data).then(response => {
            dispatch({
                type: CREATE_POST,
                payload: response
            });
            callback();
        });
    };
}


export function getPost(postId) {
    const url = `${API_URL}/posts/${postId}${API_KEY}`;
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: GET_POST,
                payload: response
            });
        });
    };
}

export function deletePost(postId, callback) {
    const url = `${API_URL}/posts/${postId}${API_KEY}`;
    return (dispatch) => {
        axios.delete(url).then(response => {
            dispatch({
                type: DELETE_POST,
                payload: postId
            });
            callback();
        });
    };
}