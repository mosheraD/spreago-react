import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Row, Col } from 'react-bootstrap';
import {  Typography ,Button} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import  {FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton } from '@material-ui/core';
import { withRouter } from 'react-router';


class  ResetPassword extends Component{
    constructor(){
        super();
        this.state = {
            showPassword : false,
            showConfirmPassword : false ,
            password : '',
            confirmPassword : ''
        }
    }
    render(){
            const handleClickShowPassword = () => {
                 this.setState({ ...this.state, showPassword: !this.state.showPassword });
             };
             const handleClickShowConfirmPassword = () => {
                this.setState({ ...this.state, showConfirmPassword: !this.state.showConfirmPassword });
            };
            const handleMouseDownPassword = event => {
                event.preventDefault();
            };
            const handleMouseDownConfirmPassword = event => {
                event.preventDefault();
            };
            const handleChange = prop => event => {
                this.setState({ ...this.state, [prop]: event.target.value });
            };
    return (
            <div className="container pt-10">
                <form
                    onSubmit = {e=>{
                        e.preventDefault();
                        if(this.state.password === this.state.confirmPassword)
                        {
                            this.props.mutate({
                                variables : {
                                    email : this.state.email,
                                    password : this.state.password
                                }
                            }).then((res)=>console.log(res))
                        }
                        else {
                            console.log("Nah")
                        }
                    }}
                  className="container" autoComplete="off">
                    <div className="pb-3">
                        <Typography variant="h4" color="primary" >Reset your password</Typography>
                    </div>
                    <div className="pt-3 pb-3">
                        <Typography variant="subtitle1" className="text-dark">Please enter your new password</Typography>
                    </div>
                    <FormControl required fullWidth className="mt-3" variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={handleChange('password')}
                            inputProps={{ pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControl required fullWidth className="mt-3" variant="outlined">
                        <InputLabel htmlFor="Confrm-Password"> Confrm Password </InputLabel>
                        <OutlinedInput
                            id="Confrm-Password"
                            type={this.state.showConfirmPassword ? 'text' : 'Password'}
                            value={this.state.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            inputProps={{ pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                        edge="end"
                                    >
                                        {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={125}
                        />
                    </FormControl>
                    <Row className="pt-3">
                        <Col xs={12} className="text-center">
                            <Button size="large" type="submit" variant="contained" color="primary" to="/contained-buttons">Continue</Button>
                        </Col>
                    </Row>
                  
                </form>
            </div>
    );
    }
}

const RESET_PASSWORD = gql`
mutation( $email : Email ! $password : String ! ){
   login(data: {
     attempt:{
       email: $email
       password: $password 
     }
   }){
     BearerTokenResponse{
       access_token
       token_type
     }
     user{
       name
     }
     Status{
       message
       code
       check
       title
     }
   }
 }
`;

export default graphql(RESET_PASSWORD)(withRouter(ResetPassword));