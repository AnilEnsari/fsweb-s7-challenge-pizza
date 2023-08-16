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

          <div className="marginbottom">
            <h1>SİPARİŞ ALINDI</h1>
          </div>
        </div>
        <hr></hr>

        <p className="pizzaName bold ">Ege Pizza</p>
        <div className="pizzaSelection">
          <div className="pizzaBoyut">
            <span className="pizzaDetails">Boyut: </span>
            {exChoosen["size"]}
          </div>
          <div className="pizzaBoyut bold ">
            <span className="pizzaDetails">Hamur:</span>
            {exChoosen["kalinlik"]}
          </div>
          <div className="pizzaBoyut">
            <span className="pizzaDetails">Ek Malzemeler: </span>
            {addedItems.join(", ")}
          </div>
        </div>
        <div className="pizzaTotal">
          <div className="siparisToplami">Sipariş Toplamı</div>
          <div className="secimlerFlex">
            <div>Seçimler</div>
            <div>{exChoosen.secimUcreti}₺</div>
          </div>
          <div className="secimlerFlex">
            <div>Toplam</div>
            <div>{exChoosen.toplamUcret}₺</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Success;
