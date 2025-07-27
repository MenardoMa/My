/**
 *
 * Import Component
 *
 */

import Navbar from "./Navbar";

/**
 *
 * Header Components
 *
 */

import logo from "../assets/images/logo.svg";

/**
 *
 * Import Hook
 *
 */

import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1>
          <a href="" className="logo">
            <img src={logo} alt="Menardo | Portfolio" width={40} height={40} />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span>{navOpen ? "x" : "="}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a href="#contact" className="btn btn-secondary md_hidden">
          Contact Moi
        </a>
      </div>
    </div>
  );
};

export default Header;
