import React from 'react';
import {Checkbox, DatePicker, Form, Input} from 'antd';

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10, offset: 6 },
};

class Request extends React.Component {

    render() {
        return (
            <>
                <Form.Item
                    label="Collateral title"
                    name="collateralTitle"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Due date"
                    name="dueDate"
                    style={{textAlign: 'left'}}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Reqeusted collateral amount"
                    name="requestedCollateralAmount"
                >
                    <Input/>
                </Form.Item>

                <Form.Item name={'requestDescription'} label="Request description">
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item
                    style={{textAlign: 'left'}}
                    {...formTailLayout}>
                    <Checkbox >
                        I hereby consent to my personal data being processed by the Solidarity Collateral for the purposes of the application proceeding
                    </Checkbox>
                </Form.Item>

                <Form.Item
                    style={{textAlign: 'left'}}
                    {...formTailLayout}>
                    <Checkbox >
                        I have read Terms and Conditions
                    </Checkbox>
                </Form.Item>

                <Form.Item
                    style={{textAlign: 'left'}}
                    {...formTailLayout}>
                    <Checkbox >
                        I allow Solidarity Collateral to process my personal data for the marketing purposes
                    </Checkbox>
                </Form.Item>
            </>
        );
    }
}

export default Request;
