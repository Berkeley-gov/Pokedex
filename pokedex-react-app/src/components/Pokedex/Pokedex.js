import React from 'react';
import '../../assets/styles/pokedex.css';
import '../../assets/styles/styles.css';

export default function PokedexUI()  {
    const searchBtn = document.getElementById('search-btn'); // search button
    

    const getPokemonData = (pokemon) => {
        const nameScreen = document.getElementById('name-screen'); //name-screen
        const imageScreen = document.getElementById('main-screen'); // image screen
        const aboutScreen = document.getElementById('about-screen'); // about-text screen
        const typeScreen = document.getElementById('type-screen'); // type screen
        const idScreen = document.getElementById('id-screen'); // spices screen
        const inputField = document.getElementById('name-input'); // search field input
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => response.json())
            .then((data) => {
            let id = ('00' + data.id).slice(-3);
            imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
            nameScreen.innerHTML = data.name;
            typeScreen.innerHTML = data.types[0].type.name;
            idScreen.innerHTML = `#${data.id}`;
            aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${
                data.weight / 10
            }kg`;
            inputField.value = '';
        });
    };

    const handleInputField = (event) => {
        event.preventDefault();

        const userChosenPokemon = document.getElementById('name-input').value;
        getPokemonData(userChosenPokemon);
    }

    return(
        <main>
                <div id="pokedex">
                {/*<!-- Left Panel -->*/}
                <div id="left-panel">
                    {/*<!-- Top lights -->*/}
                    <div className="left-top-container">
                        <svg height="100" width="235" className="left-svg">
                            <polyline
                            points="0,75 70,75 90,38 400,38"
                            style={{fill: 'none', stroke: 'black', strokeWidth: 3}}/>
                        </svg>
                        <div className="lights-container">
                            <div className="big-light-boarder">
                                <div className="big-light blue">
                                    <div className="big-dot light-blue"></div>
                                </div>
                            </div>
                            <div className="small-lights-container">
                                <div className="small-light red">
                                    <div className="dot light-red"></div>
                                </div>
                                <div className="small-light yellow">
                                    <div className="dot light-yellow"></div>
                                </div>
                                <div className="small-light green">
                                    <div className="dot light-green"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Center Screen -->*/}
                    <div className="screen-container">
                        <div className="screen">
                            <div className="top-screen-lights">
                                <div className="mini-light red"></div>
                                <div className="mini-light red"></div>
                            </div>
                            <div id="main-screen"></div>
                                <div className="bottom-screen-lights">
                                <div className="small-light red">
                                    <div className="dot light-red"></div>
                                </div>
                                <div className="burger">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Bottom Buttons -->*/}
                    <div className="buttons-container">
                        <div className="upper-buttons-container">
                            <div className="big-button"></div>
                            <div className="long-buttons-container">
                            <div className="long-button red"></div>
                            <div className="long-button light-blue"></div>
                            </div>
                        </div>
                        <div className="nav-buttons-container">
                                <div className="dots-container">
                                    <div>.</div>
                                    <div>.</div>
                                </div>
                                <div className="green-screen">
                                    <span id="name-screen">bulbasaur</span>
                                </div>
                                <div className="right-nav-container">
                                    <div className="nav-button">
                                        <div className="nav-center-circle"></div>
                                        <div className="nav-button-vertical"></div>
                                        <div className="nav-button-horizontal">
                                        <div className="border-top"></div>
                                        <div className="border-bottom"></div>
                                    </div>
                                </div>
                                <div className="bottom-right-nav-container">
                                    <div className="small-light red">
                                        <div className="dot light-red"></div>
                                    </div>
                                    <div className="dots-container">
                                        <div className="black-dot">.</div>
                                        <div className="black-dot">.</div>
                                        <div className="black-dot">.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End of Left panel -->*/}

                {/*<!-- Right-panel -->*/}
                <div id="right-panel">
                    {/*<!-- Blank container -->*/}
                    <div className="empty-container">
                    <svg height="100%" width="100%">
                        <polyline
                        points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                        style={{fill: '#292929', stroke: 'none', strokeWidth: 3}}/>
                        <polyline
                        points="0,40 138,40 158,75 250,75"
                        style={{fill: 'none', stroke: 'black', strokeWidth: 3}}
                        />
                    </svg>
                    </div>
                    {/*<!-- Top screen -->*/}
                    <div className="top-screen-container">
                    <div id="about-screen" className="right-panel-screen">
                        Height: 70cm Weight: 6.9kg
                    </div>
                    </div>
                    {/*<!-- Blue Buttons -->*/}
                    <div className="square-buttons-container">
                        <div className="blue-squares-container">
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                            <div className="blue-square"></div>
                        </div>
                    </div>
                    {/*<!-- Center Buttons -->*/}
                    <div className="center-buttons-container">
                        <div className="center-left-container">
                            <div className="small-reds-container">
                            <div className="small-light red">
                                <div className="dot light-red"></div>
                            </div>
                            <div className="small-light red">
                                <div className="dot light-red"></div>
                            </div>
                            </div>
                            <div className="white-squares-container">
                            <div className="white-square"></div>
                            <div className="white-square"></div>
                        </div>
                    </div>
                    <div className="center-right-container">
                        <div className="thin-buttons-container">
                        <div className="thin-button"></div>
                        <div className="thin-button"></div>
                    </div>
                    <div className="yellow-button yellow">
                        <div className="big-dot light-yellow"></div>
                    </div>
                    </div>
                    </div>
                    {/*<!-- Bottom screens -->*/}
                    <div className="bottom-screens-container">
                        <div id="type-screen" className="right-panel-screen">grass</div>
                        <div id="id-screen" className="right-panel-screen">#1</div>
                    </div>
                </div>
                </div>

                <div className="search-container">
                    <form>
                        <input id="name-input" type="text" placeholder="Name / id"/>

                        <button id="search-btn" className="ball-container" onClick={handleInputField}>
                            <div className="upper-half-ball"></div>
                            <div className="bottom-half-ball"></div>
                            <div className="center-ball"></div>
                            <div className="center-line"></div>
                        </button>

                    </form>
                </div>
        </main>
    );
}