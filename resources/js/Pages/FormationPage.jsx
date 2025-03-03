import React, { useState } from 'react';
import { Search, Calendar, Filter, ArrowRight } from 'lucide-react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { ReactLenis, useLenis } from 'lenis/react';

import Footer from './Footer';

const FormationPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const { formations, categories } = usePage().props

    console.log(categories);

    /*  const categories = [
       'Développement Web',
       'Marketing Digital',
       'Design',
       'Entrepreneuriat',
       'E-commerce'
     ]; */

    /* const formations = [
      {
        id: 1,
        title: 'Formation Complete WordPress',
        category: 'Développement Web',
        date: '2024-12-15',
        duration: '3 mois',
        price: '49.000F',
        spots: 10,
        description: 'Apprenez à créer et gérer des sites WordPress professionnels'
      },
      {
        id: 2,
        title: 'Marketing Digital Avancé',
        category: 'Marketing Digital',
        date: '2024-11-20',
        duration: '2 mois',
        price: '70.000F',
        spots: 15,
        description: 'Maîtrisez les stratégies de marketing digital modernes'
      },
      // Autres formations...
    ]; */

    const filteredFormations = formations.filter(formation => {
        const matchesSearch = formation.nom.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || formation.categorie_name === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >
            <Head title="Formation" />

            <div className="min-h-screen text-white">
                <div className="max-w-auto  px-5 lg:px-24 absolute top-[20px] ">
                    <button type="button" onClick={() => router.get(route('accueil'))}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            className="w-8 h-8 rounded-full bg-black/40 hover:bg-gray-600 p-2 backdrop-blur-xl text-gray-100  border border-zinc-600 hover:border-none transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                </div>
                {/* Hero Section */}
                <div className="linear-gradient p-12">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6"> Formations</h1>
                        <p className="text-xl mb-8">Développez vos compétences avec des programmes spécialisés</p>
                    </div>
                </div>
                {/* Filters Section */}
                <div className="container mx-auto py-8 px-4 mb-[5em]">
                    <div className="flex flex-wrap gap-4 mb-8">
                        {/* Search Bar */}
                        <div className="relative flex-1 min-w-[300px]">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Rechercher une formation..."
                                className="w-full pl-10 pr-4 py-2 bg-secondary/80 rounded-lg text-white "
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            className="bg-white px-4 py-2 rounded-lg text-secondary"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            value={selectedCategory}
                        >
                            <option value="">Toutes les catégories</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.nom}>{category.nom}</option>
                            ))}
                        </select>
                    </div>

                    {/* Formation Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFormations.map(formation => (
                            <div key={formation.id} className="bg-secondary rounded-xl overflow-hidden hover:shadow-lg transition ring-1 ring-zinc-700">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-primary  text-sm">{formation.categorie_name}</span>
                                        <span className="text-gray-400 text-sm flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {formation.date_debut}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{formation.nom}</h3>
                                    <p className="text-gray-400 mb-4">{formation.description_courte}</p>
                                    <div className="flex items-center justify-between mb-4">
                                        {formation.gratuit ? (
                                            <span className="text-white font-bold">Gratuit</span>
                                        ) : (
                                            <span className="text-white font-bold">{formation.tarif} Fcfa</span>

                                        )}
                                        <span className="text-gray-400">{formation.duree_valeur} {formation.duree_unite}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        {formation.nombre_de_place <= 0 ? (
                                            <p className="text-red-500 font-bold">Sold Out</p>
                                        ) : (<span className="text-sm text-gray-400">
                                            {formation.nombre_de_place} places disponibles
                                        </span>)}

                                        <Link href={route('formation.single', formation.slug)} className={"bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition "}>
                                            {formation.nombre_de_place <= 0 ? "Voir juste les détails" : "S'inscrire"}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex items-center justify-center mb-9'>
                    <Link href={route('exercices.indexForUser')} className="inline-block text-whitepattern px-6 py-3 rounded linear-gradient-bouton lg:mt-4 l font-bold hover:scale-5 ">
                        <span className='relative z-10'>
                            Pratiquer avec des exercices <span ariaHidden="true">&rarr;</span>
                        </span>
                    </Link>
                </div>
                <Footer />
            </div >
        </ReactLenis>
    );
};

export default FormationPage;
