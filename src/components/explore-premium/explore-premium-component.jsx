import React, { Component } from 'react';
import {  Row , Col, Container  } from 'react-bootstrap';
import {Paper , Avatar , Button , List , ListItem , ListItemAvatar , ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Logo from './images/premium.png';

export default class ExplorePremium extends Component{
    render(){
        return(
            <Container fluid>
                <Paper>
                    <Row className="m-0 p-3 mt-5 border-b-1">
                            <List dense>
                                <ListItem className="p-0">
                                    <ListItemAvatar className="p-0 w-30px">
                                        <img alt="premium logo" src={Logo}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={
                                        <h6 className="m-0 bold">Explore premium features</h6>
                                    }/>
                                </ListItem>  
                            </List> 
                            <List dense>
                                <ListItem className="p-0">
                                    <ListItemAvatar className="p-0">
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
                                    </ListItemAvatar>
                                    <ListItemText className="p-0" primary="New Horizon" secondary="Software Company" />
                                </ListItem>  
                            </List> 
                            <Col className="p-0" md={12}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            </Col>
                            <Col className="pt-3 pb-3 text-center" xs={12}><Button variant="outlined" color="primary" size="large">Compare Packages</Button></Col>
                            <Col xs={12}  className="text-center"><Link>Premium Features</Link></Col>
                    </Row>
                    </Paper>
            </Container>
        )
    }
}