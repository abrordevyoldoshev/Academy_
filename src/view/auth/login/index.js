import React, {useState} from "react";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import LoginForm from "../../../components/LoginForm";
import {adminService} from "../../../service/authService";
import {toast} from "react-toastify";
import {userData} from "../../../redux/reducer/userReducer";
import {useDispatch} from "react-redux";
import {Spin} from 'antd';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "Rustambek347@gmail.com", password: "Rustambek347",
        },
        onSubmit: (values) => {
            setLoading(true)
            adminService.login({...values}, {}).then((res) => {
                dispatch(userData(res))
                navigate('/admin')
                localStorage.setItem('token', res.token)
                toast.success('success')
            })
                .catch((error) => setError(error.response.data))
                .finally(() => setLoading(false))
        },

    });

    return (
        <section className="container-reg">
            <div className="reg-content">
                    <LoginForm formik={formik} error={error} loading={loading} />
            </div>
        </section>);
};
export default Register;
