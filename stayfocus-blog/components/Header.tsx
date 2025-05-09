'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/funcionalidades', label: 'Funcionalidades' },
    { href: '/concursos', label: 'Concursos' },
    { href: '/produtividade', label: 'Produtividade' },
    { href: '/sobre', label: 'Sobre' },
  ];

  return (
    <header className="bg-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-600">Stay</span>
          <span className="text-purple-600">Focus</span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark hover:text-primary relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          ))}
          <Link
            href="/comecar"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Começar Agora
          </Link>
        </nav>

        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark focus:outline-none"
            aria-label="Abrir menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light shadow-lg py-2 z-40">
          <nav className="flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark hover:text-primary py-2 w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/comecar"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-2 w-11/12 mx-auto text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Começar Agora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;