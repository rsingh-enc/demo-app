import axios from 'axios';
/**
 * Create instance of Axios.we can use this instance over the app
 */
const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
/**
 * Intercept the response.
 */
client.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API response Error:', error);
        return Promise.reject(error);
    }
);
/**
 * Intercept the request.
 */
client.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.error('API request Error:', error);
        return Promise.reject(error);
    }
);

export default client;
