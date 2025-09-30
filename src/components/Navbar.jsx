import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Warzywex</div>
            <ul className="navbar-links">
                <li><a href="#oferta">Oferta</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
                <li><a href="#koszyk">Koszyk</a></li>
                <li><a href="#zaloguj">Zaloguj</a></li>
            </ul>
            <style>{`
        .navbar {
          width: 100%;
          background: #174d3c;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 2.2rem;
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