import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
          <h1>Como funciona las rutas </h1>
          <nav>
            <NavLink to="/">Inicio </NavLink>
            <NavLink to="Blog">Blog</NavLink>
            <NavLink to="Acerca-de">Acerca de</NavLink>
          </nav>
        </header>
        </div>
    );
};

export default Header;