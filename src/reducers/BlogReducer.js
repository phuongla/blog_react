/**
 * Created by phuongla on 9/14/2017.
 */
import _ from 'lodash';
import { FETCH_POST, GET_POST, DELETE_POST } from '../actions';


export default (state = { posts: {} }, action) => {
    console.log(action);
    const { type, payload } = action;
    let posts;

    switch (type) {
        case FETCH_POST:
            posts = _.mapKeys(payload.data, 'id');
            return {
                ...state,
                posts
            };
        case GET_POST:
            posts = state.posts || {};
            const post = payload.data;
            posts[post.id] = post;
            return {
                ...state,
                posts
            };
        case DELETE_POST:
            const id = payload;
            posts = state.posts || {};
            return {
                ...state,
                posts: _.omit(posts, id)
            }
        default:
            return state;
    };
}