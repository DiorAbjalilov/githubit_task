import React, { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profil from "./components/profil/Profil";
import Drawer from "@mui/material/Drawer";
import "./styles/basicStyle.css";
import DrawerComp from "./components/drawer/DrawerComp";
function App() {
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <section className="basic_body">
        <nav className="basic_navbar">
          <Navbar drawer={toggleDrawer("right", true)} />
        </nav>
        <header className="profil_header">
          <div className="profil_block">
            <Profil />
          </div>
          <div className="header_block">
            <Header />
          </div>
        </header>
      </section>
      <div className="drawer_black">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <DrawerComp />
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default App;
