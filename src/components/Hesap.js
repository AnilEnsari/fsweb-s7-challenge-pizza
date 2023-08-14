import React, { useState } from "react";
import { useEffect } from "react";

const Hesap = (props) => {
  const { foodList, ekstra } = props;
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
    setToplamucret(ekstra + foodList.foodPrice * piece);
  }, [piece, ekstra]);

  return (
    <div className="pieceandresult">
      <div>
        <button className="arttırbuton" onClick={azalt}>
          -
        </button>
        {piece}
        <button className="arttırbuton" onClick={arttir}>
          +
        </button>
      </div>
      <div>
        <h4>Sipariş Toplamı</h4>
        <div>Seçimler</div>
        <div>{ekstra}₺</div>
        <div>Toplam</div>
        <div>{toplamucret}₺</div>
      </div>
    </div>
  );
};
export default Hesap;
