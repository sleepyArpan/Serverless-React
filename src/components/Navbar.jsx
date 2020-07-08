import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>
          <span>Typing.</span> Game
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/highscores'>High Scores</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
