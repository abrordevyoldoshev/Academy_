import axios from 'axios';
import {notification} from 'antd';
const token = localStorage.getItem('token')
const getRequest = axios.create({
    baseURL: "https://educations-apis.herokuapp.com/",
    timeout: 8000,
    headers:{
        'Authorization':token
    }
    });


// API Request interceptor
getRequest.interceptors.request.use(
    (config) => {
        return config;
    },

    (error) => {
        // Do something with request error here
        notification.error({
            message: 'Error',
        });
        Promise.reject(error);
    }
);

getRequest.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        let notificationParam = {
            message: error.response.data.statusCode,
        };

        // Remove token and redirect
        if (error.response.status === 403 || error.response.status === 401) {
            notificationParam.message = 'Error'
        }

        if (error.response.status === 508) {
            notificationParam.message = 'Time Out';
        }

        notification.error(notificationParam);

        return Promise.reject(error);
    }
);

export default getRequest;
