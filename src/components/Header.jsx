import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { useForm } from "../hooks/useForm";
import { getPokemon } from "../services/getPokemon";

export const Header = ({ setTitle, setShowNewPanel, setData }) => {
  const initialForm = {
    buscar: "",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { buscar } = formValues;

  const onClickNew = () => {
    setShowNewPanel(true);
    setTitle("Nuevo Pokemon");
    scroll.scrollToBottom();
  };

  const handleSearch = ({ target }) => {
    handleInputChange({ target });
    getPokemon(target.value, false).then((data) => {
      setData(data);
    });
  };

  return (
    <div className="header" data-testid="header">
      <h3>Listado de Pokemon</h3>
      <div className="inline-align">
        <div className="icon-wrapper">
          <input
            autoComplete="off"
            id="buscar"
            data-testid="input-search"
            name="buscar"
            type="text"
            className="input"
            placeholder="Buscar"
            value={buscar}
            onChange={handleSearch}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="icon-wrapper">
          <button
            className="btn-nuevo right-align"
            onClick={onClickNew}
            data-testid="button-new"
          >
            <i className="fa-solid fa-plus btn-icon"></i>
            Nuevo
          </button>
        </div>
      </div>
    </div>
  );
};
