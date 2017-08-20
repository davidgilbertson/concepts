import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <div className="Header__text-wrapper">
        <div className="Header__title">The Infinite Broadsheet</div>

        <div className="Header__sign-in">Sign in | sign up</div>
      </div>
    </header>
  );
};

export default Header;
