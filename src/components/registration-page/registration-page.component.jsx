import React , { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import SideImage from '../side-image/side-image.component';
import Registration from '../registration/registration.component';
import { withRouter } from 'react-router';

class RegistrationPage extends Component{
        constructor(props){
            super(props);
            this.state = {
                email : this.props.location.state.email,
                code : this.props.location.state.code
            }
        }
        render(){
        return(
                <Container fluid className="p-0 m-0 bg-light">
                    <Row className="p-0 m-0">
                        <Col md={6} xs={12} className="p-0 m-0 order-sm-1 order-2">
                            <Registration email={this.state.email} code={this.state.code}/>
                        </Col>
                        <Col md={6} xs={12} className="p-0 m-0 order-sm-2 order-1">
                             <SideImage/>
                        </Col>
                    </Row>
                </Container>
        );
    }
}
export default withRouter(RegistrationPage);