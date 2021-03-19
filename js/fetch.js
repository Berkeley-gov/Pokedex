/*
    Fetch API:
        What is it? It's a  modern interface that alows yoou to make HTTP requests to servers
        from browsers.  It's simpler and cleaner thatn th xhr (XmlHTTPRequest Object)
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
      console.log(`Data retrieved from the Fetch API: ${data}`);
      // Hoisting the setPokemomImg function.
      setPokemonImg(data.sprites.front_default);
    }, (err) => {
      console.log(`Error: Failed to retrieve pokemon from the Pokemon Api: ${err}`)
    })
}

function setPokemonImg(imgSrc) {
  document.getElementById('pokemonImg').src = imgSrc;

}
