import React from 'react';
import {Card, Progress} from 'antd';
import {Link, useRouteMatch} from 'react-router-dom';
const { Meta } = Card;

const Tile = (props) => {
    const {deal: {image, title, percent, id}, redirect} = props;
    const match = useRouteMatch();

    return (
        <Link to={redirect ? `${match.url}/${id}` : 'gallery'} style={{margin: '10px'}}>
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="example" src={image} />}
            >
                <Meta title={title} />
                <Progress percent={percent} size="small" status={getStatus(percent)} />
            </Card>
        </Link>
    );
}

export const getStatus = (percentage) => {
    if (percentage < 26) {
        return 'exception';
    }

    if (percentage >= 26 && percentage < 51) {
        return 'active';
    }

    if (percentage >= 51 && percentage < 75) {
        return 'normal';
    }

    if (percentage >= 75) {
        return 'success';
    }
}


export default Tile;
