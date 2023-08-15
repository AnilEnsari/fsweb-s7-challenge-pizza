import React from "react";

const Name = () => {
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
        ></input>
      </form>
    </div>
  );
};
export default Name;
