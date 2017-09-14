/**
 * Created by phuongla on 9/14/2017.
 */
import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=phuongla';

export const FETCH_POST = 'FETCH_POST';
export const POST_NEW = 'POST_NEW';

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


export function postNew() {
    const url = `${API_URL}/posts${API_KEY}`;
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: POST_NEW,
                payload: response
            });
        });
    };
}