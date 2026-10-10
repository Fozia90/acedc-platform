'use client';

import { motion } from 'framer-motion';
import { ACEDC } from '@/lib/constants';

export default function Frequences() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-acedc-green-700 mb-4">
            Fréquences d'évacuation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un service régulier adapté à chaque type de client, avec tri des
            déchets au départ.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ménages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-acedc-green-50 to-acedc-green-100 rounded-2xl p-8 border-2 border-acedc-green-200 shadow-md"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              🏠
            </motion.div>
            <h3 className="text-2xl font-bold text-acedc-green-700 mb-3">
              Ménages
            </h3>
            <p className="text-gray-700 mb-4">
              Une collecte régulière pour votre foyer.
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                className="text-4xl font-bold text-acedc-gold-600"
              >
                2 à 3
              </motion.span>
              <span className="text-gray-600 font-medium">
                fois par semaine
              </span>
            </div>
            {/* Barre de progression */}
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-acedc-green-500 to-acedc-green-700 rounded-full"
              />
            </div>
          </motion.div>

          {/* Écoles & Commerces */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-acedc-yellow-300 to-acedc-gold-300 rounded-2xl p-8 border-2 border-acedc-gold-400 shadow-md"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              🏫
            </motion.div>
            <h3 className="text-2xl font-bold text-acedc-gold-700 mb-3">
              Écoles & Commerces
            </h3>
            <p className="text-gray-700 mb-4">
              Un service renforcé pour les lieux à forte fréquentation.
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                className="text-4xl font-bold text-acedc-green-700"
              >
                3 à 5
              </motion.span>
              <span className="text-gray-700 font-medium">
                fois par semaine
              </span>
            </div>
            {/* Barre de progression */}
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-acedc-gold-500 to-acedc-green-600 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Tri au départ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-acedc-green-700 text-white rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-lg"
        >
          <motion.p
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg font-semibold"
          >
            ♻️ Tri des déchets au départ inclus
          </motion.p>
          <p className="text-white/80 text-sm mt-1">
            Nous trions à la source pour un recyclage optimal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}