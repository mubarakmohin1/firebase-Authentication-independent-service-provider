import React from 'react';
import { useParams } from 'react-router-dom';

const CheckDetails = () => {
    const {checkoutId} = useParams();
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1>Id:{checkoutId}</h1>
            
        </div>
    );
};

export default CheckDetails;