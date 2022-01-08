import React from "react";
import 'antd/dist/antd.css';
import AppHero from "../components/home/hero";
import AppTiming from "../components/home/timing";
import AppAbout from "../components/home/about";
import TabsCard from "../components/home/info";
import AppServices from "../components/home/sevices";
import AppExpert from "../components/home/expert-doctors";
import AppReview from "../components/home/reviews";
import AppFaq from "../components/home/faq";
import Demo from "../components/home/appointment";
import AppFooter from "../components/common/footer";
import { Divider } from "antd";




function AppHome()  {
    return(
     <div className="main">
         <AppHero/>
         <Divider/>
         <AppTiming/>
         <Divider/>
         <AppAbout/>
         <TabsCard/>
         <Divider/>
         <AppServices/>
         <Divider/>
         <AppExpert/>
         <Divider/>
         <AppReview/>
         <AppFaq/>
         <Divider/>
         <Demo/>
         <AppFooter/>
     </div>

    );
}

export default AppHome;