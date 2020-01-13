import React from "react";
import {  Container , Row , Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter ,FaInstagram} from 'react-icons/fa';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

import Logo from './images/spreago-logo-dark.png';

const Footer = () => {
  return (
    <div className="font-small pt-4 mt-4 bg-grey">
      <Container className="text-center text-md-left">
        <Row>
          <Col md="4">
            <h5 className="text-dark">
                <img src={Logo} alt="Logo footer"/>
            </h5>
            <p className="mb-1">
                Privacy policy | terms of services
            </p>
            <p className="mb-1">
                © 2019-2010 Spreago, All Copyrights Reserved
            </p>
            <div className="text-grey mb-1">
                <Link className="pr-3"><FaInstagram/></Link>
                <Link className="pr-3"><FaTwitter/></Link>
                <Link className="pr-3"><FaFacebookF/></Link>
            </div>
            <div>
                <h6>
                  Subscribe to our newsletter
                </h6>
                <div className="d-inline-block pr-1">
                  <Button variant="outlined" size="large">Email Address</Button>
                </div>
                <div className="d-inline-block pl-1">
                  <Button color="primary" variant="outlined" size="large">Subscribe</Button>
                </div>
            </div>
            
          </Col>
          <Col md="3" className="text-grey mt-3">
            <ul className="p-0">
            <h5 className="text-dark">About</h5>
              <li className="list-unstyled">
                <Link >Careers</Link>
              </li>
              <li className="list-unstyled">
                <Link >Partnerships</Link>
              </li>
              <li className="list-unstyled">
                <Link >Privacy</Link>
              </li>
              <li className="list-unstyled">
                <Link >Policy</Link>
              </li>
              <li className="list-unstyled">
                <Link >Terms of Service </Link>
              </li>
              <li className="list-unstyled">
                <Link >Intellectual Property Claims</Link>
              </li>
            </ul>
          </Col>
          <Col md="3" className="text-grey mt-3">
            <ul className="p-0">
            <h5 className="text-dark">Support</h5>
              <li className="list-unstyled">
                <Link >How it works?</Link>
              </li>
              <li className="list-unstyled">
                <Link >Help & Support</Link>
              </li>
              <li className="list-unstyled">
                <Link >Trust & Safety</Link>
              </li>
            </ul>
          </Col>
          <Col md="2" className="text-grey mt-3">
            <ul className="p-0">
            <h5 className="text-dark">Community</h5>
              <li className="list-unstyled">
                <Link >Blog</Link>
              </li>
              <li className="list-unstyled">
                <Link >Events</Link>
              </li>
              <li className="list-unstyled">
                <Link >Podcasts</Link>
              </li>
              <li className="list-unstyled">
                <Link >Invite a Friend</Link>
              </li>
              <li className="list-unstyled">
                <Link >Affiliates</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <hr/>
      </Container>
      <div className="footer-copyright text-center text-grey pb-3">
        <Container fluid>
            <div className="d-inline-block">
                <Link href="#">English (UK)</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">العربية</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Français (France)</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Italiano</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Deutsch</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Русский</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Español</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Bahasa Indonesia</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Türkçe)</Link>
            </div>
            <div className="d-inline-block pr-1 pl-1"> | </div>
            <div className="d-inline-block">
                <Link href="#">Português</Link>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;