import { Button } from "@mui/material";
import React from "react";
import "../../../styles/menusStyle.css";
import BtnArr from "./data";
const Menus = () => {
  return (
    <div className="menus_body">
      <div className="menu_setting">
        <Button>
          <img src="/icons/settingB.svg" />
        </Button>
      </div>
      <div className="menu_btns">
        {BtnArr.map((item, index) => {
          return (
            <Button>
              {item.name}
              {item.icon && <img src={item.icon} />}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Menus;
