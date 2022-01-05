import React from 'react';
import './header.css';
import { Menu } from 'antd';

function AppNavheader() {
    return(
        <div className="navbar">
             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                      <Menu.Item key="HOME">Home</Menu.Item>
                      <Menu.Item key="ABOUT">ABOUT</Menu.Item>
                      <Menu.Item key="SERVICE">SERVICE</Menu.Item>
                      <Menu.Item key="GALLERY">GALLERY</Menu.Item>
                      <Menu.Item key="TEAM">TEAM</Menu.Item>
                      <Menu.Item key="APPOINMENT">APPOINMENT</Menu.Item>
                      <Menu.Item key="BLOGS">BLOGS</Menu.Item>
                      <Menu.Item key="CONTACT">CONTACT</Menu.Item>
                 </Menu>

        </div>

    );
}

export default AppNavheader;