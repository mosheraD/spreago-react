import React, { Component } from 'react';
import {  Container , Row , Col  } from 'react-bootstrap';
import LatestInterview from '../latest-Interviews/latest-Interviews.component';
import Header from '../header/header.component';
import AddToList from '../add-to-list/add-to-list.component';
import RecommendedArticles from '../recommended-articles/recommended-articles.component';
import ExplorePremium from '../explore-premium/explore-premium-component';
import FindCandidate from '../find-candidate/find-candidate.component';
import LatestBiographies from '../latest-biographies/latest-biographies.component';
import Footer from '../footer/footer.component';

export default class  HomepageApplicant extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Container>
                <Row>
                    <Col className="p-0" md={8}>
                        <LatestInterview/>
                        <FindCandidate/>
                        <LatestBiographies/>
                    </Col>
                    <Col className="p-0" md={4}>
                        <ExplorePremium/>
                        <AddToList/>
                        <RecommendedArticles/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </div>
        );
    }
}