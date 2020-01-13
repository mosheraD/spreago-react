import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import SideImage from '../side-image/side-image.component';
import ForgetPassword from '../forget-password/forget-password.component';

function CreateAccPage(){
        return(
                <Container fluid className="p-0 m-0 bg-light">
                    <Row className="p-0 m-0">
                        <Col  md={6} xs={12} className="p-0 m-0 order-sm-1 order-2">
                            <ForgetPassword/>
                        </Col>
                        <Col md={6} xs={12} className="p-0 m-0 order-sm-2 order-1">
                             <SideImage/>
                        </Col>
                    </Row>
                </Container>
        );
}
export default CreateAccPage;