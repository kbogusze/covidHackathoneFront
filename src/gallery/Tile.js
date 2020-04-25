import React from 'react';
import {Card, Progress} from 'antd';

const { Meta } = Card;

class Tile extends React.Component {
    render() {
        const {image, title, percent} = this.props;

        return (
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="example" src={image} />}
            >
                <Meta title={title} />
                    <Progress percent={percent} size="small" status={this.getStatus(percent)} />
            </Card>
        );
    }

    getStatus = (percentage) => {
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
}

export default Tile;
