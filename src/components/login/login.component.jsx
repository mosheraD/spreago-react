import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControlLabel, Checkbox, Typography, Button, Fab } from '@material-ui/core';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { ValidatorForm} from 'react-material-ui-form-validator';

import './login.style.css';
import Logo from '../../images/logo.png';



class  Login extends Component{
    constructor(){
        super();
        this.state = {
            showPassword: false,
            checkedB: true,
            email : '',
            password : '',
            errorMessage : '',
            user : '',
            code : '',
            bearerTokenResponse : '',
            to : ''
        }
    }
    render (){
        const handleChangePassword = prop => event => {
            this.setState({ ...this.state, [prop]: event.target.value });
        };
        const handleChangeEmail = prop => event => {
            this.setState({ ...this.state, [prop]: event.target.value });
        };
        const handleClickShowPassword = () => {
            this.setState({ ...this.state, showPassword: !this.state.showPassword });
        };
    
        const handleMouseDownPassword = event => {
            event.preventDefault();
        };
        const handleChangeC = name => event => {
            this.setState({ ...this.state, [name]: event.target.checked });
        };
        console.log(this.state);
    return (
            <div className="container">
                <ValidatorForm      
                    onSubmit={e => {
                    e.preventDefault();
                    this.props.mutate({
                        variables : {
                            email : this.state.email,
                            password : this.state.password
                        }
                    }).then((res)=>
                    // console.log(res.data.login)
                    {if(res.data.login.user == null){
                         this.setState({...this.state, errorMessage : res.data.login.Status.message })
                    }else {
                        this.setState({...this.state,errorMessage : res.data.login.Status.message, user :res.data.login.user ,code : res.data.login.Status.code , bearerTokenResponse :res.data.login.BearerTokenResponse })
                        console.log(this.props.result);
                    }})
                    .catch((err)=>console.log(err));
                    }}
                     className="container pt-10 pb-1" autoComplete="off">
                    <div className="pt-1 pb-3">
                        <img src={Logo} alt="spreago logo" width="150px"/>
                    </div>
                    <div className="pb-3">
                        <Typography variant="h4" color="primary">Welcome Back</Typography>
                    </div>
                    <div className="pt-3 pb-3">
                        <Typography variant="subtitle1" className="text-dark">We make it easy for everyone to invest in real state</Typography>
                    </div>
                    <TextField
                        required
                        fullWidth
                        label="Email"
                        type ="email"
                        color="primary"
                        variant="outlined"
                        value={this.state.email}
                        onChange={handleChangeEmail('email')}
                    />
                    <FormControl required fullWidth className="mt-3" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={handleChangePassword('password')}
                            errorText={this.state.password_error_text}
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
                    <Row>
                        <Col xs={12}>
                        <div className="text-danger"><p>{this.state.errorMessage}</p></div>
                        </Col>
                        <Col lg={4} xs={6}>
                            <FormControlLabel
                                className="d-inline-block"
                                control={
                                    <Checkbox
                                        checked={this.state.checkedB}
                                        onChange={handleChangeC('checkedB')}
                                        value="checkedB"
                                        label="Remember me"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                        </Col>
                        <Col lg={{ span: 4, offset: 4 }} xs={6}>
                            <Typography  className="d-inline-block mt-1 pt-1">
                                <Link to='/forgetPassword'  className="text-orange">
                                    Forget Password ?
                                </Link>
                            </Typography>
                        </Col>
                        <Col xs={6} className="text-right">
                            <Button type="submit" size="large" variant="contained" color="primary" to={this.state.to} >Login</Button>
                        </Col>
                        <Col xs={6} className="text-left">
                            <Button size="large" variant="contained" color="secondary" to="/contained-buttons"><Link to='/createAccount' className="text-orange">Sign up</Link></Button>
                        </Col>
                        <Col md={12}> <div className="divider text-center pt-3 pb-1">Or</div></Col>
                        <Col className="text-right">
                            <Fab size="small" aria-label="add">
                                <FaGoogle size="1.5em" />
                            </Fab>
                        </Col>
                        <Col className="text-left">
                            <Fab size="small" aria-label="add">
                                <FaFacebookF size="1.5em" />
                            </Fab>
                        </Col>
                    </Row>
                        
                </ValidatorForm>
            </div>
    );
    }
   
}
const LOGIN = gql`
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
export default graphql(LOGIN)(Login);