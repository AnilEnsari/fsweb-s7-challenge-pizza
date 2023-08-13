import React from "react";

const Siparisnotu = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="siparisnotu">Sipariş Notu</label>
        </div>
        <input
          type="Note"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        ></input>
      </form>
    </div>
  );
};
export default Siparisnotu;
