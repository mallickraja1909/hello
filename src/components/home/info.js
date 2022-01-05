import React from 'react';
import { Card  } from 'antd';
import { useState } from 'react';
import '../home/info.css';

const tabList = [
  {
    key: 'DORMITORY',
    tab: 'DORMITORY',
  },
  {
    key: 'ORTHOPEDIC',
    tab: 'ORTHOPEDIC',
  },
  {
    key: 'SONOGRAM',
    tab: 'SONOGRAM',
  },
  {
    key: 'XRAY',
    tab: 'XRAY',
  },
  {
    key: 'DIAGNOSTIC',
    tab: 'DIAGNOSTIC',
  },
];

const contentList = {
  DORMITORY: <div className="img-one">
    <img loading="lazy"   alt=""></img>
      <span>DORMITORY</span>
    
  </div>,
  ORTHOPEDIC: <div className="img-two">
  <img loading="lazy"   alt=""></img>
    
  
 </div>,
 SONOGRAM: <div className="img-three">
<img loading="lazy"   alt=""></img>
  

</div>,
 XRAY: <div className="img-four">
<img loading="lazy"   alt=""></img>
  

</div>,
DIAGNOSTIC: <div className="img-five">
<img loading="lazy"   alt=""></img>
  

</div>,
  
};

const TabsCard = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };
 

  return (
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
        <card>

        </card>
      </Card>
     
    </>
  );
};

export default TabsCard;







    


   

