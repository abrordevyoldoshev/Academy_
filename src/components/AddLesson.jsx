import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { axiosCurses } from "../service/authService";
import { toast } from "react-toastify";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import axios from "axios";

const AddLesson = () => {
  const allCourses = useSelector((state) => state.course.container);
  const allUserName = useSelector((state) => state.name.names);
  const [lessonVideo, setLessonVideo] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const form = new FormData();
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      courseId: "",
      adminId: "",
      description: "",
      lessonVideo:"",
    },

    onSubmit: (values) => {
      setLoading(true);
      console.log(values)

      axiosCurses
        .lessonPost(values)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => setError(error.response.data))
        .finally(() => setLoading(false));

    },
  });
  console.log(error);
  return (
    <div>
      <Card
        title={
          <button className="btn-row">
            <Link to="/admin/lesson">
              <i>
                <HiArrowNarrowLeft />
              </i>
            </Link>
          </button>
        }
      >
        <form onSubmit={formik.handleSubmit}>
          <input
            required
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Name"
          />
          <select
            name="courseId"
            value={formik.values.courseId}
            onChange={formik.handleChange}
          >
            {allCourses.map((data) => {
              return (
                <option key={data._id} value={data._id}>
                  {data.name}
                </option>
              );
            })}
          </select>
          <select
            name="adminId"
            value={formik.values.adminId}
            onChange={formik.handleChange}
          >
            {allUserName.map((data) => {
              return (
                <option key={data._id} value={data._id}>
                  {data.name}
                </option>
              );
            })}
          </select>

          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            rows={8}
          />
          <input
            type="file"
            name='lessonVideo'
            onChange={(event)=>formik.setFieldValue('lessonVideo',event.target.files[0])}
          />
          <button type="submit">submit</button>
        </form>
      </Card>
    </div>
  );
};

export default AddLesson;
