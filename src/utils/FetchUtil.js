var FetchUtil = {};

/**
 * GET
 */
FetchUtil.get = function (url, params, headers) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }

    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            // headers: Object.assign({}, headers, {
            //     'Content-Type': 'application/json;charset=UTF-8'
            // }),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({ ok: false, status: response.status, msg: response.statusText })
            }
        }).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject({ status: -1 });
        })
    })
}


/**
 * POST
 * TODO: It's a temperary solution for the api.
 * TODO: Because of the backend api is not strict, it's not strict GET/POST interface.
 */
FetchUtil.post = function (url, params, headers) {
    let temp = [];
    if (params !== undefined) {
        Object.keys(params).forEach(key => temp.push(key + '=' + params[key]))
    }
    const data = temp.join("&");

    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            // headers: Object.assign({}, headers, {
            //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            // }),
            body: data,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({ ok: false, status: response.status, msg: response.statusText })
            }
        }).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject({ status: -1 });
        })
    })
}

export default FetchUtil