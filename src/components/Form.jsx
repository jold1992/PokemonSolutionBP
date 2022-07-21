import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { useForm } from "../hooks/useForm";
import { addPokemon } from "../services/addPokemon";
import { getPokemon } from "../services/getPokemon";
import { updatePokemon } from "../services/updatePokemon";

export const Form = ({
  title,
  setShowNewPanel,
  data,
  setData,
  pokemon,
  setPokemon,
}) => {
  const [disableSave, setDisableSave] = useState(true);

  const idAuthor = 1;

  const initialForm = {
    id: "",
    name: "",
    image: "",
    attack: 0,
    defense: 0,
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { id, name, image, attack, defense } = formValues;

  useEffect(() => {
    if (name && name.trim().length > 0) {
      setDisableSave(false);
    } else {
      setDisableSave(true);
    }
  }, [name]);

  useEffect(() => {
    if (pokemon.id) {
      setDisableSave(true);
      reset(pokemon);
    }
  }, [pokemon]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (pokemon.id) {
      updatePokemon(pokemon.id, name, image, attack, defense, idAuthor);

      setData(
        data.map((pokemon) => {
          if (pokemon.id === formValues.id) {
            return { ...pokemon, name, image, attack, defense };
          }
          return pokemon;
        })
      );
    } else {
      addPokemon(name, image, attack, defense, idAuthor);
      setData([...data, formValues]);
      reset(initialForm);
    }
  };

  const onClickReset = (e) => {
    reset(initialForm);
    setPokemon({});
    scroll.scrollToTop();
    setTimeout(() => {
      setShowNewPanel(false);
    }, 1000);
  };

  return (
    <form onSubmit={onSubmit} data-testid="form">
      <h3 className="center-align">{title}</h3>
      <div className="div-form">
        <div className="form-group">
          <input type="hidden" name="id" value={id || ""} />
          <label htmlFor="name">Nombre: </label>
          <input
            autoComplete="off"
            type="text"
            data-testid="input-name"
            id="name"
            name="name"
            placeholder="Nombre"
            value={name || ""}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="image">Imagen: </label>
          <input
            autoComplete="off"
            type="url"
            id="image"
            name="image"
            placeholder="Imagen"
            value={image || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="attack">Ataque: </label>
          <output htmlFor="attack">{attack}</output>
          <input
            type="range"
            id="attack"
            className="range"
            name="attack"
            value={attack || 0}
            onChange={handleInputChange}
            step={1}
            min={0}
            max={100}
          />
          <label htmlFor="defense">Defensa: </label>
          <output htmlFor="defense">{defense}</output>
          <input
            type="range"
            id="defense"
            className="range"
            name="defense"
            value={defense || 0}
            onChange={handleInputChange}
            step={1}
            min={0}
            max={100}
          />
        </div>
      </div>
      <div className="form-boton inline-align">
        <button
          type="submit"
          className="btn btn-nuevo"
          disabled={disableSave}
          data-testid="button-submit"
        >
          <i className="fa-solid fa-floppy-disk btn-icon"></i>
          Guardar
        </button>
        <button
          type="reset"
          onClick={onClickReset}
          className="btn-nuevo"
          data-testid="button-clear"
        >
          <i className="fa-solid fa-xmark btn-icon"></i>
          Cancelar
        </button>
      </div>
    </form>
  );
};
