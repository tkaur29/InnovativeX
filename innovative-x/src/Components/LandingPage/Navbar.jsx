import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos < 50;
      setNavbarVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-dark bg-dark sticky-top ${
        navbarVisible ? 'visible' : 'hidden'
      }`}
    >
      <Container>
        <a className="navbar-brand" href="#">
          LinkEDGE
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#cta">
              Contact Us
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
