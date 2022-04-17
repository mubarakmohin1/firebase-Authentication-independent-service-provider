import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Skill = ({ skill }) => {
    const { picture, name, type, payment, about, id } = skill;

    const navigate = useNavigate();
    const handleCheckDetails = (id) => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}:{type}</Card.Title>
                    <p>Price:{payment}</p>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button onClick={() => handleCheckDetails(id)} className='w-100' variant="primary">See Details</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Skill;