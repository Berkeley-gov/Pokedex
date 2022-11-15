import React from 'react';

const Footer = () => {
    return(
        <footer>
            <div className="card text-center">
                <div className="card-header">
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title">React Pokedex</h5>
                    <p className="card-text">The React Pokedex was created using React, Fetch, and Bootstrap. View the documentation to <a className="link" href="https://github.com/Berkeley-gov/Pokedex">learn more.</a></p>
                    <div>
                        <a href="https://pokeapi.co/" className="btn btn-pokdex shadow-sm">Visit Pokedex API</a>
                        <a href="https://berkeley-gov.github.io/myportfolio.github.io/" className="btn btn-portfolio shadow-sm">Visit My Portoflio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;