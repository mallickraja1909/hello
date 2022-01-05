import React from 'react';
import './timing.css';
import { Card, Col, Row, Button, Divider } from 'antd';
import { PhoneTwoTone } from '@ant-design/icons';

     

  function AppTiming() {
      return(
        
        <div className="timing">
            
           < Row gutter={16}>
      <Col span={8}>
        <Card  bordered={true}>
        <h1><PhoneTwoTone /></h1>
        <h1>EMEGENCY CASES</h1><br/>
        <p>1-800-700-6200</p><br/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        
        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={true}>
        <h1>24 HOUR SERVICE</h1><br/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit vel eum</p><br/>
        <Button type="primary">Read More</Button>
          
        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={true}>
        <h1>WORKING HOURS</h1><br/>
        <p>MON - FRI -  8:00 - 17:00</p><Divider/>
        <p>MON - FRI -  8:00 - 17:00</p>
        </Card>
      </Col>
    </Row>

        </div>
      
      );
  }

  export default AppTiming;