
import {authHeader} from "../helpers/auth-header";
export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:5000/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '/app';
            }
            return user;
        });
}
function register(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    fetch(`http://localhost:5000/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '/app';
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
    window.location.reload();
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:5000/api/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
export {login, logout, register};