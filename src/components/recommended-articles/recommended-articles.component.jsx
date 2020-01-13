import React, { Component } from 'react';
import {  Row , Col, Container  } from 'react-bootstrap';
import ListItem from '../list-item/list-item.component';
import {Paper} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class RecommendedArticles extends Component{
    render(){
        return(
            <Container fluid>
                <Paper>
                    <Row className="m-0 p-3 border-b-1">
                            <Col className="pb-3 pl-0"  xs={7}>
                                <h6>Recommended Articles</h6>
                            </Col>
                            <Col className="pb-3" xs={{ span : 4,offset : 1}}>
                                <h6><Link className="text-orange">View All</Link></h6>
                            </Col>
                            <Col className="p-0 pb-3" xs={10}><ListItem/></Col>
                            <Col className="p-0 pb-3" xs={10}><ListItem/></Col>
                            <Col className="p-0 pb-3" xs={10}><ListItem/></Col>
                    </Row>
                    </Paper>
            </Container>
        )
    }
}