import React from "react";
import '../home/expert-doctors.css';
import doctor1 from '../../assets/images/doctor1.jpg';
import doctor2 from '../../assets/images/doctor2.jpg';
import doctor3 from '../../assets/images/doctor3.jpg';

import { Card, Col, Row, Button } from 'antd';


const { Meta } = Card;

function AppExpert() {
    return(
        <div className="container-fluid">
            <div className="titleHolder">
                <h1>Our Expert Doctors</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo, rerum
                             natus nobis deleniti doloremque minima odit voluptatibus ipsam animi?</p>
            </div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                <Col span={8}>
                <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor1} />}>
                <Meta title="DR. ROBERT BARRETHION" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /> <br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
                </Card>
                </Col>
                <Col span={8}>
                <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={doctor2} />}>
                <Meta title="DR. MARRY LOU" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                <Button type="primary">BOOK APPOINTMENT</Button>
               </Card>
               </Col>
               <Col span={8}>
                   <div className="doctor1">
                    <Card  bordered={true}
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src={doctor3} />}>
                       <Meta title="DR. SANSA STARK" 
                     description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                     <Button type="primary">BOOK APPOINTMENT</Button>
                   </Card>
                 </div>
               </Col>
              </Row>
            </div>
        </div>
    );
}

export default AppExpert;