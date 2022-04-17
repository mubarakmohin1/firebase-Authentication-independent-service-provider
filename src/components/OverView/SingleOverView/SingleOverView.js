import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleOverView = ({ overview }) => {
    const { name, img, title } = overview;
    return (
        <div className='container col-lg-4 col-sm-12 col-md-6 mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {name} : He is a teacher
                    </Card.Text>
                    <Button className='w-100' variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleOverView;