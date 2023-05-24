import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="bg-gray-900 text-white py-6">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="" className="text-xl font-bold">My Portfolio</Link>
          <ul className="flex space-x-4">
            <li><Link to="about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header