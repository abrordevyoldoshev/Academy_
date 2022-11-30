import request from './api'
import loginRequest from './loginService'
import productReq from './productService'
import getRequest from "./get";
export const adminService = {
    register: (data) => request.post('superAdmin/signUp', data, {}),
    login: (data) => loginRequest.post('superAdmin/signIn', data, {}),
};

export const axiosCurses = {
    categoryPost:(data)=>productReq.post('/superAdmin/createCategry/',data,{}),
    categoryDelete:(id,data)=>productReq.delete(`/superAdmin/deletedCategry/${id}`,data),
    coursePost:(data)=>productReq.post('/admin/courseCreate/', data,{}),
    courseUpdate:(id,data)=>productReq.put(`/admin/courseUpdate/${id}`,data),
    courseDelete:(data)=>productReq.delete(`/admin/courseDelete/${data}`,{}),
    lessonPost:(data)=>productReq.post('/admin/lessson/create', data,{}),
};


export const getCourses ={
    courseGet:(id)=>getRequest.get(`/?keyword=&category=&pageLimt=${id}`),
    getAllUsers:()=>getRequest.get(`/superAdmin/getAllUsers`),
    getCategoryAll:()=>getRequest.get('/superAdmin/getCategrys'),
    courseOne:(id)=>getRequest.get(`/user/getCourseOne/${id}`)
}







