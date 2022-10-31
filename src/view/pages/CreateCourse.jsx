import React from 'react';
import Card from "antd/es/card/Card";
import {Button} from "antd";
import Table from "../../components/Table";
import CreateModal from "../../components/CreateModal";

const CreateCourse = () => {
    return (
        <div>
            <Card
                title="Create Course"
                extra={<CreateModal/>}
                style={{
                    width: '100%',
                    height:'100%'
                }}
            >
        <Table/>
            </Card>

        </div>
    );
};

export default CreateCourse;