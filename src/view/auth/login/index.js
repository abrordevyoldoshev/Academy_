import React, {useState} from "react";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import LoginForm from "../../../components/LoginForm";
import {adminService} from "../../../service/authService";
import {toast} from "react-toastify";
import {userData} from "../../../redux/reducer/userReducer";
import {useDispatch} from "react-redux";
import { Spin} from 'antd';

const Register = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch  = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "", password: "",
        },
        onSubmit: (values) => {
            adminService.login({...values},{}).then((res) => {
                dispatch(userData(res))
                console.log(res)
                navigate('/admin')
                toast.success('success')
            })
                .catch((error) => setError(error.response.data))
                .finally(() => setLoading(false))
        },




    });

    return (
        <section className="container-reg">
            <div className="reg-content">
                {loading ? (<div className="example">
                        <Spin/>
                    </div>) : (
                    <LoginForm formik={formik} error={error}/>)}
            </div>
        </section>);
};
export default Register;
