import React, { Component } from 'react';
import {  Container , Row , Col  } from 'react-bootstrap';
import CardCandidate from '../card-candidate/card-candidate.component';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

export default class  FindCandidate extends Component{
    render(){
        return(
        <div className="mt-5">
                <Container>
                    <Row>
                        <Col className="pb-3" md={4}>
                            <h5>Find a perfict candidate</h5>
                        </Col>
                        <Col className="text-right pb-3" md={{ span : 4,offset : 4}}>
                            <h5><Link className="text-orange">See All <ArrowForwardIcon /></Link></h5>
                        </Col>
                        <Col md={4}>
                            <CardCandidate/>
                        </Col>
                        <Col md={4}>
                            <CardCandidate/>
                        </Col>
                        <Col md={4}>
                            <CardCandidate/>
                        </Col>
                    </Row>
                </Container>
        </div>);
    }
}