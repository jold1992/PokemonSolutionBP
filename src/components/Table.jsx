import { animateScroll as scroll } from "react-scroll";
import { deletePokemon } from "../services/deletePokemon";
import { getPokemon } from "../services/getPokemon";

export const Table = ({
  data,
  setPokemon,
  setShowNewPanel,
  setTitle,
  setData,
}) => {
  const onClickEditar = (id) => {
    getPokemon("", false, id).then((poke) => {
      setPokemon(poke);
    });
    setTitle("Editar Pokemon");
    setShowNewPanel(true);
    scroll.scrollToBottom();
  };

  const onClickDelete = (id) => {
    //console.log("id", id);
    deletePokemon(id)
      .then((success) => {
        setData(data.filter((pokemon) => pokemon.id !== id));
        alert("Pokemon eliminado!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="div-table">
      <table className="table" data-testid="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th className="td-acciones">Acciones</th>
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {data.map((pokemon) => {
            return (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td>
                  <img className="img-table" src={pokemon.image} />
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td className="td-acciones">
                  <button
                    className="btn-table"
                    title="Editar"
                    onClick={() => onClickEditar(pokemon.id)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn-table"
                    title="Eliminar"
                    onClick={() => onClickDelete(pokemon.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
