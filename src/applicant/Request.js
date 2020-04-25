import React from 'react';
import {Checkbox, DatePicker, Form, Input, Select} from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const formTailLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 6, offset: 4 },
};

class Request extends React.Component {

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
                    label="Collateral title"
                    name="collateralTitle"
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Due date">
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Reqeusted collateral amount"
                    name="amount"
                >
                    <Input />
                </Form.Item>

                <Form.Item name={'description'} label="Request description">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item>
                    <Checkbox >
                        I hereby consent to my personal data being processed by the Solidarity Collateral for the purposes of the application proceeding
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Checkbox >
                        I have read Terms and Conditions
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Checkbox >
                        I allow Solidarity Collateral to process my personal data for the marketing purposes
                    </Checkbox>
                </Form.Item>
            </Form>
        );
    }
}

export default Request;