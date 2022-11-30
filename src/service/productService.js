import axios from "axios";
import {notification} from "antd";
import {toast} from "react-toastify";
import ApiToken from "./loginService";
const token = localStorage.getItem('token')
const productReq = axios.create({
    baseURL: "https://educations-apis.herokuapp.com/",
    timeout: 8000,
    headers:{
        'Authorization':token
    }
})

// Config
const TOKEN_PAYLOAD_KEY = 'authorization';
const AUTH_TOKEN_TYPE = 'Bearer';

ApiToken.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem("token");
        if (access_token) {
            config.headers[TOKEN_PAYLOAD_KEY] = AUTH_TOKEN_TYPE + ' ' + access_token;
        }
        return config;
    },
    (error) => {
        // Do something with request error here
        toast.error({
            message: 'Error',
        });
        Promise.reject(error);
    }
);

productReq.interceptors.response.use(
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
        if (error.response.status === 409) {
            notificationParam.message = "Iltimos avval ro'yhatdan o'ting";
        }

        notification.error(notificationParam);
        return Promise.reject(error);
    }
);

export default productReq;
