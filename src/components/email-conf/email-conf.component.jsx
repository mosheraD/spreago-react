import React,{ Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Row, Col } from 'react-bootstrap';
import { Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './email-conf.style.css';


class  EmailConf extends  Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            email : this.props.email,
            to : this.props.to,
            code : '',
            status : ''
        }
    }
    render(){
     return (
            <div className="container pt-10">
                <form 
                    onSubmit={e => {
                        e.preventDefault();
                        let inputs = document.querySelectorAll('input');
                        let code = "";
                        for(var x = 0; x < inputs.length; x++){
                            code = code + inputs[x].value
                        }
                        if(code.length === 5){
                            this.setState({...this.state , code: code})                           
                            this.props.mutate({
                                variables : {
                                    email : this.state.email,
                                    pin_code : code
                                }
                            }).then((res)=>{
                                if(res.data.verifyPinCode.Status.message === "Pin Code Is Valid"){
                                    this.props.history.push({
                                        pathname: this.state.to,
                                        state: { 
                                            email: this.state.email,
                                            code : this.state.code
                                         }
                                    });
                                }
                                this.setState({ ...this.state,status:res.data.verifyPinCode.Status.message })
                            })
                            .catch((err)=>console.log(err));
                        }}}
                    className="container mb-5" autoComplete="off">
                    <div className="pb-3">
                        <Typography variant="h4" color="primary" >Email Confirmation</Typography>
                    </div>
                    <div className="pt-3 pb-3">
                        <Typography variant="subtitle1" className="text-dark">Please write down th 5 digit coda that was sent to you on your email</Typography>
                    </div>
                    <Row className="text-center customInput">
                        <Col md={12}>
                        <div className="pr-3 d-inline-block ">
                            <TextField
                                className = "inputField"
                                color="primary"
                                variant="filled"
                                inputProps={{
                                    maxLength: 1,
                                }}
                            />
                        </div>
                        <div className="pr-3 d-inline-block">
                            <TextField
                                className = "inputField"
                                color="primary"
                                variant="filled"
                                inputProps={{
                                    maxLength: 1,
                                }}
                            />
                        </div>
                        <div className="pr-3 d-inline-block">
                            <TextField
                                className = "inputField"
                                color="primary"
                                variant="filled"
                                inputProps={{
                                    maxLength: 1,
                                }}
                            />
                        </div>
                        <div className="pr-3 d-inline-block">
                            <TextField
                                className = "inputField"
                                color="primary"
                                variant="filled"
                                inputProps={{
                                    maxLength: 1,
                                }}
                            />
                        </div>
                        <div className="d-inline-block">
                            <TextField
                                className = "inputField"
                                color="primary"
                                variant="filled"
                                inputProps={{
                                    maxLength: 1,
                                }}
                            />
                        </div>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col xs={12} className="text-center">
                            <Button size="large" type="submit" variant="contained" color="primary" to="/contained-buttons"><Typography>Next</Typography></Button>
                        </Col>
                        <Col xs={12} className="text-center pt-3">
                            <p className="text-orange">{this.state.status}</p>
                            <Typography variant="subtitle1" className="text-dark">Don't receive the mail? <Link to="/forgetPassword" className="text-orange"> Resend now !</Link></Typography>
                        </Col>
                    </Row>

                </form>
            </div>
        );  
    }
}
const SEND_CODE = gql`
mutation($email : Email ! $pin_code : String !){
    verifyPinCode(data: {
      email : $email
      pin_code : $pin_code
    }){
      Status{
        message
      }
      __typename
    }
  }
`;

export default graphql(SEND_CODE)(withRouter(EmailConf));