import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import GetNameUser from "../service/getNameUser";
import { useFormik } from "formik";
import { axiosCurses } from "../service/authService";
import { toast } from "react-toastify";
import {GiPhotoCamera} from "react-icons/gi";

const AddCategory = () => {
  const userName = useSelector((state) => state.name.names);
  const [filePhoto, setFilePhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleFile = (e) => {
    setFilePhoto(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPhotos((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhoto = (source) => {
    return source.map((photo) => {
      return <img src={photo} className='images' alt="images" key={photo} />;
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      keywords: "",
      categoryId: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      const form = new FormData();
      Object.keys(values).forEach((key) => {
        form.append(key, values[key]);
      });

      form.append("categoryImage", filePhoto);
      axiosCurses
        .categoryPost(form)
        .then((res) => {
          console.log(res);
          toast.success("success");
          navigate('/admin/category')

        })
        .catch((error) => setError(error.response.data))
        .finally(() => setLoading(false));
    },
  });

  return (
    <div>
      <GetNameUser />
      <Card
        title={
          <button className="btn-row">
            <Link to="/admin/category">
              <i>
              <HiArrowNarrowLeft />
              </i>
            </Link>
          </button>
        }
      >
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <div className="form-content">
            <div className="left">
              <label>
                <span></span> Category title
              </label>
              <input
                required
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="title "
              />
              <label>
                <span></span> Category keywords
              </label>
              <input
                required
                type="text"
                placeholder="keywords"
                name="keywords"
                value={formik.values.keywords}
                onChange={formik.handleChange}
              />
              <label>
                <span></span> Category description{" "}
              </label>
              <textarea
                required
                placeholder="About the course, for example: This course is of the highest quality"
                rows={8}
                className="textarea"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />

            </div>
            <div className="right">

              <label><span></span> Category User</label>
              <select
                  name="categoryId"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
              >
                {userName.map((data) => {
                  return (
                      <option key={data._id} value={data._id}>
                        {data.name}
                      </option>
                  );
                })}
              </select>
              <label>
                <span></span> Category img
              </label>
              <div className="file">

                  {renderPhoto(photos)}

                <input type="file" className='img-file'  onChange={handleFile} />
                <i><GiPhotoCamera/></i>
              </div>

            </div>
          </div>
          <button className="ant-btn  ant-btn-primary" type="submit">
            submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddCategory;


