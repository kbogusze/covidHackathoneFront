import React from 'react';
import {Form, Input, Select} from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BackendConfiguration from "../BackendConfiguration";


class Company extends React.Component {

    render() {

          const props = {
          name: 'content',
          action: BackendConfiguration.serverAddress + '/documents',
          data: {
            dealID: "ddd",
            title: "myPicture.png"
          },
          headers: {
            authorization: "Basic T1JGSTpPUkZJ"
          },
          onChange(info) {
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
        };

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
                <Upload {...props}>
                  <Button>
                    <UploadOutlined /> Click to Upload
                  </Button>
                </Upload>
                </Form.Item>
            </>
        );
    }
}

export default Company;
