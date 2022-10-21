import React, {useState} from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import InputRegister from "../../../components/InputRegister";
import authService from "../../../service/authService";
import {notification} from "antd";

const Register = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(false)

    const validate = Yup.object({
        name: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
        email: Yup.string().email("Email is invalid").required("Required"),
        password: Yup.string()
            .required("Password is required"),
    });

    const handleSubmit = (values) => {
        setLoading(true)
        authService.register(values)
            .then((res) => {
                console.log("res", res)
                notification.success(res?.msg)
                navigate('/successreg')
            })
            .catch((err) => setErr(err.response.data))
            .finally(() => setLoading(false));
    };
    console.log("err", err)

    return (
        <section className="container">
            <div className="row-reg">
                <div className="reg-form-container">
                    {
                        loading ? (
                            <h1>Loading....</h1>
                        ) : (
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    password: "",
                                }}
                                validationSchema={validate}
                                onSubmit={(values) => handleSubmit(values)}
                            >
                                {(formik) => (
                                    <Form className="form">
                                        <h1>Sign up</h1>
                                        <InputRegister lable="First Name" name="name" type="text"/>
                                        <InputRegister lable="Email" name="email" type="email"/>
                                        <InputRegister
                                            lable="Password"
                                            name="password"
                                            type="password"
                                        />
                                        {err ? err.error : ""}
                                        <button className="ant-btn  ant-btn-primary" type="submit">
                                            Sign Up
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Register;
