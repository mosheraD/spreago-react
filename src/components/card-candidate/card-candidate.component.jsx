import React, { Component } from 'react';
import { Button} from '@material-ui/core';
import { Card } from 'react-bootstrap';

export default class  CardCandidate extends Component{
    render(){
        return(
        <Card className="bg-white p-3 border-0">
            <div className="text-center pb-3">
                 <img src="https://dummyimage.com/170/#2d2d2d/fff" alt="interview img" width="100" className="rounded-circle" />  
            </div>
            <div className="text-center">
                <div><strong>John Doe</strong></div>
                <div><p className="text-grey mb-0">Senior Web Developer</p></div>
                <div><p className="text-grey">Cairo, Egypt</p></div>
                <Button variant="outlined" color="primary" size="large">Compare Packages</Button>
            </div>
        </Card>);
    }
}
