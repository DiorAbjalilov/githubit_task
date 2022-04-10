import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../../styles/navbarStyle.css";
const Navbar = () => {
  return (
    <>
      <div className="menu_btns">
        <div className="profil_btn">
          <Button>
            <MenuIcon />
            <span>GMarket</span>
          </Button>
        </div>
        <div className="header_btns">
          <div className="arrow_btn">
            <Button>
              <ArrowBackIcon />
            </Button>
          </div>
          <div className="map_btn">
            <Button>
              <img src="/icons/map.svg" />
              <span>2972 Westheimer Rd. Santa Ana</span>
              <ArrowBackIosIcon />
            </Button>
          </div>
          <div className="search_btn">
            <Button>
              <SearchIcon />
              <input type="text" placeholder="Search products in Wallmart" />
              <img src="/icons/setting.svg" />
            </Button>
          </div>
          <div className="oclock_btn">
            <Button>
              <div className="oclock_color">
                <img src="/icons/oclock.svg" />
                <span>By 09:00 — 23:00</span>
              </div>
            </Button>
          </div>
          <div className="card_btn">
            <Button>
              <div className="card_color">
                <img src="/icons/card.svg" />
              </div>
              <span>$230.80</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
