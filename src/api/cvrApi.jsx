import axios from 'axios';

export const cvrApi = axios.create({
    baseURL:"http://13.59.111.106:3000/",
});
