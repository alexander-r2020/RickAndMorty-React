import React, { useState, useEffect } from "react";
import Pages from "./Pages";
import axios from "axios";

function Main() {
  const size = {
    width: "20%",
  };

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  let initialUrl = "https://rickandmortyapi.com/api/character";

  const getCharacter = async (url) => {
    try {
      const res = await axios(url);
      const data = await res.data;

      setCharacter(data.results);
      setInfo(data.info);
    } catch (error) {
      console.log(error);
    }
  };

  const onPrevious = () => {
    getCharacter(info.prev);
  };
  const onNext = () => {
    getCharacter(info.next);
  };

  useEffect(() => {
    getCharacter(initialUrl);
  }, []);

  return (
    <div className="row justify-content-center ">
      <div className="container">
        <Pages
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      {character.length !== 0 ? (
        character.map((el, i) => (
          <div key={el.name + i} className="card me-3 mb-3" style={size}>
            <img src={el.image} className="card-img-top" alt={el.name} />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Estado : {el.status}</li>
                <li className="list-group-item">Especie : {el.species}</li>
                <li className="list-group-item">Genero : {el.gender}</li>
                <li className="list-group-item">Origen : {el.origin.name}</li>
                <li className="list-group-item">
                  Locacion : {el.location.name}
                </li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <h1>No hay personaje</h1>
      )}

      <div className="container">
        <Pages
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default Main;
