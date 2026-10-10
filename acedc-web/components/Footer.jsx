import Link from 'next/link';
import Image from 'next/image';
import { ACEDC } from '@/lib/constants';

export default function Footer() {
  const annee = 2026;

  return (
    <footer className="bg-acedc-green-900 text-white">
      <div className="container-acedc py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt={`Logo ${ACEDC.sigle}`}
                width={50}
                height={50}
                className="object-contain bg-white rounded-lg p-1"
              />
              <div>
                <p className="font-bold text-xl text-acedc-gold-400">
                  {ACEDC.sigle}
                </p>
                <p className="text-xs text-white/70">{ACEDC.type}</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {ACEDC.nomComplet}. {ACEDC.slogan}.
            </p>
            <p className="text-xs text-white/60">
              Créée le {ACEDC.dateCreation}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-acedc-gold-400 mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-acedc-gold-400 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-white/80 hover:text-acedc-gold-400 transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/telecharger" className="text-white/80 hover:text-acedc-gold-400 transition">
                  Télécharger
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-acedc-gold-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-white/80 hover:text-acedc-gold-400 transition">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-acedc-gold-400 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  {ACEDC.adresse.rue}
                  <br />
                  {ACEDC.adresse.quartier}, {ACEDC.adresse.commune}
                  <br />
                  {ACEDC.adresse.ville}, {ACEDC.adresse.pays}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${ACEDC.telephone}`} className="hover:text-acedc-gold-400">
                  {ACEDC.telephoneAffiche}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href={`https://wa.me/${ACEDC.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-acedc-gold-400"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${ACEDC.email}`} className="hover:text-acedc-gold-400">
                  {ACEDC.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {annee} {ACEDC.sigle}. Tous droits réservés.
          </p>
          <p>
            Coordonnateur : {ACEDC.coordonnateur.nom}
          </p>
        </div>
      </div>
    </footer>
  );
}