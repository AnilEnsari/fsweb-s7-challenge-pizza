import React from "react";

const ZorunluFormlar = ({ setBoyut, setHamurKalinlik }) => {
  const handeClick = (event) => {
    if (event.target.checked) {
      setBoyut(event.target.id);
    }
  };
  const handleKalinlik = (event) => {
    if (event.target.value === "ince") {
      setHamurKalinlik("ince");
    } else if (event.target.value === "kalin") {
      setHamurKalinlik("kalin");
    }
  };
  return (
    <div className="zorunluFormMain ">
      <form id="pizza-form">
        <div className="flexyap">
          <span className="size">
            <h3 className="inline">
              Boyut Seç <span className="red">*</span>
            </h3>
            <div>
              <input
                onChange={handeClick}
                type="radio"
                id="kucuk"
                name="boyut"
                value="kucuk"
              ></input>
              <label htmlFor="kucuk">Küçük</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={handeClick}
                name="boyut"
                value="orta"
                id="orta"
              ></input>
              <label htmlFor="orta">Orta</label>
            </div>
            <div>
              <input
                onChange={handeClick}
                type="radio"
                name="boyut"
                value="buyuk"
                id="buyuk"
              ></input>
              <label htmlFor="buyuk">Büyük</label>
            </div>
          </span>
          <span className="hamurKalinlik">
            <h3>
              Hamur Seç <span className="red">*</span>
            </h3>
            <label htmlFor="hamursec">
              <select
                data-cy="ince"
                onClick={handleKalinlik}
                name="size-dropdown"
                id="size-dropdown"
              >
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
