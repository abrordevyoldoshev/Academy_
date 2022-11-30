import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import {RiDeleteBinLine} from 'react-icons/ri'
import React from "react";
import {axiosCurses} from "../service/authService";
const { confirm } = Modal;

const DeleteModal = (props) => {
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axiosCurses.courseDelete(id,id).then((res) => {
          console.log(res);
          props.fetchProduct();
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <Space wrap>
      <Button onClick={() => showDeleteConfirm(props.deleteId)} className='ant-btn-danger'>
         <RiDeleteBinLine/>
      </Button>
    </Space>
  );
};

export default DeleteModal;
