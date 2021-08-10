import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [isOpenNavLinks, setIsOpenNavLinks] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <nav>
      <div className="brand">
        <h1>Music Buzz</h1>
      </div>
      <div className="menu" onClick={() => setIsOpenNavLinks(!isOpenNavLinks)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <CSSTransition in={isOpenNavLinks} timeout={300} classNames="nav-transition" unmountOnExit> */}
        <div
          style={{ display: isOpenNavLinks ? "block" : "none" }}
          className="nav-links"
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <div className="dropdown">
                <a
                  className="dropbtn"
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                >
                  Dropdown
                </a>
                <div
                  style={{ display: isOpenDropdown ? "block" : "none" }}
                  className="dropdown-content"
                >
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      {/* </CSSTransition> */}
    </nav>
  );
};

export default Navbar;
