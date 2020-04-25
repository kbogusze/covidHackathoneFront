import React from 'react';
import {Checkbox, DatePicker, Form, Input} from 'antd';

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class Request extends React.Component {

    render() {
        return (
            <>
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

                <Form.Item  {...formTailLayout}>
                    <Checkbox >
                        I hereby consent to my personal data being processed by the Solidarity Collateral for the purposes of the application proceeding
                    </Checkbox>
                </Form.Item>

                <Form.Item  {...formTailLayout}>
                    <Checkbox >
                        I have read Terms and Conditions
                    </Checkbox>
                </Form.Item>

                <Form.Item  {...formTailLayout}>
                    <Checkbox >
                        I allow Solidarity Collateral to process my personal data for the marketing purposes
                    </Checkbox>
                </Form.Item>
            </>
        );
    }
}

export default Request;