import React, {useEffect, useState} from 'react';

import {Descriptions, Layout, Progress} from 'antd';
import empik from '../assets/images/empik.jpg';
import {getStatus} from '../gallery/Tile';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import * as axios from 'axios';
import BackendConfiguration from '../BackendConfiguration';
import {useParams} from "react-router-dom";
import moment from 'moment';
import './application.css';

const { Footer, Content } = Layout;

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

    const {company, deal} = data.deal;
    const companyInfo = company || {};
    const dealInfo = deal || {};

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
                    <div style={{
                        display: 'flex',
                    }}>
                        <Progress percent={percent} size="small" status={getStatus(percent)}/>
                        <span>
                            <span style={{fontWeight: 'bold'}}>Due date: </span>
                            {moment(dealInfo.dueDate).format('DD.MM.YYYY')}
                        </span>
                    </div>
                    <Content>
                        <Title level={2}>{companyInfo.companyName}</Title>
                        <Paragraph>
                            {dealInfo.requestDescription}
                        </Paragraph>
                        <div style={{margin: '40px 0'}}>
                            <img
                                alt="example"
                                style={{ width: 320 }}
                                src={
                                    `${BackendConfiguration.serverAddress}/dealview/mainpicture/stream/${dealInfo.mainPictureId}/${dealInfo.mainPictureName}`
                                }
                            />
                        </div>
                    </Content>
                </div>
                <div
                    style={{
                        flex: '1',
                    }}
                >
                    <button
                        className={'app-button'}
                        type={'button'}>
                        Provide support
                    </button>
                    <button
                        className={'app-button'}
                        type={'button'}>
                        Share on Facebook
                    </button>
                    <button
                        className={'app-button'}
                        type={'button'}>
                        Share on Twitter
                    </button>
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
