export const DO_REQUET_NEWS = 'DO_REQUEST_NEWS';
export const DONE_REQUEST_NEWS = 'DONW_REQUEST_NEWS';

function doRequestNewsAction(params) {
    return {
        type: DO_REQUET_NEWS,
        params
    }
}

function doneRequestNewsAction(data) {
    return {
        type: DONE_REQUEST_NEWS,
        data
    }
}

//import { doRequestBBCNews } from '../api/news'

export async function doFetchNews() {
    return dispatch => {
        dispatch(doRequestNewsAction());
        //const result = await doRequestBBCNews();
        //dispatch(doneRequestNewsAction(result));
    }
}
