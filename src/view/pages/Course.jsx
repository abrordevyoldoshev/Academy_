import React, { useEffect, useState } from "react";
import Card from "antd/es/card/Card";
import { Button, Input, Select, Space, Spin, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import DeleteModal from "../../components/DeleteModalCourse";
import { getCourses } from "../../service/authService";
import { IoIosAddCircleOutline } from "react-icons/io";
import {useDispatch} from "react-redux";
import {addCourseRedux} from "../../redux/reducer/allCourseSlice";

const Course = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const num = 10;

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 6,
    },
  });

  const goEdit = (id) => {
    navigate("/admin/course/add", { state: id });
  };

  const columns = [
    {
      title: "Img",
      dataIndex: "courseImg",
      key: "courseImg",

      render: (courseImg) => (
        <img
          src={courseImg}
          alt="image"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            backgroundSize: "cover",
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Course Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (item, row) => (
        <Space>
          <Button className="ant-btn-primary" onClick={() => goEdit(row._id)}>
            <AiFillEdit />
          </Button>
          <DeleteModal deleteId={row._id} fetchProduct={fetchProduct} />
        </Space>
      ),
    },
  ];

  const fetchProduct = () => {
    setLoading(true);
    getCourses
      .courseGet(num)
      .then((res) => {
        setData(res.products);
        dispatch(addCourseRedux(res.products))
        console.log(res)
      })
      .catch((err) => setErr(err.response.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProduct();
  }, [tableParams]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <div>
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
          title={<h4 className="create-title">Create Course</h4>}
          extra={
            <div className="search-course">
              <Input placeholder="Search Name..." />
              <Select
                className="search-cat"
                style={{ width: "100%", height: "5vh" }}
                showSearch
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.name ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.name ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.name ?? "").toLowerCase())
                }
              />

              <Button className="btn-cate" type={"primary"}>
                <Link
                  to="/admin/course/add"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IoIosAddCircleOutline className="icon-c" />
                  New Course
                </Link>
              </Button>
            </div>
          }
        >
          <div>
            <Table
              className="table-course"
              columns={columns}
              dataSource={data}
              rowKey={(row) => row._id}
              pagination={tableParams.pagination}
              onChange={handleTableChange}
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default Course;
