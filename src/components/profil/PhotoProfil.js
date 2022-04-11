import React from "react";

const PhotoProfil = () => {
  return (
    <>
      <div className="photo_setting">
        <div className="profil_setting">
          <img src="/icons/setting1.svg" />
        </div>
        <div className="photo_user">
          <img src="/profil.png" />
        </div>
        <div className="profil_notif">
          <img src="/icons/notif.svg" />
        </div>
      </div>
      <div className="profil_name">
        <h5>Roberto Cavanali</h5>
        <h6>(+99893) 100-00-00</h6>
      </div>
      <div className="profil_balance">
        <div>
          <h5>Wallet balance</h5>
          <h4>$425,97</h4>
        </div>
        <div>
          <img src="/icons/plus.svg" />
        </div>
      </div>
      <div className="profil_share">
        <img src="/icons/share.svg" />
        <h5>Share wallet</h5>
      </div>
    </>
  );
};

export default PhotoProfil;
