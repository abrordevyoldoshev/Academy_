import React, { useEffect, useRef, useState } from "react";
import { Card, Form, Input, notification, Select, Spin } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import GetNameUser from "../service/getNameUser";
import { GiPhotoCamera } from "react-icons/gi";
import TextArea from "antd/es/input/TextArea";
import { axiosCurses, getCourses } from "../service/authService";
import { toast } from "react-toastify";

const AddCourse = () => {
  const userName = useSelector((state) => state.name.names);
  const categoryProduct = useSelector((state) => state.category.product);
  const [error, setError] = useState();
  const navigate = useNavigate();
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  const [filePhoto, setFilePhoto] = useState(null);
  const [logoPhoto, setLogoPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [logoRenderPhoto, setLogoRenderPhoto] = useState([]);
  const [forms] = Form.useForm();
  const updateId = location.state

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

  const handleLogoPhoto = (e) => {
    setLogoPhoto(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setLogoRenderPhoto((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhoto = (source) => {
    return source.map((photo) => {
      return <img src={photo} className="images" alt="images" key={photo} />;
    });
  };

  const LogoRenderPhoto = (source) => {
    return source.map((photo) => {
      return <img src={photo} className="images" alt="images" key={photo} />;
    });
  };

  const onFinish = (values) => {
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      form.append(key, values[key]);
    });
    form.append("courseImg", filePhoto);
    form.append("courseLogo", logoPhoto);
    if (updateId) courseUpdate(form);
    else createCourse(form);
  };

  const courseGetOne = () => {
    getCourses.courseGet(updateId).then((res) => {});
  };

  useEffect(() => {
    courseGetOne();
  }, []);

  const createCourse = (form) => {
    axiosCurses
      .coursePost(form)
      .then((res) => {
        navigate("/admin/course");
        toast.success("success");
      })
      .catch((error) => setError(error.response.data))
      .catch(() => setLoading(false));
  };

  const courseUpdate = (form) => {
    setLoading(true);
    axiosCurses
      .courseUpdate(updateId, form)
      .then((res) => {
        navigate("/admin/course");
        toast.success("success");
      })
      .catch((error) => setError(error.response.data))
      .finally(() => setLoading(false));
  };

  const Admin = [];
  userName.map((r) => {
    if (r.userAdmin === true) Admin.push(r);
  });
  return (
    <>
      <GetNameUser />
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            font: "2rem",
          }}
        >
          <Spin />
        </div>
      ) : (
        <Card
          title={
            <button className="btn-row">
              <Link to="/admin/course">
                <i>
                  <HiArrowNarrowLeft />
                </i>
              </Link>
            </button>
          }
        >
          <Form
            form={forms}
            onFinish={onFinish}
            className="form-course-container"
            layout="vertical"
            colon={false}
          >
            <div className="form-content">
              <div className="right">
                <div className="img-container">
                  <div>
                    <label>
                      <span></span> Course img
                    </label>
                    <div className="file">
                      {renderPhoto(photos)}
                      <input
                        required
                        type="file"
                        className="img-file"
                        onChange={handleFile}
                      />
                      <i>
                        <GiPhotoCamera />
                      </i>
                    </div>
                  </div>
                  <div>
                    <label>
                      <span></span> Course logo img
                    </label>
                    <div className="file">
                      {LogoRenderPhoto(logoRenderPhoto)}
                      <input
                        required
                        type="file"
                        className="img-file"
                        onChange={handleLogoPhoto}
                      />
                      <i>
                        <GiPhotoCamera />
                      </i>
                    </div>
                  </div>
                </div>

                <Form.Item
                  required={true}
                  name="description"
                  label="Category description"
                >
                  <TextArea
                    placeholder="About the course, for example: This course is of the highest quality"
                    rows={8}
                    className="textarea"
                  />
                </Form.Item>
              </div>

              <div className="left">
                <Form.Item
                  label="Course Name"
                  name="name"
                  required={true}
                >
                  <Input placeholder="Enter the name" />
                </Form.Item>

                <Form.Item
                  required={true}
                  label="Course category"
                  name='catigory'
                >
                  <Select
                    placeholder="Select a category"
                    options={categoryProduct.map((province) => ({
                      label: province.title,
                      value: province.title,
                      key: province._id,
                    }))}
                  />
                </Form.Item>

                <Form.Item
                  required={true}
                  name="authorId"
                  label="Author name"
                >
                  <Select
                    placeholder="Select a username"
                    options={Admin.map((province) => ({
                      label: province.name,
                      value: province._id,
                      key: province.key,
                    }))}
                  />
                </Form.Item>
                <Form.Item
                  required={true}
                  name="price"
                  label="Course Price"
                >
                  <Input placeholder="Enter the price" />
                </Form.Item>
              </div>
            </div>

            <button className="  ant-btn  ant-btn-primary" type="submit">
              submit
            </button>
          </Form>
        </Card>
      )}
    </>
  );
};

export default AddCourse;
