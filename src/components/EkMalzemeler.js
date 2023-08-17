import React from "react";
import { useState, useEffect } from "react";

const EkMalzemeler = (props) => {
  const { ekstraHesapla } = props;
  const [exPiece, setExPiece] = useState(0);
  const optionalItems = [
    "pepperoni",
    "sosis",
    "kanadaJambonu",
    "tavukIzgara",
    "sogan",
    "domates",
    "misir",
    "sucuk",
    "jalepeno",
    "sarimsak",
    "biber",
    "salam",
    "ananas",
    "kabak",
  ];
  const exHandle = (event) => {
    if (event.target.checked === true) {
      setExPiece(exPiece + 1);
    } else {
      setExPiece(exPiece - 1);
    }
  };
  useEffect(() => {
    ekstraHesapla(exPiece);
  }, [exPiece]);
  return (
    <div className="ekmlzContainer">
      <form>
        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz 5₺</p>
        <div className="ekstramlz">
          {optionalItems.map((items, index) => (
            <div key={index}>
              <input
                onClick={() =>
                  props[`setBoolean${index + 1}`](!props[`boolean${index + 1}`])
                }
                onChange={exHandle}
                disabled={exPiece >= 10}
                name={items}
                id={items}
                type={"checkbox"}
                value={items}
              ></input>
              <label htmlFor={items}>{items}</label>
            </div>
          ))}
          {/* <div>
            <input
              onClick={() => props.setBoolean1(!props.boolean1)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="pepperoni"
              id="pepperoni"
              type="checkbox"
              value="pepperoni"
            ></input>
            <label htmlFor="pepperoni">Pepperoni</label>
          </div>
          <div>
            <input
              data-cy="sosis"
              disabled={exPiece >= 10}
              onClick={() => props.setBoolean2(!props.boolean2)}
              name="sosis"
              id="sosis"
              type="checkbox"
              value="sosis"
              onChange={exHandle}
            ></input>
            <label htmlFor="sosis"> Sosis</label>{" "}
          </div>
          <div>
            <input
              onClick={() => props.setBoolean3(!props.boolean3)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="kanadaJambonu"
              id="kanada-jambonu"
              type="checkbox"
              value="kanada-jambonu"
            ></input>
            <label htmlFor="kanada-jambonu"> Kanada Jambonu</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean4(!props.boolean4)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="tavukIzgara"
              id="tavuk-izgara"
              type="checkbox"
              value="tavuk-izgara"
            ></input>
            <label htmlFor="tavuk-izgara"> Tavuk Izgara</label>
          </div>
          <div>
            <input
              data-cy="sogan"
              onClick={() => props.setBoolean5(!props.boolean5)}
              name="sogan"
              onChange={exHandle}
              disabled={exPiece >= 10}
              id="sogan"
              type="checkbox"
              value="sogan"
            ></input>
            <label htmlFor="sogan"> Soğan</label>
          </div>
          <div>
            <input
              disabled={exPiece >= 10}
              data-cy="domates"
              onClick={() => props.setBoolean6(!props.boolean6)}
              onChange={exHandle}
              name="domates"
              id="domates"
              type="checkbox"
              value="domates"
            ></input>
            <label htmlFor="domates"> Domates</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean7(!props.boolean7)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="misir"
              id="misir"
              type="checkbox"
              value="misir"
            ></input>
            <label htmlFor="misir"> Mısır</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean8(!props.boolean8)}
              onChange={exHandle}
              name="sucuk"
              disabled={exPiece >= 10}
              id="sucuk"
              type="checkbox"
              value="sucuk"
            ></input>
            <label htmlFor="sucuk"> Sucuk</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean9(!props.boolean9)}
              onChange={exHandle}
              name="jalepeno"
              id="jalepeno"
              disabled={exPiece >= 10}
              type="checkbox"
              value="jalepeno"
            ></input>
            <label htmlFor="jalepeno"> Jalepeno</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean10(!props.boolean10)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="sarimsak"
              id="sarimsak"
              type="checkbox"
              value="sarimsak"
            ></input>
            <label htmlFor="sarimsak"> Sarımsak</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean11(!props.boolean11)}
              name="biber"
              onChange={exHandle}
              disabled={exPiece >= 10}
              id="biber"
              type="checkbox"
              value="biber"
            ></input>
            <label htmlFor="biber"> Biber</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean12(!props.boolean12)}
              name="salam"
              onChange={exHandle}
              disabled={exPiece >= 10}
              id="salam"
              type="checkbox"
              value="salam"
            ></input>
            <label htmlFor="salam"> Salam</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean13(!props.boolean13)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="ananas"
              id="ananas"
              type="checkbox"
              value="ananas"
            ></input>
            <label htmlFor="ananas"> Ananas</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean14(!props.boolean14)}
              onChange={exHandle}
              disabled={exPiece >= 10}
              name="kabak"
              id="kabak"
              type="checkbox"
              value="kabak"
            ></input>
            <label htmlFor="kabak"> Kabak</label>
          </div> */}
        </div>
      </form>
    </div>
  );
};
export default EkMalzemeler;
