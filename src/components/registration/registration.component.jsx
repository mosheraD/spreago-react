import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql  } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { gql } from 'apollo-boost';
import { Row, Col } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControlLabel, Typography, Button, Radio ,RadioGroup , Select} from '@material-ui/core';

import Logo from '../../images/logo.png';


import './registration.style.css'

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            password: '',
            showPassword: false,
            country :  "",
            city : "",
            type : "",
            email : this.props.email,
            code : this.props.code,
            error : ''
        }
    }
    renderCountris(){
            return(
                this.props.data.countries.map(country=>{
                    return(
                        <option value={country.id}>{country.name}</option>
                    );
                })
            );
    }
    renderCities(){
        return(
            this.props.data.countries.map(country=>
                        country.cities.map(city=>{
                            return(
                                <option value={city.id}>{city.name}</option>
                            );                   
                        })
                    
                )
        );
}
    render (){
        if(this.props.data.loading){
            return <div>Loading ...</div>
        }
        const handleChange = prop => event => {
            this.setState({ ...this.state, [prop]: event.target.value });
          };
        const handleClickShowPassword = () => {
            this.setState({ ...this.state, showPassword: !this.state.showPassword });
        };
        const handleMouseDownPassword = event => {
            event.preventDefault();
        };
        //const [value, setValue] = React.useState('female');
        const handleChangeRadio = event => {
            this.setState({...this.state, type : event.target.value});
          };
    return (
            <div className="container pt-10">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.mutate({
                            variables : {
                                name : this.state.name,
                                password : this.state.password,
                                countries_id : this.state.country,
                                cities_id :  this.state.city,
                                user_type_id : this.state.type,
                                email : this.state.email,
                                pin_code : this.state.code
                            }
                        }).then((res)=>
                        // this.props.history.push({
                        //     pathname: '/',
                        //     state: { email: this.state }
                        //   }
                        this.setState({...this.state , error :res.data.register.Status.message }));
                        }}
                    className="container" autoComplete="off">
                    <div className="pt-1 pb-3">
                        <img src={Logo} alt="spreago logo" width="150px"/>
                    </div>
                    <div className="pb-3">
                        <Typography variant="h4" color="primary" >Registration Form</Typography>
                        <Typography variant="subtitle1" className="text-dark">Please complete the following data to complete your profile</Typography>
                    </div>
                    <div className="pt-3 pb-3">
                    <Typography variant="subtitle1" className="text-danger">{this.state.error}</Typography>
                    </div>
                    <TextField
                            required
                            fullWidth
                            label="User Name"
                            color="primary"
                            variant="outlined"
                            onChange={handleChange('name')}
                        />
                    <FormControl required fullWidth className="mt-3" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
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
                    <Row>
                    <Col xs={6}>
                            <FormControl  fullWidth className="mt-3" variant="outlined">
                                <InputLabel  htmlFor="countries-select">
                                    Country
                                </InputLabel>
                                <Select                              
                                value={this.state.country}
                                onChange={handleChange('country')}
                                labelWidth="55"
                                inputProps={{
                                    name: "Countries",
                                    id: 'countries-select',
                                }}
                                >
                                    {this.renderCountris()}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6}>
                            <FormControl  fullWidth className="mt-3" variant="outlined">
                                <InputLabel  htmlFor="cities-select">
                                    City
                                </InputLabel>
                                <Select
                                value={this.state.city}
                                onChange={handleChange('city')}
                                labelWidth="35"
                                inputProps={{
                                    name: "cities",
                                    id: 'cities-select',
                                }}
                                >
                                    {this.renderCities()}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col>
                            <Typography variant="subtitle1" className="text-dark">Register as:</Typography>
                        </Col>
                        <Col xs={12}>
                        <RadioGroup required aria-label="type" name="gender2" value={this.state.type} onChange={handleChangeRadio}>
                            <FormControlLabel
                                className="d-inline-block"
                                value="1"
                                control={<Radio color="primary" />}
                                label="Employer"
                                labelPlacement="Employer"
                                />
                            <FormControlLabel
                                className="d-inline-block"
                                value="2"
                                control={<Radio color="primary" />}
                                label="Applicant"
                                labelPlacement="Applicant"
                                />
                            </RadioGroup>
                        </Col>
                        <Col xs={12} className="text-center">
                            <Button size="large" type="submit" variant="contained" color="primary" >Get Started</Button>
                        </Col>
                    </Row>
                </form>
            </div>
    );
    }
}
const GET_CONTRIES_AND_CITIES = gql`
query{
    countries{
      id
      name
      __typename
    cities{
      id
      name
      code
      __typename
    }
    }
  } 
`;

const REGISTRATION = gql`
mutation( $name : String ! $password : Password ! $countries_id : ID! $cities_id : ID ! $user_type_id : ID !  $email : Email ! $pin_code : String !){
    register(data:
       {
        newUserInput:{
            name : $name
            password : $password
            countries_id : $countries_id
            cities_id :  $cities_id
            user_type_id : $user_type_id
        }
          verifyPinCodeInput:{
              email : $email
              pin_code : $pin_code
          }
       }
    ){
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
`
export default compose(graphql(GET_CONTRIES_AND_CITIES),graphql(REGISTRATION))(withRouter(Registration));