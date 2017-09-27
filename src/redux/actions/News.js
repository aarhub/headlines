export const FETCH_NEWS_START = 'FETCH_NEWS_START';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAIL = 'FETCH_NEWS_FAIL';

function fetchNewsStart() {
    return {
        type: FETCH_NEWS_START
    }
}

function fetchNewsSuccess(data) {
    return {
        type: FETCH_NEWS_SUCCESS,
        data
    }
}

function fetchNewsFail(msg) {
    return {
        type: FETCH_NEWS_FAIL,
        msg
    }
}

export function fetchNews(url) {
    return dispatch => {
        dispatch(fetchNewsStart);

        fetch(url).then(response => {
            return response.json();
        }).then(data => dispatch(fetchNewsSuccess(data))).catch(err => dispatch(fetchNewsFail(err)));
    }
}
