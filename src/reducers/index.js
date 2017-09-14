/**
 * Created by phuongla on 9/14/2017.
 */
import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    blog: BlogReducer,
    form: formReducer
});

export default rootReducer;