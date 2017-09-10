export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(url) {
    return {
        type: FETCH_NEWS,
        payload: () => {
            fetch(url).then(response => {
                return response.json();
            })
        }
    }
}
