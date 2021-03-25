/*
    The Pokedex does not use a server side api, instead HTTTP calls are made to the RESTful Pokemon API (https://pokeapi.co/) using the popular Fetch API.
    Decided to go with Fetch as oppose to AJAX method since Fetch is more efficient.
*/
window.onload = function(){
  console.log('FETCH API start of execution');
  document.getElementById('btn').addEventListener("click", getPokemon);
}

/*

*/
function getPokemon(){
  // DOM grabs the user input from the <input> element

  let userInput = document.getElementById('pokemon').value
  // Used fetch api along with string interpolation to make http request with provided user input

  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`).then( (response) => response.json()).then((data) => {

      // Console logging all data that is retrieved from the pokemon api
      console.log(`Data retrieved from the Fetch API: ${data.species.name}
                   Pokemon's type: ${data.types.name}
     
      `);

      sessionStorage.setItem('name', data.species.name);

      setPokemonImg(data.sprites.front_default);

      setPokemonName(data.species.name);

      setPokemonStats(data.types[0].type.name);

      setAttackAndDefense(data.stats[1].base_stat, data.stats[2].base_stat);

      setWeight(data.weight);

      setPokemonMove(data.moves[0].move.name);

    }, (err) => {
      console.log(`Error: Failed to retrieve pokemon from the Pokemon Api: ${err}`)
    })
}

function setPokemonImg(imgSrc) {
  document.getElementById('pokemonImg').src = imgSrc;

}

function setPokemonName(pokemonName) {
    document.getElementById('name').innerHTML = pokemonName.toUpperCase();
}

function setPokemonStats(pokemonStatistics) {
    document.getElementById('type').innerHTML = `Type: ${pokemonStatistics}`;
}

function setAttackAndDefense(attack, defense) {
    document.getElementById('attack').innerHTML = `Attack:  ${attack}`;
    document.getElementById('defense').innerHTML = `Defense: ${defense}`;
}

function setWeight(weight) {
    document.getElementById('weight').innerHTML = `${sessionStorage.getItem('name').toUpperCase()}'s weight: ${weight}kg`
}

function setPokemonMove(move) {
    document.getElementById('move').innerHTML = `${sessionStorage.getItem('name').toUpperCase()}'s attack move: ${move}`
}