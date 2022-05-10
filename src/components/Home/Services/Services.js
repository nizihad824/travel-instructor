import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className='container mt-1 mb-3'>
        <Row className='bg p-2 text-white mb-3'>
            <h3>We provide the following services</h3>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4 shadow-lg p-3 bg-body rounded">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </Row>

    </div>
    );
};

export default Services;