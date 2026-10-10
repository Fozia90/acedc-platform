'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ACEDC } from '@/lib/constants';

const liens = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/telecharger', label: 'Télécharger' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl py-1' : 'shadow-md py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/logo.png"
                alt={`Logo ${ACEDC.sigle}`}
                width={50}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg text-acedc-green-700">
                {ACEDC.sigle}
              </p>
              <p className="text-xs text-gray-500">
                {ACEDC.type}
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {liens.map((lien, i) => (
              <motion.div
                key={lien.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={lien.href}
                  className="relative text-gray-700 hover:text-acedc-green-600 font-medium transition-colors py-2 group"
                >
                  {lien.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-acedc-green-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/telecharger"
                className="inline-flex items-center gap-2 bg-acedc-green-600 hover:bg-acedc-green-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm"
              >
                📥 Télécharger
              </Link>
            </motion.div>
          </nav>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setMenuOuvert(!menuOuvert)}
            className="md:hidden text-acedc-green-700 p-2"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOuvert ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuOuvert && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 flex flex-col gap-2 overflow-hidden"
          >
            {liens.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                onClick={() => setMenuOuvert(false)}
                className="px-4 py-3 text-gray-700 hover:bg-acedc-green-50 rounded-lg font-medium"
              >
                {lien.label}
              </Link>
            ))}
            <Link
              href="/telecharger"
              className="inline-flex items-center justify-center gap-2 bg-acedc-green-600 hover:bg-acedc-green-700 text-white font-semibold px-5 py-3 rounded-lg text-center"
              onClick={() => setMenuOuvert(false)}
            >
              📥 Télécharger l'app
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}