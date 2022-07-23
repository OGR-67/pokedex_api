const pokedex = require("../pokemon/pokedex.json")


function get_all_pokemons(req,res){
    res.status(200).send(pokedex)
}


function pokedex_filter(req, res) {
  const query = req.query;
  filtered_entries = pokedex.filter((pokemon) => {
    isValid = true;
    for (key in query) {
      keyArr = key.split("/");
      if (keyArr.length === 1) {
        let testedValue = pokemon[key];
        if (typeof testedValue != Object) {
          let statement = testedValue == query[key];
          isValid = isValid && statement;
        } else {
          let statement = testedValue.includes(query[key]);
          isValid = isValid && statement;
        }
      } else {
        target_value = keyArr.reduce((acc, curr) => {
          return acc[curr];
        }, pokemon);
        isValid = isValid && query[key] == target_value;
      }
    }
    return isValid;
  });
  res.status(200).json(filtered_entries);
}


function get_poke_by_id(req, res){
    const id = parseInt(req.params.id)
    const pokemon = pokedex.find(pokemon => pokemon.id === id)
    res.status(200).json(pokemon)
}



module.exports = {
    pokedex_filter,
    get_poke_by_id,
    get_all_pokemons,
}