import React from 'react';

import Tile from './Tile';
import bookstore from '../assets/images/bookstore.jpg';
import bookstore2 from '../assets/images/bookstore.jpg';
import empik from '../assets/images/empik.jpg';
import coffeeshop from '../assets/images/coffeeshop.jpg';
import {Col, Divider, Row} from 'antd';
import {groupBy} from 'lodash';
import './gallery.css';

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

class GalleryPage extends React.Component {
    render() {
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
                                        {...deal}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </>
                ))}
            </div>
        )
    }
}

export default GalleryPage;
