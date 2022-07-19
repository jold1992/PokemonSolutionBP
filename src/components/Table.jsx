import React, { useEffect, useState } from "react";

export const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://bp-pokemons.herokuapp.com/?idAuthor=1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="div-table">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pokemon) => {
            return (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td>
                  <img className="img-table" src={pokemon.image} />
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
