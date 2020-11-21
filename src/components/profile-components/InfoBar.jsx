import React from "react";
import "../Profile.css";

function InfoBar() {
  return (
    <div className="right-side">
      <div className="nav">
        <ul>
          <li className="user-post">Posts</li>
          <li className="user-review">Review</li>
          <li className="user-setting">Settings</li>
        </ul>
      </div>
      <div className="profile-body">
        <div className="profile-posts tab">
          <p>
            this is a profile post and its just a template i will finishthsihegd
            efzfgezifygyezgfif uefhizugfruizgfuizgfrzu uzrgfruzigfiu
            fuirgzuifgziufiu urfi uzruzuz
          </p>
        </div>
        <div className="profile-review tab ">
          <p>
            Lorem Ipsum est un texte d'espace réservé couramment utilisé dans
            les industries graphique, imprimée et éditoriale pour prévisualiser
            les mises en page et les maquettes visuelles.
          </p>
        </div>
        <div className="profile-settings tab">
          <p>
            Lorem Ipsum est un texte d'espace réservé couramment utilisé dans
            les industries graphique, imprimée et éditoriale pour prévisualiser
            les mises en page et les maquettes visuelles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
