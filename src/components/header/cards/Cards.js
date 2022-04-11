import React from "react";
import "../../../styles/cardsStyle.css";
import CardsData from "./data";
const Cards = () => {
  return (
    <>
      <div className="cards_body">
        {CardsData.map((item) => {
          return (
            <div
              className="card_item"
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <div className="card_text">
                <h4>{item.name}</h4>
                <h6>{item.title}</h6>
                {item.button && (
                  <button style={{ color: item.color }}>{item.button} </button>
                )}
              </div>
              <div className="card_img">
                <img src={item.url} />
              </div>
            </div>
          );
        })}
        <div className="card_item img" key={5}>
          <div className="card_text color">
            <h4>Collection</h4>
            <h6>Sale full Pack</h6>
            <button>Collect </button>
          </div>
          <div className="card_img">{/* <img src="/img4.png" /> */}</div>
        </div>
        <div className="card_item" key={6}>
          <div className="card_text">
            <h4>Sale 40%</h4>
            <h6>Very tasty pasta</h6>
            <button>Test40</button>
          </div>
          <div className="card_img">{/* <img src="/img4.png" /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
