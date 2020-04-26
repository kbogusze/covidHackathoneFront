import React, {useEffect, useState} from 'react';

import Tile from './Tile';
import {Divider} from 'antd';
import {groupBy} from 'lodash';
import './gallery.css';

import * as axios from 'axios';
import BackendConfiguration from '../BackendConfiguration';

const GalleryPage = () => {
    const [data, setData] = useState({ deals: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${BackendConfiguration.serverAddress}/dealview/deals`,
            );
            setData({deals:result.data});
        };

        fetchData();
    }, []);

    const categories = groupBy(data.deals, 'category');

    return (
        <div
            className={'page-container'}
        >
            {Object.keys(categories).map((key, index) => (
                <div key={index}>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                        {key}
                    </Divider>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}
                    >
                        {categories[key].map((deal, index) => (
                            <Tile
                                key={index}
                                deal={deal}
                                redirect={true}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GalleryPage;
