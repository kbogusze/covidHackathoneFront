import Title from 'antd/lib/typography/Title';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {DesktopOutlined, FileOutlined} from '@ant-design/icons';
import React from 'react';
import Paragraph from 'antd/lib/typography/Paragraph';

function Home() {
    return (
        <>
            <div>
                <Title>Your business needs help? We can help you!</Title>
                <Paragraph className={'button-paragraph'}>
                    Solidarity Collateral platform joins small or medium companies and guarantors together for common good. If your business requires additional funds and you need cash collateral simply use our service to find solidarity group, which can help your business keep afloat. If you would like to be part of solidarity group, become a guarantor and browse companies you want to help.
                </Paragraph>
            </div>
            <div className={'buttons-container'}>
                <Link to={'applicant'} >
                    <Button className={'main-icon-button applicant'} >
                        <DesktopOutlined className={'main-icon'}/>
                        <Paragraph className={'button-paragraph'}>
                            I'm a an applicant
                        </Paragraph>
                    </Button>
                </Link>
                <Link to={'guarantor'}>
                    <Button className={'main-icon-button guarantor'}>
                        <FileOutlined className={'main-icon'}/>
                        <Paragraph className={'button-paragraph'}>
                            I'm a guarantor
                        </Paragraph>
                    </Button>
                </Link>
            </div>
            <div className={'video center'}>
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </>
    )
}

export default Home;