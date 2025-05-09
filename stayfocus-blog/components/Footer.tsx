import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Início' },
    { href: '/funcionalidades', label: 'Funcionalidades' },
    { href: '/precos', label: 'Preços' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  const blogCategories = [
    { href: '/blog/categoria/produtividade', label: 'Produtividade' },
    { href: '/blog/categoria/concursos', label: 'Concursos' },
    { href: '/blog/categoria/desenvolvimento-pessoal', label: 'Desenvolvimento Pessoal' },
    { href: '/blog/categoria/ferramentas', label: 'Ferramentas' },
  ];

  const socialLinks = [
    { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
    { href: 'https://facebook.com', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Info */}
          <div>
            <Link href="/" className="text-3xl font-bold mb-4 inline-block">
              <span className="text-blue-500">Stay</span>
              <span className="text-purple-500">Focus</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Transforme sua rotina de estudos e alcance seus objetivos com o StayFocus.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h5 className="text-lg font-semibold text-light mb-4">Links Rápidos</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias do Blog */}
          <div>
            <h5 className="text-lg font-semibold text-light mb-4">Categorias do Blog</h5>
            <ul className="space-y-2">
              {blogCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h5 className="text-lg font-semibold text-light mb-4">Contato</h5>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-400">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:contato@stayfocus.com" className="hover:text-primary">
                  contato@stayfocus.com
                </a>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <FaPhoneAlt className="mr-3 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary">
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} StayFocus. Todos os direitos reservados.
          </p>
          <div className="mt-2">
            <Link
              href="/termos-de-uso"
              className="text-gray-500 hover:text-primary text-xs mx-2 transition-colors duration-300"
            >
              Termos de Uso
            </Link>
            <span className="text-gray-600 text-xs">|</span>
            <Link
              href="/politica-de-privacidade"
              className="text-gray-500 hover:text-primary text-xs mx-2 transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;