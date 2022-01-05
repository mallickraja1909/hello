import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import './upper-header.css';

import logo from '../../assets/images/logo.png';

function AppUpperheader() {
    return(
        <div className="Upper-header">
            
            <Row>
                      <Col span={6} order={4}>
                      <Button type="primary">APPOINMENT</Button>
                      </Col>
                      <Col span={6} order={3}>
                      <i className="fas fa-phone"></i>
                      <strong>Call Now</strong>
                      <br/>
                      <span>+ 123455677</span>
                      </Col>
                      <Col span={6} order={2}>
                      <i className="far fa-envelope"></i>
                      <strong>Email</strong>
                      <br/>
                      <a href="mailto:info@medic.com">
                         <span>info@medic.com</span>
                      </a>
                      </Col>
                      <Col span={6} order={1}>
                      <img src={logo} alt="Hospital Care" width="180" height="90"></img>
                     </Col>
                 </Row>

           

        </div>

    );
}

export default AppUpperheader;