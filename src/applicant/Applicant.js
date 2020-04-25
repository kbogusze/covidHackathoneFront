import React from 'react';

import {Steps, Button, message, Form} from 'antd';
import Account from './Account';
import Company from './Company';
import Request from './Request';
import BackendConfiguration from "../BackendConfiguration";


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

            // We will post this data to Person and Deal entities
            login: undefined,
            password: undefined,
            passwordConfirmation: undefined,
            email: undefined,
            name: undefined,
            surname: undefined,
            address: undefined,
            phone: undefined,
            //---
            companyName: undefined,
            activityCategory: undefined,
            nip: undefined,
            regon: undefined,
            pesel: undefined,
            companyAddress: undefined,
            companyPhone: undefined,
            companyWebsite: undefined,
            uploadAttachments: undefined,
            //---
            collateralTitle: undefined,
            dueDate: undefined,
            selectDate: undefined,
            reqeustedCollateralAmount: undefined,
            requestDescription: undefined
        };

        this.updateLogin = this.updateLogin.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updatePasswordConfirmation = this.updatePasswordConfirmation.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateSurname = this.updateSurname.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateCompanyName = this.updateCompanyName.bind(this);
        this.updateActivityCategory = this.updateActivityCategory.bind(this);

        this.postAccountData = this.postAccountData.bind(this);
    }

    postAccountData() {
      console.log("Posting Person data to server!!!");
      var url = BackendConfiguration.serverAddress + "/persons";
      var method = "POST";
      var object = {
        firstName: this.state.name,
        lastName: this.state.surname,
        phoneNumber: this.state.phone,
        email: this.state.email,
        cardIdNumber: null,
        termConsent: null,
        contactConsent: null
        };
      var objectJSON = JSON.stringify(object);
      console.log(objectJSON);
      const Http = new XMLHttpRequest();
      Http.onload = function () {
      var status = Http.status;
      var data = Http.responseText;
      }
      Http.open("POST", url, true);
      Http.setRequestHeader("Content-Type", "application/json");
      Http.send(objectJSON);
    }

    updateLogin(newState) {
      console.log("Updating login with newState : " + newState);
      this.setState({login:newState});
    }
    updatePassword(newState) {
      this.setState({password:newState});
    }
    updatePasswordConfirmation(newState) {
      this.setState({passwordConfirmation:newState});
    }
    updateEmail(newState) {
      this.setState({email:newState});
    }
    updateName(newState) {
      console.log("Updating name with newState : " + newState);
      this.setState({name:newState});
    }
    updateSurname(newState) {
      console.log("Updating surname with newState : " + newState);
      this.setState({surname:newState});
    }
    updateAddress(newState) {
      this.setState({address:newState});
    }
    updatePhone(newState) {
      this.setState({phone:newState});
    }
    updateCompanyName(newState) {
      this.setState({companyName:newState});
    }
    updateActivityCategory(newState) {
      this.setState({activityCategory:newState});
    }
    nip(newState) {
      this.setState({login:newState});
    }
    regon(newState) {
      this.setState({login:newState});
    }
    pesel(newState) {
      this.setState({login:newState});
    }
    companyAddress(newState) {
      this.setState({login:newState});
    }
    companyPhone(newState) {
      this.setState({login:newState});
    }
    companyWebsite(newState) {
      this.setState({login:newState});
    }
    uploadAttachments(newState) {
      this.setState({login:newState});
    }
    //---
    collateralTitle(newState) {
      this.setState({login:newState});
    }
    dueDate(newState) {
      this.setState({login:newState});
    }
    selectDate(newState) {
      this.setState({login:newState});
    }
    reqeustedCollateralAmount(newState) {
      this.setState({login:newState});
    }
    requestDescription(newState) {
      this.setState({login:newState});
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
                    <CurrentContent
                    onFieldChange={this.handleInputChange}
                    updateLogin={this.updateLogin}
                    updatePassword = {this.updatePassword}
                    updatePasswordConfirmation = {this.updatePasswordConfirmation}
                    updateEmail = {this.updateEmail}
                    updateName = {this.updateName}
                    updateSurname = {this.updateSurname}
                    updateAddress = {this.updateAddress}
                    updatePhone = {this.updatePhone}
                    />
                </div>
                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => {message.success('Processing complete!'); this.postAccountData();}}>
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
