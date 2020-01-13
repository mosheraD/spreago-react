import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage  from './components/login-page/login-page.component';
import CreateAccPage from './components/create-acc-page/create-acc-page.component';
import EmailConfirmationPage from './components/email-conf-page/email-conf-page.component';
import RegistrationPage from './components/registration-page/registration-page.component';
import ForgetPasswordPage from './components/forget-password-page/forget-password-page.component';
import HomepageApplicant from './components/homepage-applicant/homepage-applicant.component';
import ResetPassword from './components/reset-password-page/reset-password-page.component';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';


const theme = createMuiTheme({
   palette: {
       primary: { main: '#E85A19', light: '#fff', dark: '#ea5f11' },
       secondary: { main: '#fff' , light:'#000' ,dark:'#f1eeee' },
       contrastText: { main: '#E1631C' },
   },
   typography: {
           fontSize: 13,
           button: {
               textTransform: 'none',
               fontSize: 10,
             }
   }
});

function App() {
  return (
   <ThemeProvider color="light" theme={theme}>
    <Router basename='/'> 
    <Switch>
        <Route exact path="/">
           <LoginPage/>
        </Route>
        <Route exact path="/createAccount">
           <CreateAccPage/>
        </Route>
        <Route exact path="/emailConfirmation">
           <EmailConfirmationPage/>
        </Route>
        <Route exact path="/registration">
           <RegistrationPage/>
        </Route>
        <Route exact path="/forgetPassword">
           <ForgetPasswordPage/>
        </Route>
        <Route exact path="/homepageApplicant">
           <HomepageApplicant/>
        </Route>
        <Route exact path="/resetPassword">
           <ResetPassword/>
        </Route>
      </Switch>
  </Router>
        </ThemeProvider>
  
  );
}

export default App;
