import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';

export default class cardInterview extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: { main: '#E85A19', light: '#E85A19', dark: '#E85A19' },
                secondary: { main: '#fbb800', light: '#000', dark: '#f1eeee' },
                contrastText: { main: '#E1631C' },
            }
        })
        return (
            <ThemeProvider theme={theme}>
                <Container className="pt-3 pb-3">
                    <Row>
                        <Col md={3} xs={12} className="order-sm-1 order-2 text-center">
                                <img src="https://dummyimage.com/170/#2d2d2d/fff" alt="interview img" className="w-100 mb-3" />
                        </Col>
                        <Col md={6} xs={12} className="order-sm-2 order-3 text-left text-xs-center">
                            <div>
                                <h5>UX/UI Designer</h5>
                                <p className="text-orange d-inline-block pr-1">New Horizon </p>
                                <p className="text-grey d-inline-block"> 13 Nov 2019</p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyt <Link to="/" className="text-orange">See More</Link></p>
                            </div>
                            <BottomNavigation
                                color="primary"
                                showLabels>
                                <BottomNavigationAction label="32 Applicant" value="recents" icon={<GroupIcon />} />
                                <BottomNavigationAction label="15 questions" value="15 Min" icon={<QuestionAnswerIcon />} />
                                <BottomNavigationAction label="15 Favorites" value="15 Min" icon={<QueryBuilderIcon />} />
                            </BottomNavigation>
                        </Col>
                        <Col md={3} xs={12} className="text-right mb-3 order-sm-3 order-1">
                            <Button variant="outlined" className="orange-btn" color="primary">
                                <ShareIcon /> share
                            </Button>
                            <Link>
                                 <BookmarkIcon className="btn-bookmark"/>
                            </Link>
                                
                        </Col>
                        <Col xs={12} className="p-3 text-center order-sm-4 order-4">
                            <Button className="mr-1" variant="outlined" disabled>
                                Adobe XD
                            </Button>
                            <Button className="mr-1" variant="outlined" disabled>
                                Graphc design
                            </Button>
                            <Button className="mr-1" variant="outlined" disabled>
                                Design
                            </Button>
                            <Button className="mr-1" variant="outlined" disabled>
                                Figma
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </ThemeProvider>
        );
    }
}