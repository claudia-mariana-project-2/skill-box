import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoSideBar from "/images/logoSideBar.png";


function SideBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <>
        <button className="burger-menu" onClick={toggleMenu}>
            <i class="bi bi-list"></i>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>

        <aside className={`sidebar nav flex-column nav-underline position-fixed shadow-lg ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-content d-flex flex-column">
            <div className="sidebar-container">
              <img src={logoSideBar} className="logo" alt="SkillBox Logo" />
            </div>

            <NavLink to="/">
              <a className="nav-link-custom nav-link py-3">
                <i class="bi bi-house-door"></i>
                Home</a>
            </NavLink>

            <NavLink to="/about-page">
              <a className="nav-link-custom nav-link py-3">
                <i class="bi bi-file-earmark-person"></i>
                About Us</a>
            </NavLink>

            <NavLink to="/skills/add">
              <a className="nav-link-custom nav-link py-3">
                <i class="bi bi-file-earmark-plus"></i>
                Add Skill</a>
            </NavLink>

          <br />
          <br />
          
            <NavLink to="/">
              <a className="nav-link-custom nav-link py-3">
                Categories</a>
            </NavLink>

            <NavLink to="/visual-arts-page">
              <a className="nav-link-custom nav-link py-3">
                <i class="bi bi-brush"></i>
                Visual Arts</a>
            </NavLink>

            <NavLink to="/sports-page">
              <a className="nav-link-custom nav-link py-3">
                <i class="bi bi-bicycle"></i>
                Sports</a>
            </NavLink>

            <NavLink to="/music-page">
              <a className="nav-link-custom nav-link py-3">
                <i class="bi bi-music-note-beamed"></i>
                Music</a>
            </NavLink>
          </div>
        </aside>
      </>

    </>
  );
};

export default SideBar;