import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Hesap = (props) => {
  const { foodList, ekstra, orderObject, buttonDisabled } = props;
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
  const buttonHandler = (e) => {
    axios
      .post("https://reqres.in/api/users", orderObject)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) =>
        console.error("internet Bağlantınızı kontrol edin", error)
      );
  };
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
          <Link to="success">
            <button
              disabled={buttonDisabled}
              onClick={buttonHandler}
              id="order-button"
              className="orderButton"
            >
              SİPARİŞ VER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hesap;
