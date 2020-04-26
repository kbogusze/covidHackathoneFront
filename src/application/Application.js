import React, {useEffect, useState} from 'react';

import {Descriptions, Layout, Progress} from 'antd';
import empik from '../assets/images/empik.jpg';
import {getStatus} from '../gallery/Tile';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import * as axios from 'axios';
import BackendConfiguration from '../BackendConfiguration';
import {useParams, useLocation} from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const application = {
    id: 2,
    title: 'Empik',
    image: empik,
    percent: 25,
    category: 'bookstore',
    description: 'long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text '
};

const Application = (props) => {
    const {percent, title, description} = application;
    const [data, setData] = useState({deal: {}});
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${BackendConfiguration.serverAddress}/dealview/details/${id}`,
            );
            setData({deal: result.data});
        };

        fetchData();
    }, []);

    const {company} = data.deal;
    const companyInfo = company || {};

    return (
        <div
            className={'page-container'}
        >
            <div style={{
                display: 'flex',
            }}>
                <div style={{
                    flex: '3',
                }}>
                    <Header>
                        <Progress percent={percent} size="small" status={getStatus(percent)}/>
                    </Header>
                    <Content>
                        <Title level={2}>{companyInfo.companyName}</Title>
                        <Paragraph>
                            {description}
                        </Paragraph>
                    </Content>
                </div>
                <div
                    style={{
                        flex: '1',
                    }}
                >Sider
                </div>
            </div>
            <Layout>
                <Footer>
                    <Descriptions title="Info">
                        <Descriptions.Item label="Company Name">{companyInfo.companyName}</Descriptions.Item>
                        <Descriptions.Item label="Activity category">{companyInfo.activityCategory}</Descriptions.Item>
                        <Descriptions.Item label="NIP number">{companyInfo.nipNumber}</Descriptions.Item>
                        <Descriptions.Item label="REGON number">{companyInfo.regonNumber}</Descriptions.Item>
                        <Descriptions.Item label="Company address">{companyInfo.companyAddress}</Descriptions.Item>
                        <Descriptions.Item label="Company Phone">{companyInfo.companyPhone}</Descriptions.Item>
                        <Descriptions.Item label="Company Website">{companyInfo.companyWebsite}</Descriptions.Item>
                    </Descriptions>
                </Footer>
            </Layout>
        </div>
    )
}

export default Application;
