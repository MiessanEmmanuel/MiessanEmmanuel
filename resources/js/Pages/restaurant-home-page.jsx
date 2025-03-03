import React, { useState } from 'react';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  return (
    <div className="min-h-screen bg-amber-50">
      {/* En-tête de navigation */}
      <header className="bg-red-800 text-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-red-800">
              LD
            </div>
            <h1 className="text-xl font-bold">La Dakaroise</h1>
          </div>
          <nav className="flex space-x-4">
            <button 
              onClick={() => setActiveSection('accueil')} 
              className={`px-3 py-1 rounded ${activeSection === 'accueil' ? 'bg-yellow-400 text-red-800' : 'text-white hover:bg-red-700'}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => setActiveSection('menu')} 
              className={`px-3 py-1 rounded ${activeSection === 'menu' ? 'bg-yellow-400 text-red-800' : 'text-white hover:bg-red-700'}`}
            >
              Menu
            </button>
            <button 
              onClick={() => setActiveSection('reservation')} 
              className={`px-3 py-1 rounded ${activeSection === 'reservation' ? 'bg-yellow-400 text-red-800' : 'text-white hover:bg-red-700'}`}
            >
              Réservation
            </button>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Section Accueil */}
        {activeSection === 'accueil' && (
          <div>
            <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src="/api/placeholder/1200/400" 
                  alt="Restaurant La Dakaroise" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white text-center">
                    La Saveur du Sénégal à Votre Table
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Découvrez l'authenticité de la cuisine sénégalaise, un voyage gustatif entre tradition et modernité, où chaque plat raconte une histoire.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold text-red-800 mb-2">Nos Spécialités</h3>
                    <p className="text-sm text-red-600">
                      Thieboudienne, Mafé, Yassa : découvrez les plats traditionnels du Sénégal
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-bold text-yellow-800 mb-2">Ambiance</h3>
                    <p className="text-sm text-yellow-600">
                      Une atmosphère chaleureuse qui vous transporte directement à Dakar
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-2">Produits Frais</h3>
                    <p className="text-sm text-green-600">
                      Des ingrédients locaux et de saison, sélectionnés avec soin
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Horaires et Coordonnées */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Informations Pratiques</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">Nos Horaires</h3>
                  <ul className="text-gray-600">
                    <li>Lundi - Vendredi : 11h30 - 14h30 | 18h30 - 22h30</li>
                    <li>Samedi : 11h30 - 15h00 | 18h30 - 23h00</li>
                    <li>Dimanche : Fermé</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">Contactez-nous</h3>
                  <p className="text-gray-600">
                    📞 +33 1 23 45 67 89<br />
                    📧 contact@ladakaroise.fr<br />
                    📍 45 Rue des Saveurs, 75010 Paris
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'menu' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Notre Menu</h2>
            <p>Contenu du menu à venir...</p>
          </div>
        )}

        {activeSection === 'reservation' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Réservation de Table</h2>
            <p>Formulaire de réservation à venir...</p>
          </div>
        )}
      </main>

      {/* Pied de page */}
      <footer className="bg-red-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 La Dakaroise. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
