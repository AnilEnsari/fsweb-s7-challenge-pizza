import React from "react";

const Siparisnotu = () => {
  return (
    <div className="siparisNotu">
      <form>
        <div>
          <label htmlFor="siparisnotu">
            <h3>Sipariş Notu</h3>
          </label>
        </div>
        <input
          className="notForm"
          type="text"
          placeholder="    Siparişine eklemek istediğin bir not var mı?"
        ></input>
      </form>
    </div>
  );
};
export default Siparisnotu;
