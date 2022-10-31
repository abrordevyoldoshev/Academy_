import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const LoginForm = (props) => {
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
    <form className="reg-form" onSubmit={props.formik.handleSubmit}>
        <h1>Agon Academia</h1>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="enter email"
        onChange={props.formik.handleChange}
        value={props.formik.values.email}
        required
      />
      <label htmlFor="password">Password</label>
      <div className="password-see">
        <input
          id="password"
          name="password"
          type={types}
          placeholder="enter password"
          onChange={props.formik.handleChange}
          value={props.formik.values.password}
          required
        />
        <span onClick={handleToggle}>{icon}</span>
      </div>
      <p className="err-para">{props.error.error}</p>
      <button className="btn-ant ant-btn-primary " type="submit">
        Login
      </button>
      <p>
        Don't have an account yet ? <Link to="reg">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
