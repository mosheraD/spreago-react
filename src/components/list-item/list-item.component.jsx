import React , {Component} from 'react';
import { Row , Col  } from 'react-bootstrap';

export default class ListItem extends Component{
    render(){
        return(
            <div>
                <Row className="m-0">
                    <Col className="p-0" xs={4}><img src="https://dummyimage.com/170/#2d2d2d/fff" width="100%" alt='list item img'/></Col>
                    <Col  xs={8}>
                        <strong>New Company</strong>
                        <p>Company-Education Management</p>
                    </Col>
                </Row>
            </div>
        )
    }
}