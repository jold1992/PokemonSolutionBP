export const deletePokemon = async (id) => {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  return await fetch(`https://bp-pokemons.herokuapp.com/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
};
