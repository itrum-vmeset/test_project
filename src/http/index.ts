import axios from 'axios';

export const API_URL = `https://myshop-api.onrender.com/api`

// const $api = axios.create({
//     // withCredentials: true,
//     baseURL: API_URL
// })


// export default $api;

const $host = axios.create({
    baseURL: API_URL
})

const $authHost = axios.create({
    baseURL: API_URL
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
