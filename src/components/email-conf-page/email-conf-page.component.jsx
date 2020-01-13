import React,{ Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import SideImage from '../side-image/side-image.component';
import EmailConf from '../email-conf/email-conf.component';
import { withRouter } from 'react-router';

class  EmailConfPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : this.props.location.state.email,
            to : this.props.location.state.to
        }
    }
    render(){
        return(
                <Container fluid className="p-0 m-0 bg-light">
                    <Row className="p-0 m-0">
                        <Col  md={6} xs={12} className="p-0 m-0 order-sm-1 order-2">
                            <EmailConf email={this.state.email} to={this.state.to}/>
                        </Col>
                        <Col md={6} xs={12} className="p-0 m-0 order-sm-2 order-1">
                             <SideImage/>
                        </Col>
                    </Row>
                </Container>
        );
    }
}
export default withRouter(EmailConfPage);