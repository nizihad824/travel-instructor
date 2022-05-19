import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
          
             <Col>
                <Card className='card-animation'>
                    <Card.Img className='img-fixed-size' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.substr(0, 150)}
                        </Card.Text>
                        <Card.Text>
                            Cost: {price}€
                        </Card.Text>
                        <Link to={`/service/${id}`}>
                            <Button onClick={() => navigateToServiceDetail(id)} variant='outline-success'>Book: {name}</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;