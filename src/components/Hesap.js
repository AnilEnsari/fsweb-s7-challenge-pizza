import React, { useState } from "react";
import { useEffect } from "react";

const Hesap = (props) => {
  const { foodList, ekstra, orderObject } = props;
  const [piece, setPiece] = useState(1);
  const arttir = () => {
    setPiece(piece + 1);
  };
  const azalt = () => {
    if (piece > 1) setPiece(piece - 1);
  };
  const [toplamucret, setToplamucret] = useState(
    foodList ? foodList.foodPrice : 0
  );
  useEffect(() => {
    setToplamucret((ekstra + foodList.foodPrice) * piece);
  }, [piece, ekstra]);
  orderObject.adet = piece;
  orderObject.secimUcreti = ekstra * piece;
  orderObject.toplamUcret = toplamucret;

  return (
    <div className="pieceandresult">
      <div className="artieksi ">
        <button className="arttirbuton" onClick={azalt}>
          -
        </button>
        <span className="buttonPiece"> {piece}</span>
        <button className="arttirbuton" onClick={arttir}>
          +
        </button>
      </div>
      <div className="widthandinline">
        <div className="orderBill inline">
          <h4 className="siparisToplam">Sipariş Toplamı</h4>
          <div className="flexHandlerSecimler">
            <span>Seçimler</span>
            <span>{ekstra * piece}₺</span>
          </div>
          <div className="flexHandlerToplam">
            <span>Toplam</span>
            <span>{toplamucret}₺</span>
          </div>
        </div>
        <div>
          <a href="success">
            <button id="order-button" className="orderButton">
              SİPARİŞ VER
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hesap;
