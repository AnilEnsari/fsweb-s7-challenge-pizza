import React from "react";

const Name = ({ setMusteriIsmi }) => {
  const handleIsim = (event) => {
    setMusteriIsmi(event.target.value);
  };

  return (
    <div className="siparisNotu">
      <form id="name-input">
        <div>
          <label htmlFor="name">
            <h3>İsim</h3>
          </label>
        </div>
        <input
          className="notForm"
          type="text"
          placeholder="    Size daha doğru hitap edebilmemiz için isminizi bizimle paylaşır mısınız?"
          onChange={handleIsim}
        ></input>
      </form>
    </div>
  );
};
export default Name;
