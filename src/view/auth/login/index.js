import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputRegister from "../../../components/InputRegister";
import { Col, Row } from "antd";
import "../../../assets/sass/pages/register.scss";
import axios from "axios";
import authService from "../../../service/authService";
import { Link } from "react-router-dom";
const Register = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
  });

  const handleSubmit = (values) => {

      console.log(values)
    axios
      .post("https://westco-task.herokuapp.com/signIn", { ...values })
      .then((res) => {
        console.log(res.data);
        console.log('token' ,res.data.token);
      });
  };

  return (
    <section className="container">
      <div className="row-reg">
        <div className="reg-form-container">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(formik) => (
              <Form className="form">
                <h1>Sign In</h1>
                <InputRegister lable="Email" name="email" type="email" />
                <InputRegister
                  lable="Password"
                  name="password"
                  type="password"
                />
                <button className="ant-btn  ant-btn-primary" type="submit">
                  Sign Up
                </button>
                <p>
                  Don't have an account yet? <Link to="reg">Sign Up</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Register;
