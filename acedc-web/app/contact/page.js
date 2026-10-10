import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACEDC } from '@/lib/constants';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  const whatsappUrl = `https://wa.me/${ACEDC.whatsapp.replace('+', '')}`;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-acedc-green-700 text-white py-16">
          <div className="container-acedc text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Une question ? Un devis ? Nous sommes disponibles pour vous.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-acedc max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Infos */}
              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-6">
                  📞 Nos coordonnées
                </h2>

                <div className="space-y-6">
                  {/* Téléphone */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-acedc-green-100 flex items-center justify-center text-2xl flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <a
                        href={`tel:${ACEDC.telephone}`}
                        className="text-lg font-bold text-acedc-green-700 hover:text-acedc-gold-600 transition"
                      >
                        {ACEDC.telephoneAffiche}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 hover:border-green-500 transition"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <p className="text-lg font-bold text-green-600">
                        Discuter maintenant
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-acedc-gold-100 flex items-center justify-center text-2xl flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href={`mailto:${ACEDC.email}`}
                        className="text-lg font-bold text-acedc-green-700 hover:text-acedc-gold-600 transition"
                      >
                        {ACEDC.email}
                      </a>
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-acedc-green-100 flex items-center justify-center text-2xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Adresse du siège</p>
                      <p className="font-semibold text-gray-800">
                        {ACEDC.adresse.rue}
                      </p>
                      <p className="text-sm text-gray-600">
                        {ACEDC.adresse.quartier}, {ACEDC.adresse.commune}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {ACEDC.adresse.reference}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coordonnateur */}
              <div>
                <h2 className="text-2xl font-bold text-acedc-green-700 mb-6">
                  👤 Le coordonnateur
                </h2>
                <div className="bg-gradient-to-br from-acedc-green-50 to-acedc-gold-50 rounded-2xl p-8 border-2 border-acedc-green-100">
                  <div className="w-20 h-20 rounded-full bg-acedc-green-600 flex items-center justify-center text-4xl mx-auto mb-4">
                    👤
                  </div>
                  <p className="text-xl font-bold text-acedc-green-700 text-center">
                    {ACEDC.coordonnateur.nom}
                  </p>
                  <p className="text-acedc-gold-600 font-semibold text-center mb-4">
                    {ACEDC.coordonnateur.fonction}
                  </p>
                  <div className="flex justify-center gap-3 mt-6">
                    <a
                      href={`tel:${ACEDC.telephone}`}
                      className="btn-primary text-sm"
                    >
                      📞 Appeler
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold text-sm"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                {/* Zones */}
                <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-acedc-green-700 mb-3">
                    📍 Zones d'intervention
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ACEDC.communes.map((c, i) => (
                      <span
                        key={i}
                        className="bg-acedc-green-100 text-acedc-green-700 text-sm font-semibold px-3 py-1 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
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