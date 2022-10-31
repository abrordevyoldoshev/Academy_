import React, {useState} from 'react';
import {Button, Form, Input, Modal} from 'antd';
import Upload from "antd/es/upload/Upload";
import ImgCrop from "antd-img-crop";
import {postCourse} from "../service/authService";

const CreateModal = () => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [err, setErr] = useState('')

    /*
    *  ----------- Imag Upload ------------
    */

    const onChange = ({fileList: newFileList}) => {
        setFileList(newFileList);
    };

    /*
     bu code imgni kormoqchi bolganlar uchun boshqa pagega olib otadi
    */
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    /*
    -------- Input value container  ----------
    */

    const onFinish = (value) => {
        postCourse.courses({...value, courseImg: fileList}).then((res) => {
            console.log(res.data)
        }).catch((err) => setErr(err.response.data))
    }

    console.log('error', err)

    return (<>
        <Button type="primary" onClick={() => setOpen(true)}>
            New Course
        </Button>
        <Modal
            title='Add Course'
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800}
            footer={[]}
        >
            <Form
                layout='vertical'
                form={form}
                onFinish={onFinish}

            >
                <Form.Item
                    label="Author"
                    name="authorId"
                    rules={[{
                        required: true, message: 'Please input your username!',
                    }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{
                        required: true, message: 'Please input your username!',
                    }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{
                        required: true, message: 'Please input your username!',
                    }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{
                        required: true, message: 'Please input your username!',
                    }]}
                >
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item
                    label='Img Up'

                >
                    <ImgCrop rotate>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                </Form.Item>

                <Button type='primary' htmlType='submit'>Add</Button>
            </Form>
        </Modal>
    </>);
};

export default CreateModal;