import React from 'react';
import {Link} from "react-router-dom";
import {Button, Result} from "antd";

const SuccessReg = () => {
    return (
        <div className='container-success'>
            <div className='content-succ'>
                <Result
                    status="success"
                    title="Successfully"
                    subTitle="Congratulations, you're happy"
                    extra={[

                        <Button><Link to='/'>Ok</Link></Button>,
                    ]}
                />


            </div>
        </div>
    );
};

export default SuccessReg;