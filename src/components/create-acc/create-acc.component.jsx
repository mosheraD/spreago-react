import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Row, Col } from 'react-bootstrap';
import {  Typography ,Button , TextField} from '@material-ui/core';
import { withRouter } from 'react-router';

import Logo from '../../images/logo.png';


class  CreateAcc extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            errorMessage : '',
            to : '/registration',
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
                            if(res.data.sendPinCode.Status.message === "Pin Code Sended Successfully"){
                                this.props.history.push({
                                    pathname: '/emailConfirmation',
                                    state: { email: this.state.email ,
                                             to:    this.state.to
                                        }
                                  });
                            }
                        })
                        .catch((err)=>console.log(err));
                        }} className="container" autoComplete="off">
                    <div className="pt-1 pb-3">
                        <img src={Logo} alt="spreago logo" width="150px"/>
                    </div>
                    <div className="pb-3">
                        <Typography variant="h4" color="primary" >Create Account</Typography>
                    </div>
                    <div className="pt-3 pb-3">
                        <Typography variant="subtitle1" className="text-dark">Please enter your email address and you will receive the confirmation code to continue your registeration</Typography>
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
                    <Row className="pt-5">
                        <Col xs={6} className="text-right">
                            <Button type="submit" size="large" variant="contained" color="primary"><Typography>Continue</Typography></Button>
                        </Col>
                        <Col xs={6} className="text-left">
                            <Button size="large" variant="contained" color="secondary" to="/contained-buttons"><Typography>Login</Typography></Button>
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
export default graphql(SEND_CODE)(withRouter(CreateAcc))