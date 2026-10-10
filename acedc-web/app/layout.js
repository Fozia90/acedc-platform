import './globals.css';
import { ACEDC } from '@/lib/constants';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: `${ACEDC.sigle} - ${ACEDC.type}`,
    template: `%s | ${ACEDC.sigle}`,
  },
  description: `${ACEDC.nomComplet}. ${ACEDC.slogan}. Présent dans les communes de ${ACEDC.communes.join(', ')}.`,
  keywords: [
    'ACEDC',
    'assainissement',
    'Kinshasa',
    'déchets',
    'collecte',
    'abonnements',
    'RDC',
    ...ACEDC.communes,
  ],
  authors: [{ name: ACEDC.coordonnateur.nom }],
  creator: ACEDC.coordonnateur.nom,
  publisher: ACEDC.sigle,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: `${ACEDC.sigle} - ${ACEDC.type}`,
    description: ACEDC.slogan,
    siteName: ACEDC.sigle,
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}