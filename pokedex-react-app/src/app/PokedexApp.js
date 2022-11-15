 import React from 'react';
 import PokedexUI from '../components/Pokedex/Pokedex';
 import NavBar from '../components/Navbar/NavBar';
 import Footer from '../components/Footer/Footer';

const PokedexApp = () => {
  return (
    <div>
      <NavBar/>
        <PokedexUI/>
      <Footer/>
    </div>
  );
}

export default PokedexApp;
