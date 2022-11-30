import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { axiosCurses } from "../service/authService";
import axios from "axios";
const { confirm } = Modal;
const token = localStorage.getItem('token')
const URL  = 'https://educations-apis.herokuapp.com/superAdmin/deletedCategry/'
const CategoryDelete = (props) => {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const showDeleteConfirm = (data) => {


    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete( `${URL}` +JSON.stringify(data),
            { headers: { 'Authorization':`${token}` } }
        ).then((res)=>{
          console.log(res)
        })
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  console.log(error);
  return (
    <Space wrap>
      <Button
        onClick={() => showDeleteConfirm(props.deleteId)}
        className="ant-btn-danger"
      >
        <RiDeleteBinLine />
      </Button>
    </Space>
  );
};

export default CategoryDelete;
