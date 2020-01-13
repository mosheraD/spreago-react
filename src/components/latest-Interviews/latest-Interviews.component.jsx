import React, { Component } from 'react';
import {  Container , Row , Col  } from 'react-bootstrap';
import CradInterview from '../card-interview/card-interview.component';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class  LatestInterviews extends Component{
    render(){
        return(<div>
            <Container className="pt-5">
                <Paper elevation={3}>
                    <Row elevation={3} className="bg-light m-0 p-3" style={{borderBottom:'1px solid #f2f2f2'}}>
                            <Col md={4}>
                                <h5>Latest Interviews</h5>
                            </Col>
                             <Col className="text-right" md={{span :4 , offset : 4}}>
                                <h5><Link className="text-orange" to='/'>See All <ArrowForwardIcon /></Link></h5>
                            </Col>
                    </Row>
                    <Row>
                        <Col md='12' className="pt-3 pb-3" style={{borderBottom:'1px solid #f2f2f2'}}>
                            <CradInterview />
                        </Col>
                        <Col md='12' className="pt-3 pb-3" style={{borderBottom:'1px solid #f2f2f2'}}>
                            <CradInterview />
                        </Col>
                        <Col md='12' className="pt-3 pb-3" style={{borderBottom:'1px solid #f2f2f2'}}>
                            <CradInterview />
                        </Col>
                     </Row>
                </Paper>
            </Container>
        </div>);
    }
}