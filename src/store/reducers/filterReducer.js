import actionTypes from '../actions/types';

export default function (state = '', action) {
    switch (action) {
        case actionTypes.setFilter:
            return action.payload.filter;
        default:
            return state;
    }
}