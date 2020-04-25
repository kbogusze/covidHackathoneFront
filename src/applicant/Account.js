import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Account = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Login"
                name="login"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Repeat password"
                name="password-repeat"
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Name"
                name="name"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Surname"
                name="surname"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
            >
                <Input />
            </Form.Item>
        </Form>
    );
};

export default Account;