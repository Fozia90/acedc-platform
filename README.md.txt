# ACEDC Platform

Plateforme complète pour **Action Commune pour l'Éveil et le Développement Communautaire (ACEDC)**.

## 📦 Structure du projet

\`\`\`
acedc_platform/
├── acedc-web/       🌐 Site vitrine (Next.js) — déployé sur Vercel
├── acedc-mobile/    📱 Application mobile (Expo) — à venir
└── acedc-api/       🔧 Backend API (FastAPI) — à venir
\`\`\`

## 🌐 Site web

Le site vitrine présente :
- L'entreprise ACEDC
- Les services (ménages, écoles, santé, commerces)
- Les zones couvertes (4 communes)
- Le lien de téléchargement de l'app mobile

**Stack** : Next.js 16 · Tailwind CSS v4 · Framer Motion

**URL de production** : [https://acedc-web.vercel.app](https://acedc-web.vercel.app)

## 📱 Application mobile

À venir. Elle permettra :
- 🔐 Authentification (admin suprême / admin / utilisateur)
- 📷 Scanner de QR code pour les abonnés
- 📊 Compteur de fréquences
- 💰 Gestion financière
- 👥 Gestion des abonnés et personnels

**Stack prévue** : Expo (React Native) + FastAPI + PostgreSQL

## 🚀 Démarrage rapide (web)

\`\`\`bash
cd acedc-web
npm install
npm run dev
\`\`\`

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## 👤 Auteur

**Fortuna Ziata** — Coordonnateur-Manager ACEDC
📞 +243 841 351 095

---

© 2026 ACEDC — Tous droits réservés