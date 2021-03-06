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
        collateralTitle: 'ABC Bookstore',
        image: bookstore,
        collectedValue: 70,
        category: 'bookstore'
    },
    {
        id: 2,
        collateralTitle: 'Empik',
        image: empik,
        collectedValue: 25,
        category: 'bookstore'
    },
    {
        id: 3,
        collateralTitle: 'Księgarnia Litera',
        image: bookstore2,
        collectedValue: 10,
        category: 'bookstore'
    },
    {
        id: 4,
        collateralTitle: 'Aroma cafe',
        image: coffeeshop,
        collectedValue: 50,
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
