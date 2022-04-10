import React from "react";
import Banner from "./banner/Banner";
import Cards from "./cards/Cards";
import Menus from "./menus/Menus";
import Products from "./products/Products";
const Header = () => {
  return (
    <>
      <Banner />
      <Cards />
      <Menus />
      <Products />
    </>
  );
};

export default Header;
