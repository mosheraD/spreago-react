import React, { Component } from 'react';
import {  Row , Col, Container  } from 'react-bootstrap';
import ListItem from '../list-item/list-item.component';
import {Button, Paper} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class  AddToList extends Component{
    render(){
        return(
            <Container fluid className="pt-5">
                <Paper>
                    <Row className="m-0 p-3 border-b-1">
                            <Col className="pl-0 pb-3"  xs={7}>
                                <h6>Add to your list</h6>
                            </Col>
                            <Col className="pb-3" xs={{ span : 4,offset : 1}}>
                                <h6><Link className="text-orange">View All</Link></h6>
                            </Col>
                            <Col className="p-0 mb-1" xs={8}><ListItem/></Col>
                            <Col className="p-0 text-center" xs={4}><Button className="btn-black" size="small" variant="outlined">Unfollow</Button></Col>
                            <Col className="p-0 mb-1" xs={8}><ListItem/></Col>
                            <Col className="p-0 text-center" xs={4}><Button className="btn-black" size="small" variant="outlined">Unfollow</Button></Col>
                            <Col className="p-0 mb-1" xs={8}><ListItem/></Col>
                            <Col className="p-0 text-center" xs={4}><Button className="btn-black" size="small" variant="outlined">Unfollow</Button></Col>
                    </Row>
                    </Paper>
            </Container>
        )
    }
}