import React from "react";
import "./success.css";

const Success = ({ exChoosen }) => {
  console.log(exChoosen);
  const addedItems = Object.keys(exChoosen).filter(
    (key) => exChoosen[key] === true
  );

  return (
    <div className="main-container">
      <div className="pagewidth">
        <div className="basliklar">
          <h2>Teknolojik Yemekler </h2>
        </div>
        <div className="tebriks">
          <h4 className="lezzetyolda">lezzetin yolda </h4>

          <h1>SİPARİŞİNİZ ALINDI</h1>
        </div>
        <hr></hr>

        <p className="pizzaName">Ege Pizza</p>
        <div className="pizzaSelection">
          <div className="pizzaBoyut">
            <span className="pizzaDetails">Boyut: </span>
            {exChoosen["size"]}
          </div>
          <div className="pizzaBoyut">
            <span className="pizzaDetails">Hamur:</span>
            {exChoosen["kalinlik"]}
          </div>
          <div className="pizzaBoyut">
            <span className="pizzaDetails">Ek Malzemeler: </span>
            {addedItems.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Success;
