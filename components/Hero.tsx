// // components/Hero.tsx
// 'use client';

// import Link from 'next/link';
// import { ArrowRight, MapPin } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[70vh] sm:min-h-screen pt-20 pb-12 flex items-center justify-center overflow-hidden">
//       {/* Image de fond avec overlay */}
//       {/* <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/images/hero/vue-panoramique-600-337.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       /> */}

// <p>PROUT</p>
//       <div
//         className="absolute"
//         style={{
//           backgroundColor: 'red',
//           top: 0,
//           bottom: 0,
//           left: 0,
//           right: 0,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
// <p>ANTI PROUT</p>

//       {/* Contenu */}
//       <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
//         {/* Badge localisation */}
//         <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-8 text-sm font-medium">
//           <MapPin className="mr-2" size={16} />
//           Vallée d'Ustou, Ariège - Pyrénées
//         </span>

//         {/* Titre principal */}
//         <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
//           Ici, le temps
//           <br />
//           <span className="text-green-300">dure longtemps</span>
//         </h1>

//         {/* Sous-titre */}
//         <p className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto">
//           Un refuge authentique au cœur de la vallée d'Ustou
//         </p>

//         <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
//           Bienvenue au gîte L'Escolan, une ancienne école restaurée avec passion
//           pour vous offrir un séjour nature inoubliable en Ariège.
//         </p>

//         {/* Boutons d'action */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center bg-green-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//           >
//             <span>Réserver un séjour</span>
//             <ArrowRight className="ml-2" size={20} />
//           </Link>

//           <Link
//             href="/tarifs"
//             className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//           >
//             Voir les tarifs
//           </Link>
//         </div>

//         {/* Statistiques */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
//           <div className="text-center">
//             <p className="text-3xl font-bold text-white mb-1">25+</p>
//             <p className="text-sm text-white/80">Années d'expérience</p>
//           </div>
//           <div className="text-center">
//             <p className="text-3xl font-bold text-white mb-1">500+</p>
//             <p className="text-sm text-white/80">Hôtes accueillis</p>
//           </div>
//           <div className="text-center">
//             <p className="text-3xl font-bold text-white mb-1">4.9/5</p>
//             <p className="text-sm text-white/80">Note moyenne</p>
//           </div>
//           <div className="text-center">
//             <p className="text-3xl font-bold text-white mb-1">30+</p>
//             <p className="text-sm text-white/80">Activités à proximité</p>
//           </div>
//         </div>
//       </div>

//       {/* Indicateur de scroll */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 animate-bounce">
//           <div className="w-1 h-2 bg-white rounded-full"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
