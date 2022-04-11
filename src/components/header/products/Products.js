import React from "react";
import "../../../styles/productStyle.css";
import ProductArr from "./data";
const Products = () => {
  return (
    <div className="product_body">
      <div className="product_text">
        <h4>Fresh Fruit</h4>
        <h5>
          See all
          <img src="/icons/arrowB.svg" />
        </h5>
      </div>
      <div className="products">
        {ProductArr.map((item, index) => {
          return (
            <div className="product_item">
              <div className="item_icon">
                <div className="iconPro">
                  <img src="/icons/proce.svg" />
                </div>
                <img src="/icons/like1.svg" />
              </div>
              <div className="item_img">
                <img src={item.url} />
              </div>
              <div className="item_name">
                <h5>{item.name}</h5>
              </div>
              <div className="item_pcie">
                <h4>{item.price}</h4>
                <div className="plus">
                  <img src="/icons/plus1.svg" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
