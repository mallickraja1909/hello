import React from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import AppTopheader from './components/common/top-header';
import AppUpperheader from './components/common/upper-header';
import AppNavheader from './components/common/navbar-header';
import AppHome from './views/home';




function App() {
  return (
    <Layout className="mainlayout">
      <AppTopheader/>
      <AppUpperheader/>
      <AppNavheader/>  
      <AppHome/>
    </Layout>
  );
}

export default App;
