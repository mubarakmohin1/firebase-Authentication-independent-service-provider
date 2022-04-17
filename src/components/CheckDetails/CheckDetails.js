import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckDetails = () => {
    const { checkoutId } = useParams();
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <h2>ID:{checkoutId}?</h2> <br />
            <Link to='/permission'>
                <button className='btn btn-primary ms-4'>Permission</button>
            </Link>

        </div>
    );
};

export default CheckDetails;