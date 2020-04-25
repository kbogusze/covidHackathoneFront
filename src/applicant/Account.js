import React from 'react';

import { Form, Input } from 'antd';

const Account = () => {
    return (
        <>
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
        </>
    );
};

export default Account;