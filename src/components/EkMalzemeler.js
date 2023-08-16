import React from "react";
import { useState, useEffect } from "react";

const EkMalzemeler = (props) => {
  const { ekstraHesapla } = props;
  const [exPiece, setExPiece] = useState(0);
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
          <div>
            <input
              onClick={() => props.setBoolean1(!props.boolean1)}
              onChange={exHandle}
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
              id="sogan"
              type="checkbox"
              value="sogan"
            ></input>
            <label htmlFor="sogan"> Soğan</label>
          </div>
          <div>
            <input
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
              type="checkbox"
              value="jalepeno"
            ></input>
            <label htmlFor="jalepeno"> Jalepeno</label>
          </div>
          <div>
            <input
              onClick={() => props.setBoolean10(!props.boolean10)}
              onChange={exHandle}
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
              name="kabak"
              id="kabak"
              type="checkbox"
              value="kabak"
            ></input>
            <label htmlFor="kabak"> Kabak</label>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EkMalzemeler;
