import React from "react";

const ZorunluFormlar = () => {
  return (
    <div className="zorunluFormMain ">
      <form>
        <div className="flexyap">
          <span className="size">
            <h3 className="inline">Boyut Seç</h3>
            <div>
              <input type="radio" id="kucuk" name="boyut" value="kucuk"></input>
              <label htmlFor="kucuk">Küçük</label>
            </div>
            <div>
              <input type="radio" name="boyut" value="orta" id="orta"></input>
              <label htmlFor="orta">Orta</label>
            </div>
            <div>
              <input type="radio" name="boyut" value="buyuk" id="buyuk"></input>
              <label htmlFor="buyuk">Büyük</label>
            </div>
          </span>
          <span className="hamurKalinlik">
            <h3> Hamur Seç</h3>
            <label htmlFor="hamursec">
              <select name="kalinliklar" id="kalinliklar">
                <option value="">Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="kalin">Kalın</option>
              </select>
            </label>
          </span>
        </div>
      </form>
    </div>
  );
};
export default ZorunluFormlar;
