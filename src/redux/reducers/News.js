import { DO_REQUET_NEWS, DONE_REQUEST_NEWS } from '../actions/News';

const initalState = {
    isFetching: false,
    result: null
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
                result: action.result
            })
        default:
            return state
    }
}