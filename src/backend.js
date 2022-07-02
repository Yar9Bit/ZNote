export function get(path) {
    return fetch(`/api/${path}`).then(r => r.json())
}

export function post(path, data) {
    return fetch(`/api/${path}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data),
    }).then(r => r.json())
}

export function put(path, data) {
    return fetch(`/api/${path}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data),
    }).then(r => r.json())
}

export function delete_(path) {
    return fetch(`/api/${path}`, {method: 'DELETE'});
}