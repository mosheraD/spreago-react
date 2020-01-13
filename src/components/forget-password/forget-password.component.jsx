import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Row, Col } from 'react-bootstrap';
import {  Typography ,Button , TextField} from '@material-ui/core';
import { withRouter } from 'react-router';


class  ForgetPassword extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            errorMessage : '',
            to : '/resetPassword',
        }
    }
    render(){
    const handleChangeEmail = prop => event => {
        this.setState({ ...this.state, [prop]: event.target.value });
    };
    return (
            <div className="container pt-10">
                <form 
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.mutate({
                            variables : {
                                email : this.state.email,
                            }
                        }).then((res)=>{
                            if(res.data.sendPinCode.Status.message === "pin code sended successfully"){
                                this.props.history.push({
                                    pathname: '/emailConfirmation',
                                    state: {    
                                        email : this.state.email,
                                        to    : this.state.to }
                                  });
                            }
                        })
                        .catch((err)=>console.log(err));
                        }}
                 className="container" autoComplete="off">
                    <div className="pb-3">
                        <Typography variant="h4" color="primary" >Reset your password</Typography>
                    </div>
                    <div className="pt-3 pb-3">
                        <Typography variant="subtitle1" className="text-dark">Please enter your email address and we will send you a confirmation mail to your inbox</Typography>
                    </div>
                    <TextField
                             required
                            fullWidth
                            type = "email"
                            label="Email"
                            color="primary"
                            variant="outlined"
                            value={this.state.email}
                            onChange={handleChangeEmail('email')}
                        />
                    <Row className="pt-3">
                        <Col xs={12} className="text-center">
                            <Button size="large" variant="contained" type="submit" color="primary" to="/contained-buttons"><Typography>Continue</Typography></Button>
                        </Col>
                    </Row>
                  
                </form>
            </div>
    );
 }
}
const SEND_CODE = gql`
mutation( $email : Email! ){
    sendPinCode(email: $email){
      Status{
        message
      }
      __typename
    }
  }
`;
export default graphql(SEND_CODE)(withRouter(ForgetPassword));
