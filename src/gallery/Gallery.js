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
            <div style={{
                margin: '40px 0',
                padding: '30px',
                backgroundColor: 'rgb(255, 255, 255)'
            }}>
                <h3 style={{textAlign: 'left', margin: '0 50px'}}>
                    Active applications:
                </h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {deals.map((deal, index) => (
                        <Tile
                            key={index}
                            deal={deal}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;
