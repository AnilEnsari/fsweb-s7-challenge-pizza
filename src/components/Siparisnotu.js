import React from "react";

const Siparisnotu = ({ setOrderNote }) => {
  const handleForm = (event) => {
    setOrderNote(event.target.value);
  };

  return (
    <div className="siparisNotu">
      <form id="special-text">
        <div>
          <label htmlFor="siparisnotu">
            <h3>Sipariş Notu</h3>
          </label>
        </div>
        <input
          onChange={handleForm}
          className="notForm"
          type="text"
          placeholder="    Siparişine eklemek istediğin bir not var mı?"
        ></input>
      </form>
    </div>
  );
};
export default Siparisnotu;
