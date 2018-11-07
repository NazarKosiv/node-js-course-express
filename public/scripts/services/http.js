import axios from 'axios';

export class HttpService {
    static getUsers(url) {
        return axios.get(url)
            .then(res => res.data);
    }
}

module.exports = HttpService;
