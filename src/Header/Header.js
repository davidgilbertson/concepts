import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header className="Header">
      <div className="Header__text-wrapper">
        <div className="Header__title"> Newspaper name</div>

        <div className="Header__sign-in">Sign in</div>
      </div>
    </header>
  );
};

export default Header;
