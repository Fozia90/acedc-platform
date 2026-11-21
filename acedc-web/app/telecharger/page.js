import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACEDC } from '@/lib/constants';

export const metadata = {
  title: 'Télécharger',
};

const APK_URL = '/acedc.apk'; // ← fichier placé dans /public/acedc.apk

export default function Telecharger() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-acedc-green-700 to-acedc-green-500 text-white py-20">
          <div className="container-acedc text-center">
            <div className="text-7xl mb-6">📱</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Télécharger l'application
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Accédez à tous les services {ACEDC.sigle} depuis votre téléphone.
            </p>

            {/* Boutons de téléchargement */}
            <div className="flex flex-wrap justify-center gap-4">
              {APK_URL ? (
                <a
                  href={APK_URL}
                  className="btn-gold text-lg"
                  download
                >
                  📥 Télécharger l'APK
                </a>
              ) : (
                <button
                  disabled
                  className="btn-gold text-lg opacity-60 cursor-not-allowed"
                >
                  📥 APK - Bientôt disponible
                </button>
              )}

              {ACEDC.app.playStoreUrl ? (
                <a
                  href={ACEDC.app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !border-white !text-white hover:!bg-white hover:!text-acedc-green-700 text-lg"
                >
                  ▶️ Google Play
                </a>
              ) : (
                <button
                  disabled
                  className="btn-outline !border-white !text-white opacity-60 cursor-not-allowed text-lg"
                >
                  ▶️ Play Store - Bientôt
                </button>
              )}
            </div>

            <p className="mt-6 text-white/70 text-sm">
              ⚠️ L'application est en cours de finalisation. Les liens seront
              disponibles très bientôt.
            </p>
          </div>
        </section>

        {/* Comment installer */}
        <section className="py-16">
          <div className="container-acedc max-w-4xl">
            <h2 className="section-title text-center">Comment installer ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  num: '1',
                  titre: 'Télécharger',
                  desc: "Cliquez sur le bouton de téléchargement ci-dessus.",
                  icone: '📥',
                },
                {
                  num: '2',
                  titre: 'Autoriser',
                  desc: "Si demandé, autorisez l'installation depuis une source externe.",
                  icone: '✅',
                },
                {
                  num: '3',
                  titre: 'Installer',
                  desc: "Ouvrez le fichier et suivez les instructions.",
                  icone: '🚀',
                },
              ].map((etape) => (
                <div
                  key={etape.num}
                  className="bg-white border-2 border-acedc-green-100 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-acedc-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {etape.num}
                  </div>
                  <div className="text-4xl mb-2">{etape.icone}</div>
                  <h3 className="font-bold text-acedc-green-700 mb-2">
                    {etape.titre}
                  </h3>
                  <p className="text-sm text-gray-600">{etape.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 bg-gray-50">
          <div className="container-acedc max-w-4xl">
            <h2 className="section-title text-center">
              Que puis-je faire dans l'app ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                '📊 Consulter mon abonnement',
                '🔔 Recevoir des rappels',
                '📅 Voir mes fréquences',
                '💳 Renouveler mon abonnement',
                '📞 Contacter ACEDC directement',
                '📜 Historique de mes services',
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-acedc-green-100 flex items-center gap-3"
                >
                  <span className="text-xl">{item.split(' ')[0]}</span>
                  <span className="text-gray-700 font-medium">
                    {item.substring(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}