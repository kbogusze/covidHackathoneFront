import React from 'react';

import { Form, Input } from 'antd';

const Account = (props) => {
    return (
        <>
            <Form.Item
                label="Login"
                name="login"
            >
                <Input
                onChange={(event)=>{props.updateLogin(event.target.value);}}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
            >
                <Input.Password
                onChange={(event)=>{props.updatePassword(event.target.value);}}
                />
            </Form.Item>

            <Form.Item
                label="Repeat password"
                name="password-repeat"
            >
                <Input.Password
                onChange={(event)=>{props.updatePasswordConfirmation(event.target.value);}}
                />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
            >
                <Input
                onChange={(event)=>{props.updateEmail(event.target.value);}}
                />
            </Form.Item>

            <Form.Item
                label="Name"
                name="name"
            >
                <Input
                onChange={(event)=>{props.updateName(event.target.value);}}
                />
            </Form.Item>
            <Form.Item
                label="Surname"
                name="surname"
            >
                <Input
                onChange={(event)=>{props.updateSurname(event.target.value);}}
                />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
            >
                <Input
                onChange={(event)=>{props.updateAddress(event.target.value);}}
                />
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
            >
                <Input
                onChange={(event)=>{props.updatePhone(event.target.value);}}
                />
            </Form.Item>
        </>
    );
};

export default Account;
