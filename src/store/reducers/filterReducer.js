import actionTypes from '../actions/types';

export default function (state = '', action) {
    switch (action.type) {
        case actionTypes.setFilter:
            return action.payload.filter;
        default:
            return state;
    }
}