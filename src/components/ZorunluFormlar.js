import React from "react";

const ZorunluFormlar = () => {
  return (
    <div>
      <form>
        <div>
          Boyut Seç
          <input type="radio" id="kucuk" name="boyut" value="kucuk"></input>
          <label htmlFor="kucuk">Küçük</label>
          <input type="radio" name="boyut" value="orta" id="orta"></input>
          <label htmlFor="orta">Orta</label>
          <input type="radio" name="boyut" value="büyük" id="büyük"></input>
          <label htmlFor="buyuk">Büyük</label>
        </div>
        <div>
          Hamur Seç
          <label htmlFor="hamursec">
            <select name="kalinliklar" id="kalinliklar">
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalin">Kalın</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};
export default ZorunluFormlar;
