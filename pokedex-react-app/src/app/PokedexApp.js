 import React from 'react';
 import PokedexUI from '../components/Pokedex/Pokedex';
 import NavBar from '../components/Navbar/NavBar';

const PokedexApp = () => {
  return (
    <div>
      <NavBar/>
      <PokedexUI/>
    </div>
  );
}

export default PokedexApp;
