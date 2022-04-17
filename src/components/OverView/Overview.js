import React from 'react';
import streetChildren1 from '../../Images/streetChildren1.webp'
import streetChildren2 from '../../Images/streetChildren2.jpg'
import StreetChildren3 from '../../Images/StreetChildren3.png'
import SingleOverView from './SingleOverView/SingleOverView';


const overviews = [
    { id: 1, name: 'Mubarak', title: 'streetChildren education', img: streetChildren1 },
    { id: 2, name: 'Tanjil', title: 'streetChildren manner', img: streetChildren2 },
    { id: 3, name: 'Yeasin', title: 'streetChildren skill', img: StreetChildren3 }

]
const Overview = () => {

    return (
        <div className='container ms-5 row'>
            <h2 className='text-center mt-2 mb-2'>Street CHildren Education</h2>
            {
              overviews.map(overview => <SingleOverView key={overview.id} overview ={overview}></SingleOverView>)
            }
        </div>
    );
};

export default Overview;