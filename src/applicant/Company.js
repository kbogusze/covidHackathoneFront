import React from 'react';
import {Form, Input, Select} from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BackendConfiguration from "../BackendConfiguration";

const categoriesOptions = [
    'Restaurant',
    'Bar',
    'Grocery',
    'Store',
    'Hairdresser',
    'Beautician',
    'Newsstand',
];

class Company extends React.Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {fileName: ''};
    }

    handleChange (info) {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        console.log("File object is: " + file);
        console.log("Response is: " + file.response);
        file.url = file.response.url;
      }
      return file;
    });

    //this.setState({ fileList });
    }

    handleUploadChange = (file) => {
        this.setState({ fileName: file.name });
    }

    render() {
          const props = {
          name: 'content',
          action: BackendConfiguration.serverAddress + '/documents',
          data: {
            dealID: "ddd",
            title: this.state.fileName
          },
          headers: {
            authorization: "Basic T1JGSTpPUkZJ"
          },
          onChange(info) {
            console.log("Info onChange triggered!");
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              console.log("Info name: " + info.file.response);
              localStorage.setItem('pictureId', info.file.response);
              console.log("pictureId retrieved from local storage: " + localStorage.getItem('pictureId'));
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
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Activity category"
                    name="category"
                >
                    <Select>
                        {
                            categoriesOptions.map((category, index) => (
                                <Select.Option key={index} value={category}>{category}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    label="NIP"
                    name="nip"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="REGON"
                    name="regon"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="PESEL"
                    name="pesel"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Company address"
                    name="companyAddress"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Company phone"
                    name="companyPhone"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Company website"
                    name="companyWebsite"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Upload attachments"
                    name="uploadAttachments"
                    style={{textAlign: 'left'}}
                >
                    <Upload {...props} beforeUpload={this.handleUploadChange}>
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
