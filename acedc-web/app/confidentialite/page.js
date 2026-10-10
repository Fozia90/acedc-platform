import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACEDC } from '@/lib/constants';

export const metadata = {
  title: 'Politique de confidentialité',
};

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-acedc-green-700 text-white py-16">
          <div className="container-acedc text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-white/90">
              Dernière mise à jour : 10 octobre 2026
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-acedc max-w-4xl prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-3">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {ACEDC.nomComplet} ({ACEDC.sigle}) respecte votre vie privée
                  et s'engage à protéger vos données personnelles. Cette
                  politique explique comment nous collectons et utilisons vos
                  informations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-3">
                  2. Données collectées
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse</li>
                  <li>Informations d'abonnement</li>
                  <li>Fréquences de collecte</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-3">
                  3. Utilisation des données
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vos données sont utilisées uniquement pour la gestion de
                  votre abonnement {ACEDC.sigle} : planification des
                  collectes, facturation, et communication de service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-3">
                  4. Partage des données
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous ne partageons pas vos données avec des tiers, sauf
                  obligation légale. Aucune donnée n'est vendue.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-3">
                  5. Vos droits
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Accéder à vos données</li>
                  <li>Corriger vos données</li>
                  <li>Supprimer votre compte</li>
                  <li>Vous opposer à certains traitements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-3">
                  6. Contact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question relative à vos données, contactez-nous :
                </p>
                <div className="bg-acedc-green-50 rounded-xl p-6 mt-4">
                  <p className="text-gray-700">
                    📞 <strong>{ACEDC.telephoneAffiche}</strong>
                  </p>
                  <p className="text-gray-700">
                    ✉️ <strong>{ACEDC.email}</strong>
                  </p>
                  <p className="text-gray-700">
                    📍 {ACEDC.adresse.rue}, {ACEDC.adresse.commune}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}