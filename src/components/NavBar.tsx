
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full py-4 bg-background">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-medium">
          oh.studio
        </Link>     
      </div>
    </header>
  );
};

export default NavBar;
