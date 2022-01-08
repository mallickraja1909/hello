// import React from 'react';
// import { Card  } from 'antd';
// import { useState } from 'react';
// import '../home/info.css';

// const tabList = [
//   {
//     key: 'DORMITORY',
//     tab: 'DORMITORY',
//   },
//   {
//     key: 'ORTHOPEDIC',
//     tab: 'ORTHOPEDIC',
//   },
//   {
//     key: 'SONOGRAM',
//     tab: 'SONOGRAM',
//   },
//   {
//     key: 'XRAY',
//     tab: 'XRAY',
//   },
//   {
//     key: 'DIAGNOSTIC',
//     tab: 'DIAGNOSTIC',
//   },
// ];

// const contentList = {
//   DORMITORY: <div className="img-one">
//     <img loading="lazy"   alt=""></img>
//       <span>DORMITORY</span>
    
//   </div>,
//   ORTHOPEDIC: <div className="img-two">
//   <img loading="lazy"   alt=""></img>
    
  
//  </div>,
//  SONOGRAM: <div className="img-three">
// <img loading="lazy"   alt=""></img>
  

// </div>,
//  XRAY: <div className="img-four">
// <img loading="lazy"   alt=""></img>
  

// </div>,
// DIAGNOSTIC: <div className="img-five">
// <img loading="lazy"   alt=""></img>
  

// </div>,
  
// };

// const TabsCard = () => {
//   const [activeTabKey1, setActiveTabKey1] = useState('tab1');

//   const onTab1Change = key => {
//     setActiveTabKey1(key);
//   };
 

//   return (
//     <>
//       <Card
//         style={{ width: '100%' }}
//         tabList={tabList}
//         activeTabKey={activeTabKey1}
//         onTabChange={key => {
//           onTab1Change(key);
//         }}
//       >
//         {contentList[activeTabKey1]}
//         <card>

//         </card>
//       </Card>
     
//     </>
//   );
// };

// export default TabsCard;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from "antd";
import "../home/services.css";
import One from '../../assets/images/one.jpg';
import Two from '../../assets/images/two.jpg';
import Three from '../../assets/images/three.jpg';
import Four from '../../assets/images/four.jpg';
import Five from '../../assets/images/five.jpg';

const { Meta } = Card;


export default function TabsCard() {
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
        <h1>----------</h1>
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
                cover={<img alt="example" src={One} />}>
                <Meta title="DORMITORY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div>
        <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={Two} />}>
                <Meta title="'ORTHOPEDIC" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>     

               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={Three} />}>
                <Meta title="SONOGRAM" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>           
                    
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={Four}/>}>
                <Meta title="XRAY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
               
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={Five} />}>
                <Meta title="DIAGNOSTIC" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        {/* </div><div>
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
               
               </Card> */}
        </div>
        </Slider>
      </div>
    </div>
  );
}






    


   

