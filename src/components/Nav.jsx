import React, { useState, useEffect } from "react";
import "./Nav.css";
import Netflix from "../assets/logo.png";
import Profile from "../assets/profile.png";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBlack(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={Netflix}
        />
        <img
          className="nav__avatar"
          src={Profile}
        />
      </div>
    </nav>
  );
}

export default Nav;
