import React from "react";
import Slider from "react-slick";
import "antd/dist/antd.css";
import "./hero.css";

function AppHero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="heroImg1">
          <h1 className="hero-text-h1">Best Medical Services</h1>
        </div>
        <div className="heroImg2">
          <h1 className="hero-text-h1">Our Best Surgeons</h1>
        </div>
        <div className="heroImg3">
          <h1 className="hero-text-h1">We Care About Your Health</h1>
        </div>
      </Slider>
    </div>
  );
}

export default AppHero;
