import axios from "axios";
import {notification} from "antd";

const service = axios.create({
    baseURL: "https://westco-task.herokuapp.com/",
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

