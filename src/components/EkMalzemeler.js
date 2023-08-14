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
              onChange={exHandle}
              name="pepperoni"
              id="pepperoni"
              type="checkbox"
              value="pepperoni"
            ></input>
            <label htmlFor="pepperoni"> Pepperoni</label>
          </div>
          <div>
            <input
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
              onChange={exHandle}
              name="kanada-jambonu"
              id="kanada-jambonu"
              type="checkbox"
              value="kanada-jambonu"
            ></input>
            <label htmlFor="kanada-jambonu"> Kanada Jambonu</label>
          </div>
          <div>
            <input
              onChange={exHandle}
              name="tavuk-izgara"
              id="tavuk-izgara"
              type="checkbox"
              value="tavuk-izgara"
            ></input>
            <label htmlFor="tavuk-izgara"> Tavuk Izgara</label>
          </div>
          <div>
            <input
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
