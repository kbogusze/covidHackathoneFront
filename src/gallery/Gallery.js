import React from 'react';

import Tile from './Tile';
import bookstore from '../assets/images/bookstore.jpg';
import bookstore2 from '../assets/images/bookstore.jpg';
import empik from '../assets/images/empik.jpg';
import coffeeshop from '../assets/images/coffeeshop.jpg';
import {Col, Row} from 'antd';

const deals = [
    {
        title: 'ABC Bookstore',
        image: bookstore,
        percent: 70,
        category: 'bookstore'
    },
    {
        title: 'Empik',
        image: empik,
        percent: 25,
        category: 'bookstore'
    },
    {
        title: 'Księgarnia Litera',
        image: bookstore2,
        percent: 10,
        category: 'bookstore'
    },
    {
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
                            {...deal}
                        />
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Gallery;
