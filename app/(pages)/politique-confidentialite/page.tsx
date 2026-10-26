'use client';

import { Shield, Database, Cookie, UserCheck, Mail } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[35vh] sm:min-h-[40vh] flex items-center justify-center pt-20 bg-gradient-to-b from-blue-700 to-blue-900 text-white">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto">
          Comment vos données sont traitées sur lescolan.com
        </p>
      </div>
    </section>
  );
}

function PrincipeSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-50 border-l-4 border-green-600 p-6 sm:p-8 rounded-r-lg">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Shield className="text-green-600" size={24} />
            Principe général
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Le site lescolan.com est un site vitrine. Il ne propose ni formulaire de contact,
            ni espace client, ni réservation en ligne. Aucune donnée personnelle n'est collectée
            automatiquement à des fins de marketing ou de profilage.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResponsableSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <UserCheck className="text-blue-600" size={28} />
          Responsable du traitement
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-3 text-sm sm:text-base">
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Responsable</span>
            <span className="sm:col-span-2 text-gray-900">
              Marie DESTANNES, entrepreneur individuel
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Adresse</span>
            <span className="sm:col-span-2 text-gray-900">Lieu-dit Bidous, 09140 Ustou, France</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Contact</span>
            <span className="sm:col-span-2 text-gray-900">lescolan@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DonneesTraiteesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Database className="text-purple-600" size={28} />
          Données effectivement traitées
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">1. Demandes par email ou téléphone</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Si vous nous contactez par email ou par téléphone, nous conservons vos coordonnées
              (nom, adresse email, numéro de téléphone) et le contenu de votre message uniquement
              pour répondre à votre demande. Ces données ne sont pas stockées sur le site.
            </p>
            <p className="text-gray-500 text-xs mt-2">Base légale : intérêt légitime (répondre à une demande).</p>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">2. Carte Google Maps (page Contact)</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              La page Contact intègre une carte Google Maps via une iframe. Le chargement de
              cette carte peut entraîner un dépôt de cookies par Google LLC (États-Unis).
              Si vous ne souhaitez pas être tracé, ne consultez pas la carte ou utilisez un
              bloqueur de scripts.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Transfert hors UE : oui, vers Google LLC (États-Unis), encadré par les clauses
              contractuelles types de la Commission européenne.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">3. Carte Leaflet (page Randonnées)</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              La carte des sentiers utilise Leaflet et charge des tuiles depuis
              OpenStreetMap France. Aucun cookie publicitaire n'est déposé. Les requêtes
              techniques (adresse IP) sont nécessaires à l'affichage des tuiles.
            </p>
            <p className="text-gray-500 text-xs mt-2">Base légale : intérêt légitime (affichage de la carte).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CookiesSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Cookie className="text-amber-600" size={28} />
          Cookies et stockage local
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-sm sm:text-base text-gray-700 space-y-4">
          <p>
            <strong>Ce site ne dépose aucun cookie publicitaire ou de mesure d'audience.</strong>
          </p>
          <p>
            Le bouton de bascule clair/sombre utilise le stockage local (<code>localStorage</code>)
            de votre navigateur pour mémoriser votre préférence. Il s'agit d'un stockage purement
            fonctionnel, qui ne permet pas de vous identifier et ne nécessite donc pas de
            consentement préalable.
          </p>
          <p>
            Le seul service tiers susceptible de déposer des cookies est Google Maps sur la page
            Contact (voir ci-dessus). En dehors de ce cas, aucune bannière de consentement n'est
            nécessaire.
          </p>
        </div>
      </div>
    </section>
  );
}

function DroitsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Mail className="text-blue-600" size={28} />
          Vos droits
        </h2>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 text-sm sm:text-base text-gray-700 space-y-4">
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
            d'effacement et de limitation du traitement des données vous concernant.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous à :{' '}
            <a href="mailto:lescolan@gmail.com" className="text-green-600 hover:text-green-700 underline">
              lescolan@gmail.com
            </a>
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL
            (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.
          </p>
          <p className="text-gray-500 text-xs">
            Dernière mise à jour : 24/10/2026
          </p>
        </div>
      </div>
    </section>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <PrincipeSection />
      <ResponsableSection />
      <DonneesTraiteesSection />
      <CookiesSection />
      <DroitsSection />
    </div>
  );
}