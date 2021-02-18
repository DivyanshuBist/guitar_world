const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

