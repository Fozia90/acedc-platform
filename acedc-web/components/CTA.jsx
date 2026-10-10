'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ACEDC } from '@/lib/constants';

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-acedc-green-700 to-acedc-green-600 relative overflow-hidden">
      {/* Cercle décoratif animé */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-acedc-gold-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          📱 Gérez votre abonnement en un clin d'œil
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
        >
          Téléchargez l'application {ACEDC.sigle} et accédez à tous vos
          services : suivi de vos fréquences, renouvellement, et bien plus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/telecharger"
              className="inline-flex items-center gap-2 bg-acedc-gold-500 hover:bg-acedc-gold-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
            >
              📥 Télécharger l'application
            </Link>
          </motion.div>

          <motion.a
            href={`https://wa.me/${ACEDC.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 bg-white text-acedc-green-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Effet de pulsation */}
            <motion.span
              className="absolute inset-0 bg-white rounded-lg"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ zIndex: -1 }}
            />
            <span className="relative">💬 WhatsApp</span>
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-white/80 text-sm"
        >
          Une question ? Appelez-nous au{' '}
          <a
            href={`tel:${ACEDC.telephone}`}
            className="font-bold underline hover:text-acedc-gold-400 transition"
          >
            {ACEDC.telephoneAffiche}
          </a>
        </motion.p>
      </div>
    </section>
  );
}