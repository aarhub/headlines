import { FETCH_NEWS_START, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL } from '../actions/News';

const initalState = {
    isFetching: false,
    data: {}
}

export default function fetchNews(state = initalState, action) {
    state = state || {};

    switch (action.type) {
        case FETCH_NEWS_START:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case FETCH_NEWS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        case FETCH_NEWS_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.msg
            })
        default:
            return {
                ...state
            }
    }
}