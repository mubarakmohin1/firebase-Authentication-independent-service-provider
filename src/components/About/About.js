import React from 'react';
import profile from '../../Images/profile.jpeg'

const About = () => {
    return (
        <div className=' container d-flex justify-content-center align-items-center '>
            <div className=' col-lg-6'>
            <h1><span> Name:</span> MUBARAK HOSEN MOHIN </h1>
            <h4>Studied at department of chemistry,University of Chittagong.</h4>
            <p> <b>Skill:</b> At present,I pass my time with teaching about HSC Math subject.But main focus on learning of reactjs that is a library of javascript language</p>
            <h5> <b>Call me:</b> +8801853909088,+8801726385196</h5>
            </div>
            <div className=' col-lg-6'>
                <img className='w-100' src={profile}alt="" />
            </div>
        </div>
    );
};

export default About;