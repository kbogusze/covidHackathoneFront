import React from 'react';
import {Form, Input, Select} from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

class Company extends React.Component {

    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Company name"
                    name="companyName"
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Activity category">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="NIP"
                    name="nip"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="REGON"
                    name="regon"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="PESEL"
                    name="pesel"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Company address"
                    name="companyAddress"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Company phone"
                    name="companyPhone"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Company website"
                    name="companyWebsite"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Upload attachments"
                    name="attachments"
                >
                    <Input />
                </Form.Item>
            </Form>
        );
    }
}

export default Company;