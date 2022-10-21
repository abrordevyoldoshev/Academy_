import React from "react";
import {Outlet} from "react-router-dom";
import DashboardMenu from "../components/admin/Menu";
import Header from "../components/admin/Header";

const AdminLayout = () => {
    return (
        <div>

            <div className='flex-menu-dashboard'>
                <DashboardMenu/>
            <div className='colm-menu'>
            <Header/>
            <div className='pages'>
            <Outlet/>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AdminLayout;
