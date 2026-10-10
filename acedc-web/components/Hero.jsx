'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ACEDC } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-acedc-green-700 via-acedc-green-600 to-acedc-green-500 text-white overflow-hidden">
      {/* Cercles décoratifs animés en arrière-plan */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-acedc-gold-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texte */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-acedc-gold-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
            >
              🗑️ {ACEDC.type}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              {ACEDC.slogan}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              {ACEDC.sigle} œuvre pour un environnement sain dans Kinshasa.
              Collecte et évacuation des déchets pour les ménages, écoles,
              centres de santé et commerces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/telecharger"
                  className="inline-flex items-center gap-2 bg-acedc-gold-500 hover:bg-acedc-gold-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  📥 Télécharger l'application
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-acedc-green-700 font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  📞 Nous contacter
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats rapides */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20"
            >
              {[
                { valeur: '4', label: 'Communes' },
                { valeur: '2025', label: 'Création' },
                { valeur: '2-5x', label: 'Par semaine' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  <p className="text-3xl font-bold text-acedc-gold-400">
                    {stat.valeur}
                  </p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-8 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-8xl mb-4"
                >
                  🌍
                </motion.div>
                <p className="text-2xl font-bold text-white">
                  Kinshasa propre
                </p>
                <p className="text-white/80 mt-2">
                  Notre engagement pour demain
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}