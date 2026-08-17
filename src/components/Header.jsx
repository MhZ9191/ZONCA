import { useState } from "react";
import "../assets/css/header.css";
import { Link, NavLink } from "react-router";
export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <section className="header-section">
        <div className="header-div">
          <div className="header-logo">
            <Link to="/home">
              <img
                src={`${import.meta.env.BASE_URL}img/logo white.png`}
                alt="home"
              />
              {/* <img src="/img/logo white.png" alt="home" /> */}
            </Link>
          </div>
          <div className="header-link">
            <div>
              <NavLink to="/products">PRODUCTS</NavLink>
            </div>
            <div>
              <NavLink to="/spaces">SPACES</NavLink>
            </div>
            <div>
              <NavLink to="/about">ABOUT</NavLink>
            </div>
            <div>
              <NavLink to="/press">PRESS</NavLink>
            </div>
            <div>
              <NavLink to="/job">JOBS</NavLink>
            </div>
          </div>
          {!visible && (
            <div className="header-burger" onClick={() => setVisible(!visible)}>
              <i className="bi bi-list"></i>
            </div>
          )}
          {visible && (
            <div className="header-up" onClick={() => setVisible(!visible)}>
              <i className="bi bi-chevron-compact-up"></i>
            </div>
          )}
        </div>
        {visible && (
          <>
            <div className="header-hidden-link">
              <div>
                <NavLink to="/products">PRODUCTS</NavLink>
              </div>
              <div>
                <NavLink to="/spaces">SPACES</NavLink>
              </div>
              <div>
                <NavLink to="/about">ABOUT</NavLink>
              </div>
              <div>
                <NavLink to="/press">PRESS</NavLink>
              </div>
              <div>
                <NavLink to="/job">JOBS</NavLink>
              </div>
            </div>
          </>
        )}
      </section>
    </header>
  );
}
