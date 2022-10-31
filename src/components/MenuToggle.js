import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {addToToggle} from "../redux/reducer/toggleSlice";
const MenuToggle = () => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const handleToggle = () => setCollapsed(!collapsed);
    useEffect(() => {
        dispatch(addToToggle(collapsed));
    }, [collapsed]);
    return (
        <i onClick={handleToggle}  >
            {collapsed ? <MenuUnfoldOutlined className='icon' /> : <MenuFoldOutlined className='icon' />}
        </i>
    );
};

export default MenuToggle;
