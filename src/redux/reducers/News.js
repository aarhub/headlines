import { DO_REQUET_NEWS, DONE_REQUEST_NEWS } from '../actions/News';

export function doHandleRequestNews(state = { isFetching: false, result: null }, action) {
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