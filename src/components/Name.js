import React, { useState } from "react";
import * as Yup from "yup";

const Name = ({ setMusteriIsmi, setButtonDisabled }) => {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  let schema = Yup.object().shape({
    name: Yup.string()
      .required(
        "İsmini bağışlamak bu kadar zor olmamalı. Sana söz kimseye söylemeyeceğiz"
      )
      .min(3, "3 karakterden aşağı olmaz kurtarsa dükkan senin"),
  });

  const handleIsim = async (event) => {
    const inputValue = event.target.value;
    setMusteriIsmi(inputValue);
    try {
      await schema.validate({ name: inputValue });
      setError("");
      setIsValid(true);
      setButtonDisabled(false);
    } catch (validationError) {
      setError(validationError.errors[0]);
      setIsValid(false);
      setButtonDisabled(true);
    }

    setMusteriIsmi(inputValue);
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
          name="name"
          className="notForm"
          type="text"
          placeholder="     Size daha doğru hitap edebilmemiz için isminizi bizimle paylaşır mısınız?"
          onChange={handleIsim}
        ></input>
        {!isValid && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Name;
