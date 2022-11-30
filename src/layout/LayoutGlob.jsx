import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Menu from '../components/Menu'
import Header from '../components/Header'
const LayoutGlob = () => {
    return (
        <Layout  className='container-layout' >
          <Menu />
            <Layout style={{width:'100%'}} className="site-layout">
                <Header/>
                <div className="site-layout-background">
                  <Outlet/>
                </div>
            </Layout>
        </Layout>
    );
};
export default LayoutGlob;