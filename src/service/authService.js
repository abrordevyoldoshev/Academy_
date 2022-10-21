import request from './api'
const authService = {
    register: (data) => request.post('signUp', data),
}

export default authService;