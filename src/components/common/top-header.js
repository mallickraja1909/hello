import React from 'react';
import { PageHeader, Menu } from 'antd';
import { TwitterOutlined, FacebookOutlined, GoogleOutlined, InstagramOutlined  } from '@ant-design/icons';
import { Tag } from 'antd';
import './top-header.css';

function AppTopheader() {
    return(
        <div className="site-page-header-ghost-wrapper">
            
            <PageHeader
      ghost={false}
      subTitle="Opening Hours : Saturday to Tuesday - 8am to 10pm"
      extra={[<Menu>
        <Tag icon={<TwitterOutlined />} color="#55acee">
                          Twitter
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                          Facebook
                </Tag>
                <Tag icon={<GoogleOutlined />} color="magenta">
                          Google
                </Tag>
                <Tag icon={<InstagramOutlined />} color="magenta">
                          Insta
                </Tag>
                </Menu>,
      ]}
    >
    </PageHeader>
            

        </div>
    );
}

export default AppTopheader;