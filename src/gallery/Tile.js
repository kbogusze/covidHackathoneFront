import React from 'react';
import {Card, Progress} from 'antd';
import {Link, useRouteMatch} from 'react-router-dom';
import Paragraph from 'antd/lib/typography/Paragraph';
import BackendConfiguration from '../BackendConfiguration';
const { Meta } = Card;

const Tile = (props) => {
    const {deal, redirect} = props;
    const match = useRouteMatch();
    const {mainPictureName, mainPictureId, image, collateralTitle, collectedValue: percent, id, requestDescription} = deal;

    return (
        <Link
            to={{
                pathname: redirect ? `${match.url}/${id}` : 'gallery',
                state: { deal }
            }}
              style={{margin: '10px'}}>
            <Card
                hoverable
                style={{ width: 320 }}
                cover={
                    <div
                        style={{overflowY: 'hidden', maxHeight: '210px'}}
                    >
                        <img
                            alt="example"
                            style={{ width: 320 }}
                            src={
                                mainPictureName
                                    ? `${BackendConfiguration.serverAddress}/dealview/mainpicture/stream/${mainPictureId}/${mainPictureName}`
                                    : image
                            }
                        />
                    </div>
                }
            >
                <Meta title={collateralTitle} />
                <Paragraph style={{marginTop: '15px'}} ellipsis={{ rows: 4 }}>
                    {requestDescription}
                </Paragraph>
                <Progress percent={percent} size="small" status={getStatus(percent)} />
            </Card>
        </Link>
    );
}

export const getStatus = (percentage) => {
    if (percentage < 25) {
        return 'red';
    }

    if (percentage >= 25 && percentage < 50) {
        return 'yellow';
    }

    if (percentage >= 50 && percentage < 75) {
        return 'orange';
    }

    if (percentage >= 75) {
        return 'green';
    }
}


export default Tile;
