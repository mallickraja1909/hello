import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from "antd";
import "../home/services.css";
import dormitory from '../../assets/images/dormitory.jpg';
import germs from '../../assets/images/germs.jpg';
import psycology from '../../assets/images/psycology.jpg';

const { Meta } = Card;


export default function AppServices() {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="container-fluid">
      <div className="titleHolder">
        <h1>Provided Services</h1>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet. qui suscipit atque fugiat officia corporis rerum eaque
          neque totam animi, sapiente culpa. Architecto!
        </p> */}
      </div>
      <div className="site-card-wrapper">
        <Slider {...settings}>
       <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={germs} />}>
                <Meta title="GERMS" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div>
        <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={psycology} />}>
                <Meta title="PSYCOLOGY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>     

               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={germs} />}>
                <Meta title="GERMS" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>           
                    
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={dormitory}/>}>
                <Meta title="DORMITORY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
               
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={germs} />}>
                <Meta title="GERMS" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={dormitory} />}>
                <Meta title="DORMITORY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={psycology} />}>
                <Meta title="PSYCOLOGY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
               
               </Card>
        </div>
        </Slider>
      </div>
    </div>
  );
}
