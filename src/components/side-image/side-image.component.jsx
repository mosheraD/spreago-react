import React from 'react';
import { Row , Col } from 'react-bootstrap';

import './side-image.style.css';


export default function SideImage(){
        return(
            <Row className=" p-0 m-0 align-items-end side-bg">
                <Col xs={12} className="text-left pb-5 pl-5 side-container">
                        <h1 className="text-white "><strong>Join Our</strong><br/><strong>Community</strong></h1>
                        <p className="text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </Col>
            </Row>
        );
}