import React, { Component } from 'react';
import {  Container , Row , Col  } from 'react-bootstrap';
import Card from '../card/card-component';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

export default class  LatestBiographies extends Component{
    render(){
        return(<div>
            <Container>
                <Row className="pt-3">
                    <Col xs={6} className="pb-3">
                        <h5>Your Biographies</h5>
                    </Col>
                        <Col className="text-right pb-3" xs={{span :4 , offset : 2}}>
                        <h5><Link className="text-orange" to='/'>See All <ArrowForwardIcon /></Link></h5>
                    </Col>
                    <Col md='4'>
                        <Card />
                    </Col>
                    <Col md='4'>
                        <Card />
                    </Col>
                    <Col md='4'>
                        <Card />
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}