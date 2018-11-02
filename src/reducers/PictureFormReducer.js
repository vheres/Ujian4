import { PICTURE_UPDATE, PICTURE_CREATE, CLEAR_FORM } from '../actions/types';

const INITIAL_STATE = {
    user: '',
    image: '',
    caption: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PICTURE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case PICTURE_CREATE:
            return INITIAL_STATE;
        case CLEAR_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}