import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button, Spin } from "antd";
const LoginForm = ({ formik, error, loading }) => {
  const [types, setType] = useState("password");
  const [icon, setIcon] = useState(<AiOutlineEyeInvisible />);

  const handleToggle = () => {
    if (types === "password") {
      setIcon(<AiOutlineEye />);
      setType("text");
    } else {
      setIcon(<AiOutlineEyeInvisible />);
      setType("password");
    }
  };
  return (
    <form className="reg-form" onSubmit={formik.handleSubmit}>
      <h1>Agon Academy</h1>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="enter email"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
      />
      <label htmlFor="password">Password</label>
      <div className="password-see">
        <input
          id="password"
          name="password"
          type={types}
          placeholder="enter password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <span onClick={handleToggle}>{icon}</span>
      </div>
      <p className="err-para">{error.error}</p>
      {loading ? (
        <Button
          className="btn-ant ant-btn-primary "
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <Spin />
          Login
        </Button>
      ) : (
        <Button className="btn-ant ant-btn-primary " htmlType="submit">
          Login
        </Button>
      )}

      <p>
        Don't have an account yet ? <Link to="reg">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
