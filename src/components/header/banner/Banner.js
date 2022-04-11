import React from "react";
import CardBanner from "./CardBanner";
import ImgBanner from "./ImgBanner";
import "../../../styles/bannerStyle.css";

const Banner = () => {
  return (
    <>
      <div className="banner_body">
        <ImgBanner />
        <CardBanner />
      </div>
    </>
  );
};

export default Banner;
