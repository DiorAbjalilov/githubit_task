import React from "react";

const ImgBanner = () => {
  return (
    <>
      <div className="banner-text-img">
        <div className="banner_img">
          <img src="/banner.png" />
        </div>
        <div className="banner_text">
          <div className="text_left">
            <h3>Wallmart store</h3>
            <div className="cricle"></div>
            <div className="left_not">
              <img src="/icons/not.svg" />
              <h5>Store info</h5>
            </div>
            <div className="cricle"></div>
            <div className="left_not">
              <img src="/icons/dostavka.svg" />
              <h5>Store delivery time</h5>
            </div>
            <div className="cricle"></div>
            <div className="left_not">
              <img src="/icons/save.svg" />
              <h5>Saved</h5>
            </div>
          </div>
          <div className="text_right">
            <div className="right">
              <img src="/icons/starY.svg" />
              <h5>4.5</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgBanner;
