import { DO_REQUET_NEWS, DONE_REQUEST_NEWS } from '../actions/News';

const initalState = {
    isFetching: false,
    data: null
}

export function doHandleRequestNews(state = initalState, action) {
    state = state || {};

    switch (action.type) {
        case DO_REQUET_NEWS:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case DONE_REQUEST_NEWS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        default:
            return state
    }
}