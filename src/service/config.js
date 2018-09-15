import axios from 'axios'

export const http = axios.create ({
    baseURL: 'http://localhost:3535/api/',
});