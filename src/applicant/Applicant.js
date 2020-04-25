import React from 'react';

import {Steps, Button, message, Form} from 'antd';
import Account from './Account';
import Company from './Company';
import Request from './Request';

import './applicant.css';

const { Step } = Steps;

const steps = [
    {
        title: 'Account creation',
        content: Account,
    },
    {
        title: 'Company details',
        content: Company,
    },
    {
        title: 'Application request',
        content: Request,
    },
];

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class Applicant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        const CurrentContent = steps[current].content;

        return (
            <Form
                {...layout}
                name="applicantForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">
                    <CurrentContent/>
                </div>
                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                </div>
            </Form>
        );
    }
}

export default Applicant;