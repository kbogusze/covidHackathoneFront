import React from 'react';

import {Steps, Button, message, Form} from 'antd';
import Account from './Account';
import Company from './Company';
import Request from './Request';
import BackendConfiguration from "../BackendConfiguration";
import { useHistory } from 'react-router-dom';

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

            mainComponentState : "ACCOUNT", // There are statesACCOUNT COMPANY DEAL

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
            requestedCollateralAmount: undefined,
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

        this.updateCompanyName = this.updateCompanyName.bind(this);
        this.updateActivityCategory = this.updateActivityCategory.bind(this);
        this.updateNip = this.updateNip.bind(this);
        this.updateRegon = this.updateRegon.bind(this);
        this.updatePesel = this.updatePesel.bind(this);
        this.updateCompanyAddress = this.updateCompanyAddress.bind(this);
        this.updateCompanyPhone = this.updateCompanyPhone.bind(this);
        this.updateCompanyAddress = this.updateCompanyAddress.bind(this);

        this.updateCollateralTitle = this.updateCollateralTitle.bind(this);
        this.updateDueDate = this.updateDueDate.bind(this);
        this.updateSelectDate = this.updateSelectDate.bind(this);
        this.updateRequestedCollateralAmount = this.updateRequestedCollateralAmount.bind(this);
        this.updateRequestDescription = this.updateRequestDescription.bind(this);

        this.postAccountData = this.postAccountData.bind(this);
        this.postCompanyData = this.postCompanyData.bind(this);
        this.postDealData = this.postDealData.bind(this);

        this.redirectToGallery = this.redirectToGallery.bind(this);
        this.encodeUserCrendentialsInBase64 = this.encodeUserCrendentialsInBase64.bind(this);
    }



    postAccountData() {
      console.log("Posting Person data to server!!!");
      var url = BackendConfiguration.serverAddress + "/users";
      var method = "POST";
      var object = {
        address: this.state.address,
        cardIdNumber: "",
        email: this.state.email,
        firstName: this.state.name,
        lastName: this.state.surname,
        password: this.state.password,
        phoneNumber: this.state.phone,
        userType: "",
        username: this.state.login
      };
      var objectJSON = JSON.stringify(object);
      console.log(objectJSON);
      const Http = new XMLHttpRequest();
      Http.onload = function () {
        var status = Http.status;
        var data = Http.responseText;
        console.log("Status: " + status);
        console.log("Data: " + data);
      }
      Http.open("POST", url, true);
      //Http.setRequestHeader("Authorization", "Basic T1JGSTpPUkZJ");
      Http.setRequestHeader("Content-Type", "application/json");
      Http.send(objectJSON);
    }

    postCompanyData() {
      console.log("Posting Company data to server!!!");
      console.log("Has DOM fileInput element? : " + document.getElementById('file'));

      var url = BackendConfiguration.serverAddress + "/company";
      var method = "POST";
      var object = {
        activityCategory: this.state.activityCategory,
        companyAddress: this.state.companyAddress,
        companyName: this.state.companyName,
        companyPhone: this.state.companyPhone,
        companyWebsite: this.state.companyWebsite,
        nipNumber: this.state.nip,
        peselNumber: this.state.pesel,
        regonNumber: this.state.regon
      };
      var objectJSON = JSON.stringify(object);
      console.log(objectJSON);
      const Http = new XMLHttpRequest();
      Http.onload = function () {
        var status = Http.status;
        var data = Http.responseText;
        console.log("Status: " + status);
        console.log("Data: " + data);
      }
      Http.open("POST", url, true);
      //Http.setRequestHeader("Authorization", "Basic T1JGSTpPUkZJ");
      //Http.setRequestHeader("Authorization", "Basic S3J6eXN6dG9mMTpwYXNzd29yZA==");
      Http.setRequestHeader("Authorization", this.encodeUserCrendentialsInBase64(this.state.login, this.state.password));
      Http.setRequestHeader("Content-Type", "application/json");
      Http.send(objectJSON);
    }

    postDealData() {
      console.log("Posting Deal data to server!!!");
      var url = BackendConfiguration.serverAddress + "/deals";
      var method = "POST";
      var object = {
       collateralTitle : this.state.collateralTitle,
       dueDate : this.state.dueDate,
       marketingPurposes : true,
       personalDataAcceptance : true,
       requestDescription : this.state.requestDescription,
       requestedCollateralAmount : this.state.requestedCollateralAmount
      };
      var objectJSON = JSON.stringify(object);
      console.log(objectJSON);
      const Http = new XMLHttpRequest();
      Http.onload = function () {
        var status = Http.status;
        var data = Http.responseText;
        console.log("Status: " + status);
        console.log("Data: " + data);
      }
      Http.open("POST", url, true);
      Http.setRequestHeader("Authorization", this.encodeUserCrendentialsInBase64(this.state.login, this.state.password));
      Http.setRequestHeader("Content-Type", "application/json");
      Http.send(objectJSON);
    }

    redirectToGallery() {
      console.log("Redirecting to gallery!");
      const history = useHistory();
      history.push("/gallery");
    }

    encodeUserCrendentialsInBase64(user, password) {
        var token = user + ":" + password;
        // Should i be encoding this value????? does it matter???
        // Base64 Encoding -> btoa
        var hash = btoa(token);
        return "Basic " + hash;
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
      console.log("Updating company name with newState : " + newState);
      this.setState({companyName:newState});
    }
    updateActivityCategory(newState) {
      this.setState({activityCategory:newState});
    }
    updateNip(newState) {
      this.setState({nip:newState});
    }
    updateRegon(newState) {
      this.setState({regon:newState});
    }
    updatePesel(newState) {
      this.setState({pesel:newState});
    }
    updateCompanyAddress(newState) {
      this.setState({companyAddress:newState});
    }
    updateCompanyPhone(newState) {
      this.setState({companyPhone:newState});
    }
    updateCompanyWebsite(newState) {
      this.setState({companyWebsite:newState});
    }
    updateUploadAttachments(newState) {
      this.setState({uploadAttachments:newState});
    }
    //---
    updateCollateralTitle(newState) {
      this.setState({collateralTitle:newState});
    }
    updateDueDate(newState) {
      this.setState({dueDate:newState});
    }
    updateSelectDate(newState) {
      this.setState({selectDate:newState});
    }
    updateRequestedCollateralAmount(newState) {
      this.setState({requestedCollateralAmount:newState});
    }
    updateRequestDescription(newState) {
      this.setState({requestDescription:newState});
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

                    updateCompanyName = {this.updateCompanyName}
                    updateActivityCategory = {this.updateActivityCategory}
                    updateNip = {this.updateNip}
                    updateRegon = {this.updateRegon}
                    updatePesel = {this.updatePesel}
                    updateCompanyAddress = {this.updateCompanyAddress}
                    updateCompanyPhone = {this.updateCompanyPhone}
                    updateCompanyAddress = {this.updateCompanyAddress}

                    updateCollateralTitle = {this.updateCollateralTitle}
                    updateDueDate = {this.updateDueDate}
                    updateSelectDate = {this.updateSelectDate}
                    updateRequestedCollateralAmount = {this.updateRequestedCollateralAmount}
                    updateRequestDescription = {this.updateRequestDescription}
                    />
                </div>
                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => {
                          message.success('Processing complete!');
                          console.log("Posting deal data now!");
                          this.postDealData();
                        }}>
                            Done
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => {

                          this.next();

                          if(this.state.mainComponentState === "ACCOUNT") {
                            this.postAccountData();
                            this.setState({mainComponentState : "COMPANY"});
                          } else if(this.state.mainComponentState === "COMPANY") {
                            this.postCompanyData();
                            this.setState({mainComponentState : "DEAL"});
                          } else {
                            console.log("FINAL DONE");
                          }

                        }}>
                            Next
                        </Button>
                    )}
                </div>
            </Form>
        );
    }
}

export default Applicant;
