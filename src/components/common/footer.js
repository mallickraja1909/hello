import React from "react";
import { Layout, Button,} from 'antd';
import { Card, Col, Row } from 'antd';
import '../common/footer.css';
import logo from '../../assets/images/logo.png';
import logo6 from '../../assets/images/logo6.jpg';
import { PhoneTwoTone, MailOutlined, CompassOutlined, RightOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Footer } = Layout;

function AppFooter() {
    return(
        <Layout className="layout">
           <div className="logo" />
                <Footer>
                <div className="site-card-wrapper">
                <Row gutter={16}>
      <Col span={8}>
        <img src={logo} alt="Hospital Care" width="180" height="90"></img> 
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
       <h1><CompassOutlined />Modamba, NY 80021, United States</h1>
       <h1><MailOutlined />support@hospitalcare.com</h1>
       <h1><PhoneTwoTone />(88017) +123 4567</h1>
      </Col>
      <Col span={8}>
          <h1><strong>SERVICES</strong></h1>
          <p><Button type="link"><RightOutlined />Orthopadics Liabilities</Button></p>
          <p><Button type="link"><RightOutlined />Dental Clinic</Button></p>
          <p><Button type="link"><RightOutlined />Dormamu Clinic</Button></p>
          <p><Button type="link"><RightOutlined />Psycological Clinic</Button></p>
          <p><Button type="link"><RightOutlined />Gynaecological Clinic</Button></p>
    
      </Col>
      <Col span={8}>
        <h1><strong>RECENT POSTS</strong></h1>
        <Meta
      avatar={<img src={logo6} alt="Hospital Care" width="70" height="70"></img>}
      title="A lesson adip isicing"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem."
        />
        <Meta
      avatar={<img src={logo6} alt="Hospital Care" width="70" height="70"></img>}
      title="How to make an event"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem."
        />
      </Col>
    </Row>
    </div>

                </Footer>
                <Footer style={{ textAlign: 'center' }}>COPYRIGHT HOSPITALCARE ©2022</Footer>
        </Layout>
    );
}

export default AppFooter;