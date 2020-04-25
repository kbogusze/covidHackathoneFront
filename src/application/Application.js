import React from 'react';

import {Card, Form, Input, Layout, Progress} from 'antd';
import empik from '../assets/images/empik.jpg';
import {getStatus} from '../gallery/Tile';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Descriptions } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const application = {
    id: 2,
    title: 'Empik',
    image: empik,
    percent: 25,
    category: 'bookstore',
    description: 'long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text '
};

const companyInfo = {
    companyName: 'Empik',
    activityCategory: 'Bookstore',
    nip: '8230570345',
    regon: '43509230547304',
    address: 'Ulica numer miasto',
    website: 'www.strona.com',
}

class Application extends React.Component {
    render() {
        const {percent, title, description} = application;

        return (
            <Layout>
                <Layout>
                    <Layout>
                        <Header>
                            <Progress percent={percent} size="small" status={getStatus(percent)} />
                        </Header>
                        <Content>
                            <Title level={2}>{title}</Title>
                            <Paragraph>
                                {description}
                            </Paragraph>
                        </Content>
                    </Layout>
                    <Sider theme={'light'}>Sider</Sider>
                </Layout>
                <Layout>
                    <Footer>
                        <Descriptions title="Info">
                            <Descriptions.Item label="Company Name">{companyInfo.companyName}</Descriptions.Item>
                            <Descriptions.Item label="Activity category">{companyInfo.activityCategory}</Descriptions.Item>
                            <Descriptions.Item label="NIP number">{companyInfo.nip}</Descriptions.Item>
                            <Descriptions.Item label="REGON number">{companyInfo.regon}</Descriptions.Item>
                            <Descriptions.Item label="Company address">{companyInfo.address}</Descriptions.Item>
                            <Descriptions.Item label="Company Phone">{companyInfo.phone}</Descriptions.Item>
                            <Descriptions.Item label="Company Website">{companyInfo.website}</Descriptions.Item>
                        </Descriptions>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Application;
