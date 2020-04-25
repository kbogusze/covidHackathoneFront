import React from 'react';
import {Form, Input, Select} from 'antd';

class Company extends React.Component {

    render() {
        return (
            <>
                <Form.Item
                    label="Company name"
                    name="companyName"
                >
                    <Input
                    onChange={(event)=>{this.props.updateCompanyName(event.target.value);}}
                    />
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
                    <Input
                    onChange={(event)=>{this.props.updateNip(event.target.value);}}
                    />
                </Form.Item>

                <Form.Item
                    label="REGON"
                    name="regon"
                >
                    <Input
                    onChange={(event)=>{this.props.updateRegon(event.target.value);}}
                    />
                </Form.Item>
                <Form.Item
                    label="PESEL"
                    name="pesel"
                >
                    <Input
                    onChange={(event)=>{this.props.updatePesel(event.target.value);}}
                    />
                </Form.Item>

                <Form.Item
                    label="Company address"
                    name="companyAddress"
                >
                    <Input
                    onChange={(event)=>{this.props.updateCompanyAddress(event.target.value);}}
                    />
                </Form.Item>

                <Form.Item
                    label="Company phone"
                    name="companyPhone"
                >
                    <Input

                    />
                </Form.Item>

                <Form.Item
                    label="Company website"
                    name="companyWebsite"
                >
                    <Input

                    />
                </Form.Item>

                <Form.Item
                    label="Upload attachments"
                    name="attachments"
                >
                    <Input type="file" id="fileInput"
                
                    />
                </Form.Item>
            </>
        );
    }
}

export default Company;
