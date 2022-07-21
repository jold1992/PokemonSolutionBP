export const addPokemon = async (name, image, attack, defense, idAuthor) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = `{"name":"${name}",
        "image": "${image}", 
        "attack": "${attack}", 
        "defense": "${defense}", 
        "hp": 35, 
        "type": "electric", 
        "idAuthor":"${idAuthor}"}`;

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
  };

  return await fetch(
    "https://bp-pokemons.herokuapp.com/?idAuthor=1",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
};
