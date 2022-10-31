import request from './api'
import loginRequest from './loginService'

export const adminService = {
    register: (data) => request.post('superAdmin/signUp', data, {}),
    login: (data) => loginRequest.post('superAdmin/signIn', data, {}),
};

export const postCourse = {
    courses:(data)=>request.post('/admin/courseCreate',data,)
};







