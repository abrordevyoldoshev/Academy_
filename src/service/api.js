import axios from "axios";
import {notification} from "antd";

const service = axios.create({
    baseURL: process.env.React_App_Url,
    timeout:8000,

});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        notification.error({
            message: "Error",
        });
        Promise.reject(error).then((r) => error);
    }
);

service.interceptors.response.use(
    (response) => {
        return response.data;
    },

    (error) => {
        let notificationParam = {
            message: error.response.data.statusCode
        };
        if (error.response.status === 403 || error.response.status === 401) {
            notificationParam.message = 'Error'
        }
        if (error.response.status === 422) {
            notificationParam.message = 'there is user in the table'
        }
        if (error.response.status === 500) {
            notificationParam.message = 'Time Out';
        }
        
        notification.error(notificationParam);
        return Promise.reject(error);
    }
);

export default service;
