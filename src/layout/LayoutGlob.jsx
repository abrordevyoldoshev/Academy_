import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Menu from '../components/Menu'
import Header from '../components/Header'
const { Content } = Layout;
const LayoutGlob = () => {
    return (
        <Layout  className='container-layout' >
          <Menu />
            <Layout style={{width:'100%'}} className="site-layout">
                <Header/>
                <Content
                    className="site-layout-background"
                >
                  <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutGlob;