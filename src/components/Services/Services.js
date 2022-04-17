import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';

const Services = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {

                setSkills(data)
            })
    }, [])
    return (
        <div id='service' className='row container mt-5 ms-5'>

            <h1 className='text-center mb-5'>Types Of Service</h1>
            {
                skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)
            }
        </div>
    );
};

export default Services;