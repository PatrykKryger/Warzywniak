import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li id={"logo1"}><Link to="/">Warzywex</Link></li>
            </ul>

            <ul className="navbar-links">
                <li><Link to="/oferta">Oferta</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/">Koszyk</Link></li>
                <li><Link to="/login">Zaloguj</Link></li>
            </ul>
            <style>{`
        #logo1 {
            float: left;
        }
        
        .navbar {
          width: 100%;
          background: #174d3c;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 10px;
          box-shadow: 0 2px 14px #174d3c1a;
          position: sticky;
          top: 0;
          z-index: 30;
        }
        .navbar-logo {
          font-size: 1.45rem;
          font-weight: bold;
          letter-spacing: 2px;
          color: #48b170;
        }
        .navbar-links {
          display: flex;
          gap: 2.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links li a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.09rem;
          padding: 7px 14px;
          border-radius: 9px;
          transition: background 0.17s, color 0.16s;
        }
        .navbar-links li a:hover,
        .navbar-links li a:focus {
          background: #48b170;
          color: #174d3c;
        }
        @media (max-width: 700px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 1.1rem;
          }
          .navbar-links {
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 8px;
          }
          .navbar-logo {
            font-size: 1.1rem;
          }
        }
      `}</style>
        </nav>
    );
}