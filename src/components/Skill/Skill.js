import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Skill = ({skill}) => {
    const {picture,name,type,payment,about} = skill;
    return (
        <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}:{type}</Card.Title>
                    <p>Price:{payment}</p>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button className='w-100' variant="primary">See Details</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Skill;