'use client';

import { motion } from 'framer-motion';
import { ACEDC } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-acedc-green-700 mb-4">
            Nos services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {ACEDC.sigle} intervient dans 4 domaines clés pour garantir un
            environnement sain et durable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ACEDC.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(46, 125, 50, 0.15)',
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-acedc-green-600 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-5xl mb-4"
              >
                {service.icone}
              </motion.div>
              <h3 className="text-xl font-bold text-acedc-green-700 mb-2">
                {service.titre}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-acedc-gold-600 font-semibold text-sm">
                <span>🔁</span>
                <span>{service.frequence}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}