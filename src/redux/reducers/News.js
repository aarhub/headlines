const types = {
    FETCH_NEWS: 'FETCH_NEWS',
    FETCH_NEWS_DOING: 'FETCH_NEWS_DOING',
    FETCH_NEWS_DONE: 'FETCH_NEWS_DONE'
}

const initalState = {
    isFetching: false,
    data: {}
}

export default function News(state = initalState, action) {
    state = state || {};

    switch (action.type) {
        case types.FETCH_NEWS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload
            });
        default:
            return {
                ...state
            }
    }
}