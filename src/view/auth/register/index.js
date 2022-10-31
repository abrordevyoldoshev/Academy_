import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {adminService } from "../../../service/authService";
import { useDispatch } from "react-redux";
import { userData } from "../../../redux/reducer/userReducer";
import { toast } from "react-toastify";
import RegForm from "../../../components/RegForm";
import { Spin } from "antd";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      secretInfo: "",
    },
    onSubmit: (values) => {
      setLoading(true);
        adminService
          .register(values)
          .then((res) => {
            dispatch(userData(res));
            navigate("/");
            toast.success("Congratulations, you're happy");
          })
          .catch((err) => setErr(err.response.data))
          .finally(() => setLoading(false));
    },
      validate: () => {

      }
  });

  return (
    <section className="container-reg">
      <div className="reg-content">
        {loading ? (
          <div className="example">
            <Spin />
          </div>
        ) : (
          <RegForm
            formik={formik}
            err={err}
          />
        )}
      </div>
    </section>
  );
};

export default Register;
