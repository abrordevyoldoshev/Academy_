import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegForm = ({ formik, err }) => {
  const [types, setType] = useState("password");
  const [icon, setIcon] = useState(<AiOutlineEyeInvisible />);

  /**
   * bu fuction passwordni raqamlarini korsatib korsatmaslik uchun
   */
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
      <h1>Register</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="enter name"
        required
      />
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
        <label htmlFor="email">Secret Info</label>
        <input

            name="secretInfo"
            type="text"
            placeholder="enter info"
            onChange={formik.handleChange}
            value={formik.values.secretInfo}
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
      <p style={{ color: "red" }}>{err.error}</p>

      <button className="btn-ant ant-btn-primary" type="submit">
        Submit
      </button>
      <p>
        Don't have an account yet ? <Link to="/">Sign Up</Link>
      </p>
    </form>
  );
};

export default RegForm;
