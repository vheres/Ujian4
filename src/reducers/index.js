import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PictureFormReducer from './PictureFormReducer';
import PictureListReducer from './PictureListReducer';

export default combineReducers({
    auth: AuthReducer,
    pictForm: PictureFormReducer,
    pictList: PictureListReducer
});