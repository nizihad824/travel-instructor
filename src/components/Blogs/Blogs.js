import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='text-center p-5'>
            <div>
                <Row>
                    <h1>Welcome to Question and Answer Blog</h1>
                    <ListGroup className='list-group'>
                       <ListGroup.Item>
                           <div>
                           <h3>Difference between authorization and authentication</h3>
                        <p><span className='text'>Authentication:</span> Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.
                        <br />

                        <span className='text'>Authorization:</span>
                        Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.
                        
                         </p>
                           </div>
                        </ListGroup.Item>
                       <ListGroup.Item>
                            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your 
                                <br />
                                <div>
                                    <ul>
                                    <li>Parse – Open Source Backend Platform;</li>
                                    <li>Back4app – Parse Hosting Platform;</li>
                                    <li>Backendless – Mobile Backend and API Services Platform;</li>
                                    <li>Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;</li>
                                   
                                </ul>
                                </div>
                            
                                 </p>

                        <p>.</p>
                        </ListGroup.Item>
                       <ListGroup.Item>
                            <h3>What other services does firebase provide other than authentication</h3>
                        <p>
                            <ul>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions.</li>
                                <li>Authentication.</li>
                                <li>Authentication.</li>
                                <li>Authentication.</li>
                                <li>Google Analytics.</li>
                                <li>Predictions.</li>
                                <li>Cloud Messaging.</li>
                            </ul>
                        </p>
                        </ListGroup.Item>

                    </ListGroup>

                </Row>
            </div>
           
        </div>
    );
};

export default Blogs;