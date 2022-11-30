import React, { useEffect, useState } from "react";
import { Button, Card, Input, Select, Space, Spin, Switch, Table } from "antd";
import { getCourses } from "../../service/authService";
import { AiFillEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import CategoryDelete from "../../components/categoryDelete";
import { useDispatch } from "react-redux";
import { CategoryCon } from "../../redux/reducer/categorySlice";

const Category = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const s = data.map((r) => {
    return r.isActive;
  });
  const [isSubscribed, setIsSubscribed] = useState(s);
  console.log(isSubscribed);
  const handleChange = (id) => {
    setIsSubscribed((current) => !current);
  };

  const goEdit = (id) => {};
  const columns = [
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: (row, item) => (
        <img
          src={item.categoryImage}
          alt="image"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: () => new Date().getFullYear(),
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (item, row) => (
        <Switch size="small" onChange={() => handleChange(row._id)} />
      ),
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
          <CategoryDelete deleteId={row._id} fetchData={fetchData} />
        </Space>
      ),
    },
  ];
  const fetchData = () => {
    setLoading(true);
    getCourses
      .getCategoryAll(10)
      .then((res) => {
        setData(res);
        console.log(res);
        dispatch(CategoryCon(res));
      })
      .catch((error) => setError(error.response.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
          title={<h3 className="title-category">Category</h3>}
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
                  to="/admin/category/add"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IoIosAddCircleOutline className="icon-c" />
                  New Category
                </Link>
              </Button>
            </div>
          }
        >
          <Table
            expandable={{
              expandedRowRender: (record) => (
                <p
                  style={{
                    margin: 0,
                    color: "#000",
                  }}
                >
                  {record.description}
                </p>
              ),
            }}
            className="table-course"
            columns={columns}
            dataSource={data}
            rowKey={(row) => row._id}
          />
        </Card>
      )}
    </>
  );
};

export default Category;
