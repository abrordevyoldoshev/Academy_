import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import {Layout, Menu} from 'antd';
import routesData from "../config/Sidebar";

const {Sider} = Layout;
const App = () => {
    const toggleStore = useSelector(state => state.toggle.toggle, shallowEqual);
    return (<Sider trigger={null} collapsible collapsed={toggleStore.payload} style={{width: '400'}}
                   width={270}
    >
        <div className='logo'>
            <Menu
                className='logo-menu'
                items={[{
                    key: 0, label: 'Admin', icon: <MdOutlineAdminPanelSettings/>,
                }]}
            >
            </Menu>
        </div>
        <Menu
            theme="dark"
            mode="vertical"
            items={routesData}
        >
        </Menu>
    </Sider>);
};
export default App;
