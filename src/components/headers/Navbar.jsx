import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="td-main-menu-content">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="has-dropdown">
          <a href="#">Pages</a>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </li>

        <li className="has-dropdown">
          <Link to="/blog">Blog</Link>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>

        <li className="has-dropdown">
          <Link to="/service">Featured</Link>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/service-details">Service Details</Link>
            </li>
          </ul>
        </li>



        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
