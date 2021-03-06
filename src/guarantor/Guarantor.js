import React from 'react';

import {Steps, Button, message, Form} from 'antd';
import Account from '../applicant/Account';

const { Step } = Steps;

const steps = [
    {
        title: 'Account creation',
        content: Account,
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


class Guarantor extends React.Component {
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

    handleInputChange = (changedFields) => {
        const changedField = changedFields[0];

        if (changedField) {
            const name = changedField.name[0];
            const value = changedField.value;

            this.setState({
                [name]: value
            });
        }
    }

    render() {
        const { current } = this.state;
        const CurrentContent = steps[current].content;

        return (
            <Form
                {...layout}
                onFieldsChange={this.handleInputChange}
                name="guarantorForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className={'page-container'}
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
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </Form>
        );
    }
}

export default Guarantor;
