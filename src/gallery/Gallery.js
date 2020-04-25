import React from 'react';

import Tile from './Tile';
import bookstore from '../assets/images/bookstore.jpg';
import bookstore2 from '../assets/images/bookstore.jpg';
import empik from '../assets/images/empik.jpg';
import coffeeshop from '../assets/images/coffeeshop.jpg';
import {Col, Row} from 'antd';

export const deals = [
    {
        id: 1,
        title: 'ABC Bookstore',
        image: bookstore,
        percent: 70,
        category: 'bookstore'
    },
    {
        id: 2,
        title: 'Empik',
        image: empik,
        percent: 25,
        category: 'bookstore'
    },
    {
        id: 3,
        title: 'Księgarnia Litera',
        image: bookstore2,
        percent: 10,
        category: 'bookstore'
    },
    {
        id: 4,
        title: 'Aroma cafe',
        image: coffeeshop,
        percent: 50,
        category: 'gastronomy'
    },
];

class Gallery extends React.Component {
    render() {
        return (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {deals.map((deal, index) => (
                    <Col className="gutter-row" span={6}>
                        <Tile
                            key={index}
                            deal={deal}
                        />
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Gallery;
