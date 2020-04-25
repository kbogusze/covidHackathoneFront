import React from 'react';

import Tile from './Tile';
import {Col, Divider, Row} from 'antd';
import {groupBy} from 'lodash';
import './gallery.css';

import {deals} from './Gallery';

const GalleryPage = () => {
    const categories = groupBy(deals, 'category');

    return (
        <div>
            {Object.keys(categories).map((key) => (
                <>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                        {key}
                    </Divider>
                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                        {categories[key].map((deal, index) => (
                            <Col className="gutter-row" span={6}>
                                <Tile
                                    key={index}
                                    deal={deal}
                                    redirect={true}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            ))}
        </div>
    )
}

export default GalleryPage;
