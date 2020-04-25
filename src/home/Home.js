import Title from 'antd/lib/typography/Title';
import {Link} from 'react-router-dom';
import React from 'react';
import Paragraph from 'antd/lib/typography/Paragraph';
import Gallery from '../gallery/Gallery';
import './home.css';
import SolutionOutlined from '@ant-design/icons/lib/icons/SolutionOutlined';
import TeamOutlined from '@ant-design/icons/lib/icons/TeamOutlined';

function Home() {
    return (
        <>
            <div className={'landing-background'}>
                <div style={{textAlign: 'center'}}>
                    <span className={'header-top'}/>
                    <Title style={{margin: '0 40px 40px', fontSize: '48px'}}>Your business needs help? We can help you!</Title>
                    <Paragraph className={'button-paragraph'}>
                        Solidarity Collateral platform joins small or medium companies and guarantors together for common good. If your business requires additional funds and you need cash collateral simply use our service to find solidarity group, which can help your business keep afloat. If you would like to be part of solidarity group, become a guarantor and browse companies you want to help.
                    </Paragraph>
                </div>
                <div className={'buttons-container'}>
                    <Link to={'applicant'} >
                        <button className={'main-icon-button applicant'} >
                            <SolutionOutlined className={'main-icon'}/>
                            <p className={'button-paragraph'}>
                                I'm a an applicant
                            </p>
                        </button>
                    </Link>
                    <Link to={'guarantor'}>
                        <button className={'main-icon-button guarantor'}>
                            <TeamOutlined className={'main-icon'}/>
                            <p className={'button-paragraph'}>
                                I'm a guarantor
                            </p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={'video center'}>
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div style={{textAlign: 'center'}} className={'howitworks'}>
                <span className={'header-top'}/>
                <Title style={{margin: '0 40px 40px', fontSize: '48px'}}>How it works?</Title>
                <div className={'works-row'}>
                    <div className={'works-step'}>
                        <span className={'works-circle'}>01</span>
                        <p>
                            Tell your story about your business and ask for cash collateral for your bank loan request
                        </p>
                    </div>
                    <div className={'works-step'}>
                        <span className={'works-circle'}>02</span>
                        <p>
                            Let solidarity groups to find your application request and get necessary amount quickly
                        </p>
                    </div>
                    <div className={'works-step'}>
                        <span className={'works-circle'}>03</span>
                        <p>
                            You don't need to do anything else, we will send money straight to your bank
                        </p>
                    </div>
                </div>
                <Gallery/>
            </div>
        </>
    )
}

export default Home;