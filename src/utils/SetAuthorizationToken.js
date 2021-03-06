import axios from 'axios';

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
}
export function setAxiosLanguage(language) {
    axios.defaults.headers.common['Accept-Language'] = language;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
}