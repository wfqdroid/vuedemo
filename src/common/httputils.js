import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 60000,
});

//axios 请求拦截器
instance.interceptors.request.use(config => {
    config.headers['iv-user'] = 'WFQ'
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response.data
}, function (error) {
    return Promise.reject(error);
});
export default instance
