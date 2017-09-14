/**
 * Created by phuongla on 9/14/2017.
 */
import _ from 'lodash';
import { FETCH_POST } from '../actions';


export default (state = {}, action) => {
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case FETCH_POST:
            const posts = _.mapKeys(payload.data, 'id');
            return {
                ...state,
                posts
            };
        default:
            return state;
    };
}