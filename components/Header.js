import React from 'react';

function Header() {
  return (
    <header>
      <h1>Welcome To The Cheesy Situation</h1>
      <nav className="header">
        <a href="menu.html">Menu</a>
        <a href="reservations.html">Reservations</a>
        <a href="special-offers.html">Special Offers</a>
        <a href="contact.html">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
