import React from "react";
import "../../styles/profilStyle.css";
import PhotoProfil from "./PhotoProfil";
import ListArr from "./data";
const Profil = () => {
  return (
    <>
      <div className="profil_body">
        <div className="profil_photo">
          <PhotoProfil />
        </div>
        <div className="profil_lists">
          {ListArr.map((item) => {
            return (
              <div key={item.id} className="list_id">
                <img src={item.img} />
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </div>
        <div className="profil_bottom">
          <div className="bottom_item">
            <img src="/icons/sound.svg" />
            <h5>Help center</h5>
            <img src="/icons/arrow.svg" />
          </div>
          <div className="bottom_item">
            <img src="/icons/out.svg" />
            <h5>Logout</h5>
            <img src="/icons/arrow.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
