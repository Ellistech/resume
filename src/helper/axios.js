import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:1337/api/",

    // headers: {

    // }
});

export default instance;
