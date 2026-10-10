import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACEDC } from '@/lib/constants';

export const metadata = {
  title: 'À propos',
};

export default function APropos() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-acedc-green-700 text-white py-16">
          <div className="container-acedc text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Découvrez notre mission, notre vision et notre engagement pour
              un Kinshasa plus propre.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container-acedc max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-acedc-green-700 mb-4">
                  🎯 Notre mission
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {ACEDC.nomComplet} est un établissement d'assainissement
                  qui œuvre pour un environnement sain et durable dans la
                  ville de Kinshasa.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nous nous chargeons de la collecte et de l'évacuation des
                  déchets vers les points de décharge, afin de lutter contre
                  l'insalubrité et les poubelles sauvages.
                </p>
              </div>
              <div className="bg-acedc-green-50 rounded-2xl p-8 border-l-4 border-acedc-gold-500">
                <div className="text-6xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold text-acedc-green-700 text-center mb-2">
                  Notre vision
                </h3>
                <p className="text-gray-700 text-center italic">
                  « {ACEDC.slogan} »
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-16 bg-gray-50">
          <div className="container-acedc">
            <h2 className="section-title text-center">Notre parcours</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">📅</div>
                <p className="text-sm text-gray-500">Création</p>
                <p className="text-2xl font-bold text-acedc-green-700">
                  25 Décembre 2025
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">📍</div>
                <p className="text-sm text-gray-500">Communes couvertes</p>
                <p className="text-2xl font-bold text-acedc-green-700">4</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-4xl mb-2">🚛</div>
                <p className="text-sm text-gray-500">Fréquence</p>
                <p className="text-2xl font-bold text-acedc-green-700">
                  2 à 5x / semaine
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Domaines d'intervention */}
        <section className="py-16">
          <div className="container-acedc">
            <h2 className="section-title text-center">Nos domaines d'intervention</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {ACEDC.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-acedc-green-100 hover:border-acedc-green-600 rounded-2xl p-6 transition-all"
                >
                  <div className="text-5xl mb-3">{service.icone}</div>
                  <h3 className="font-bold text-acedc-green-700 mb-2">
                    {service.titre}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coordonnateur */}
        <section className="py-16 bg-acedc-green-700 text-white">
          <div className="container-acedc max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-acedc-gold-400">
              Notre direction
            </h2>
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-acedc-gold-500 flex items-center justify-center text-4xl">
              👤
            </div>
            <p className="text-2xl font-bold">{ACEDC.coordonnateur.nom}</p>
            <p className="text-acedc-gold-400 font-semibold">
              {ACEDC.coordonnateur.fonction}
            </p>
          </div>
        </section>

        {/* Siège */}
        <section className="py-16 bg-gray-50">
          <div className="container-acedc max-w-3xl">
            <h2 className="section-title text-center">Notre siège</h2>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center mt-8">
              <div className="text-5xl mb-4">🏢</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {ACEDC.adresse.rue}
                <br />
                {ACEDC.adresse.quartier}, {ACEDC.adresse.commune}
                <br />
                {ACEDC.adresse.reference}
                <br />
                {ACEDC.adresse.ville}, {ACEDC.adresse.pays}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}