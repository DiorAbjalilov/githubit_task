import React from "react";

const CardBanner = () => {
  return (
    <>
      <div className="card_img">
        <img src="/icons/image 2.png" />
      </div>
      <div className="banner_card">
        <div className="card_top">
          <img src="/icons/storW.svg" />
          <h5>Shop</h5>
        </div>
        <div className="card_bottom">
          <img src="/icons/eat.svg" />
          <h5>Recipes</h5>
        </div>
      </div>
    </>
  );
};

export default CardBanner;
