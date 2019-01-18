import config from '../../../config';

export const DO_REQUET_NEWS = 'DO_REQUEST_NEWS';
export const DONE_REQUEST_NEWS = 'DONW_REQUEST_NEWS';

export const API_BBC_NEWS = `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${config.api_key}`;
export const API_ABC_NEWS_AU = `https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=${config.api_key}`;
export const HACKER_NEWS = `https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=${config.api_key}`;

function doRequestNewsAction(params) {
    return {
        type: DO_REQUET_NEWS,
        params
    }
}

function doneRequestNewsAction(result) {
    return {
        type: DONE_REQUEST_NEWS,
        result
    }
}

export function doFetchNews() {
    return dispatch => {
        dispatch(doRequestNewsAction());

        fetch(API_BBC_NEWS).then(response => {
            if (response && response.ok) {
                return response.json();
            }
        }).then(response => { console.log(response);
            dispatch(doneRequestNewsAction(response));
        }).catch(err => {
            dispatch(doneRequestNewsAction(err));
        });
    }
}

