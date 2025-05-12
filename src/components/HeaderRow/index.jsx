import { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

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
          <Link to="/">Home</Link>
        </li>
        <li className="header__menu-item">
          <Link>Menu</Link>
        </li>
        <li className="header__menu-item">
          <Link>About Us</Link>
        </li>
        <li className="header__menu-item">
          <Link>Contact Us</Link>
        </li>
      </ul>
      <div className="header__nav-btn">
        <button className="nav-signIn nav-btn">Sign In</button>
        <button className="nav-signUp nav-btn">SignUp</button>
      </div>
    </div>
  );
};
