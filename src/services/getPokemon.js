export const getPokemon = async (pokemon, all, id) => {
  if (!id) {
    const pokemons = await fetch(
      "https://bp-pokemons.herokuapp.com/?idAuthor=1"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    if (all || pokemon === "") {
      return pokemons;
    } else if (pokemon) {
      return pokemons.filter((p) =>
        p.name.toLowerCase().includes(pokemon.toLowerCase())
      );
    }
  } else {
    return await fetch(`https://bp-pokemons.herokuapp.com/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
};
