'use client';

import { Info, Server, User, FileText } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[35vh] sm:min-h-[40vh] flex items-center justify-center pt-20 bg-gradient-to-b from-gray-700 to-gray-900 text-white">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
          Mentions légales
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Informations légales relatives au site lescolan.com
        </p>
      </div>
    </section>
  );
}

function EditeurSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <User className="text-green-600" size={28} />
          Éditeur du site
        </h2>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4 text-sm sm:text-base">
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Statut juridique</span>
            <span className="sm:col-span-2 text-gray-900">Entrepreneur individuel (EI)</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Nom et prénom</span>
            <span className="sm:col-span-2 text-gray-900">Marie DESTANNES</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Nom commercial</span>
            <span className="sm:col-span-2 text-gray-900">L'Escolan</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">SIRET</span>
            <span className="sm:col-span-2 text-gray-900">913 462 123 00039</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Adresse</span>
            <span className="sm:col-span-2 text-gray-900">
              Lieu-dit Bidous, 09140 Ustou, Ariège, France
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Téléphone</span>
            <span className="sm:col-span-2 text-gray-900">05 61 96 58 72</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Email</span>
            <span className="sm:col-span-2 text-gray-900">lescolan@gmail.com</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">TVA intracommunautaire</span>
            <span className="sm:col-span-2 text-gray-900">
              Non assujetti (article 293 B du CGI)
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Directeur de la publication</span>
            <span className="sm:col-span-2 text-gray-900">
              Marie DESTANNES
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm mt-6 leading-relaxed">
          Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
          l'économie numérique (LCEN) [citation:2][citation:4]. L'entrepreneur individuel exerçant
          sous le nom commercial « L'Escolan » est immatriculé au Registre national des entreprises
          (RNE) sous le numéro SIRET indiqué ci-dessus.
        </p>
      </div>
    </section>
  );
}

function HebergeurSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Server className="text-blue-600" size={28} />
          Hébergeur du site
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-3 text-sm sm:text-base">
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Société</span>
            <span className="sm:col-span-2 text-gray-900">OVH SAS</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Adresse</span>
            <span className="sm:col-span-2 text-gray-900">
              2 rue Kellermann, 59100 Roubaix, France
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Téléphone</span>
            <span className="sm:col-span-2 text-gray-900">1007 (ou +33 9 72 10 10 07)</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <span className="font-semibold text-gray-700">Site web</span>
            <span className="sm:col-span-2 text-gray-900">www.ovh.com</span>
          </div>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm mt-4">
          Ces informations sont obligatoires en vertu de la LCEN [citation:4].
        </p>
      </div>
    </section>
  );
}

function ProprieteSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <FileText className="text-amber-600" size={28} />
          Propriété intellectuelle
        </h2>

        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 space-y-4">
          <p>
            L'ensemble des contenus présents sur le site lescolan.com (textes, photographies,
            illustrations, logos, éléments graphiques) est la propriété exclusive de L'Escolan,
            sauf mention contraire.
          </p>
          <p>
            Toute reproduction, représentation, modification ou adaptation, totale ou partielle,
            de ces contenus, par quelque procédé que ce soit, est interdite sans autorisation
            écrite préalable.
          </p>
          <p>
            Les photographies du gîte et des paysages ont été réalisées par L'Escolan ou utilisées
            avec l'autorisation de leurs auteurs respectifs.
          </p>
        </div>
      </div>
    </section>
  );
}

function DonneesSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Info className="text-purple-600" size={28} />
          Données personnelles
        </h2>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-sm sm:text-base text-gray-700 space-y-4">
          <p>
            Le site lescolan.com ne collecte aucune donnée personnelle via un formulaire
            d'inscription, de contact ou de réservation en ligne.
          </p>
          <p>
            Les seules données susceptibles d'être traitées sont celles que vous transmettez
            volontairement par téléphone ou par email (nom, coordonnées, demande de réservation),
            dans le seul but de répondre à votre demande. Elles ne sont ni cédées ni vendues à
            des tiers.
          </p>
          <p>
            Pour plus d'informations, consultez notre{' '}
            <a href="/politique-confidentialite" className="text-green-600 hover:text-green-700 underline">
              politique de confidentialité
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <EditeurSection />
      <HebergeurSection />
      <ProprieteSection />
      <DonneesSection />
    </div>
  );
}