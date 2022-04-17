import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliding1 from '../../Images/sliding1.jpg'
import sliding2 from '../../Images/sliding2.jpg'
import sliding3 from '../../Images/sliding3.png'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliding1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-info font-weight-600'>Enrolle started for courses</h3>
                        <p>Three month challenge about Calculus,Straightline,Circle and Trigonometry</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliding2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-black font-weight-600'>Enrolle started for courses</h3>
                        <p>Three month challenge about Calculus,Straightline,Circle and Trigonometry</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliding3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary font-weight-600'>Enrolle started for courses</h3>
                        <p className='text-primary'>Three month challenge about Calculus,Straightline,Circle and Trigonometry</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
        </div>
    );
};

export default Home;