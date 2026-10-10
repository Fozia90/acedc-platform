'use client';

import { motion } from 'framer-motion';
import { ACEDC } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring' },
  },
};

export default function Zones() {
  return (
    <section className="py-16 md:py-20 bg-acedc-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-acedc-green-700 mb-4">
            Zones couvertes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {ACEDC.sigle} est actuellement présent dans 4 communes de Kinshasa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {ACEDC.communes.map((commune, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 15px 30px rgba(249, 168, 37, 0.2)',
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md border-b-4 border-acedc-gold-500 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-16 h-16 mx-auto mb-3 rounded-full bg-acedc-green-100 flex items-center justify-center"
              >
                <span className="text-2xl">📍</span>
              </motion.div>
              <h3 className="font-bold text-acedc-green-700 text-lg">
                {commune}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.p
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-gray-600 italic"
          >
            📢 Le service s'étendra progressivement à d'autres communes de Kinshasa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}