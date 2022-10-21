import React from 'react';
import {Outlet} from 'react-router-dom'
const LayoutReg = () => {
    return (
        <div>

            <Outlet/>
        </div>
    );
};

export default LayoutReg;