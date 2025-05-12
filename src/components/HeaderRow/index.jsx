import { useState } from 'react';
import './style.scss';

export const HeaderRow = () => {
  const [open, setOpen] = useState();
  return (
    <div className="header__row">
      <div className="logo">Bean Scene</div>
      <button className="open" onClick={() => setOpen(!open)}>
        <span></span> <span></span> <span></span>
      </button>

      <ul className={`header__menu ${open ? 'menu--active' : ''}`}>
        <li className="header__menu-item">
          <a href="#">Home</a>
        </li>
        <li className="header__menu-item">
          <a href="#">Menu</a>
        </li>
        <li className="header__menu-item">
          <a href="#">About Us</a>
        </li>
        <li className="header__menu-item">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="header__nav-btn">
        <button className="nav-signIn nav-btn">Sign In</button>
        <button className="nav-signUp nav-btn">SignUp</button>
      </div>
    </div>
  );
};
