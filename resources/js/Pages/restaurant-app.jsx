import React, { useState } from 'react';

// Page de Connexion
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 text-black">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96 relative">
                <p className="text-orange-500 font-bold text-sm absolute inset-x-0 top-3 text-center">La Dakaroise</p>

                <div className="text-center mb-6 mt-3">
                    <h1 className="text-2xl font-bold text-gray-800">Connexion</h1>
                    <p className="text-gray-500">Connectez-vous à votre compte</p>

                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Votre email"
                                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Mot de passe</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Votre mot de passe"
                                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Se Connecter
                    </button>
                    <div className="text-center">
                        <a href="#" className="text-orange-500 text-sm hover:underline">
                            Mot de passe oublié ?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
    
};

// Page d'Accueil
const HomePage = () => {

    {/*return (
    <>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mon Restaurant</h1>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Accueil
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Menu
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Panier
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Bienvenue</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">Nos Menus</h3>
              <p className="text-sm text-blue-600">Découvrez nos délicieuses propositions</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-green-800">Réservation</h3>
              <p className="text-sm text-green-600">Réservez votre table en ligne</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h3 className="font-bold text-orange-800">Livraison</h3>
              <p className="text-sm text-orange-600">Commandez et faites-vous livrer</p>
            </div>
          </div>
        </section>
      </main>
    </div>

    </>*/}
    const [activeSection, setActiveSection] = useState('accueil');

    return (
        <div className="min-h-screen bg-amber-50">
            {/* En-tête de navigation */}
            <header className="bg-orange-500 text-white shadow-md fixed top-0 left-0 right-0 z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-10 h-10 mr-3 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-orange-500">
                            LD
                        </div>
                        <h1 className="text-xl font-bold">La Dakaroise</h1>
                    </div>
                    <nav className="flex space-x-4">
                        <button
                            onClick={() => setActiveSection('accueil')}
                            className={`px-3 py-1 rounded ${activeSection === 'accueil' ? 'bg-yellow-400 text-orange-500' : 'text-white hover:bg-red-700'}`}
                        >
                            Accueil
                        </button>
                        <button
                            onClick={() => setActiveSection('menu')}
                            className={`px-3 py-1 rounded ${activeSection === 'menu' ? 'bg-yellow-400 text-orange-500' : 'text-white hover:bg-red-700'}`}
                        >
                            Menu
                        </button>
                        <button
                            onClick={() => setActiveSection('reservation')}
                            className={`px-3 py-1 rounded ${activeSection === 'reservation' ? 'bg-yellow-400 text-orange-500' : 'text-white hover:bg-red-700'}`}
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
                                    src="../img/poulet.jpeg"
                                    alt="Restaurant La Dakaroise"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h2 className="text-3xl font-bold text-white text-center">
                                        La Saveur du Sénégal à Votre Table
                                        <p className='text-orange-500 text-center text-base'>Voir les plats
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="inline size-5">
                                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        </svg>
                                        </p>
                                    </h2>

                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Découvrez l'authenticité de la cuisine sénégalaise, un voyage gustatif entre tradition et modernité, où chaque plat raconte une histoire.
                                </p>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h3 className="font-bold text-orange-500 mb-2">Nos Spécialités</h3>
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
                        <h2 className="text-2xl font-semibold mb-4 text-orange-500">Notre Menu</h2>
                        <p>Contenu du menu à venir...</p>
                    </div>
                )}

                {activeSection === 'reservation' && (
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-orange-500">Réservation de Table</h2>
                        <p>Formulaire de réservation à venir...</p>
                    </div>
                )}
            </main>

            {/* Pied de page */}
            <footer className="bg-orange-500 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2024 La Dakaroise. Tous droits réservés.</p>
                </div>
            </footer>
        </div>

    );
};



const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profil');

  // Données fictives de l'utilisateur
  const userData = {
    nom: "Miessan Emmanuel",
    email: "miessanemmanuel@gmail.com",
    telephone: "+225 07 10 921 783",
    adresse: "123 Rue de Palmeraie",
    pointsFidelite: 250,
    historiqueCommandes: [
      { id: "CMD001", date: "2024-03-28", montant: 5000, statut: "Livré" },
      { id: "CMD002", date: "2024-03-15", montant: 20000, statut: "Livré" },
      { id: "CMD003", date: "2024-03-01", montant: 15000, statut: "Livré" }
    ],
    reservations: [
      { id: "RES001", date: "2024-04-15", heure: "19:30", personnes: 4, statut: "Confirmé" },
      { id: "RES002", date: "2024-03-20", heure: "12:30", personnes: 2, statut: "Terminé" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* En-tête du Dashboard */}
      <header className="bg-orange-500 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">La Dakaroise - Espace Client</h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              Points fidélité: <span className="font-bold">{userData.pointsFidelite}</span>
            </div>
            <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
              {userData.nom.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Menu latéral */}
          <aside className="md:w-64">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profil')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'profil' ? 'bg-red-100 text-orange-500' : 'hover:bg-gray-100'
                  }`}
                >
                  Mon Profil
                </button>
                <button
                  onClick={() => setActiveTab('commandes')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'commandes' ? 'bg-red-100 text-orange-500' : 'hover:bg-gray-100'
                  }`}
                >
                  Mes Commandes
                </button>
                <button
                  onClick={() => setActiveTab('reservations')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'reservations' ? 'bg-red-100 text-orange-500' : 'hover:bg-gray-100'
                  }`}
                >
                  Mes Réservations
                </button>
                <button
                  onClick={() => setActiveTab('fidelite')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'fidelite' ? 'bg-red-100 text-orange-500' : 'hover:bg-gray-100'
                  }`}
                >
                  Programme Fidélité
                </button>
              </nav>
            </div>
          </aside>

          {/* Contenu principal */}
          <div className="flex-1">
            {/* Profil */}
            {activeTab === 'profil' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Mon Profil</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                      <input
                        type="text"
                        value={userData.nom}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={userData.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                      <input
                        type="tel"
                        value={userData.telephone}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Adresse</label>
                      <input
                        type="text"
                        value={userData.adresse}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        disabled
                      />
                    </div>
                  </div>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Modifier mes informations
                  </button>
                </div>
              </div>
            )}

            {/* Commandes */}
            {activeTab === 'commandes' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Mes Commandes</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Numéro
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Montant
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {userData.historiqueCommandes.map((commande) => (
                        <tr key={commande.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{commande.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{commande.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{commande.montant} Fcfa</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {commande.statut}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Réservations */}
            {activeTab === 'reservations' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Mes Réservations</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Numéro
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Heure
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Personnes
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {userData.reservations.map((reservation) => (
                        <tr key={reservation.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{reservation.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{reservation.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{reservation.heure}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{reservation.personnes}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {reservation.statut}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
                  Nouvelle réservation
                </button>
              </div>
            )}

            {/* Programme Fidélité */}
            {activeTab === 'fidelite' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Programme Fidélité</h2>
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">Mes Points</h3>
                  <div className="text-3xl font-bold text-orange-500">{userData.pointsFidelite} points</div>
                  <p className="text-sm text-red-600 mt-2">
                    1€ dépensé = 1 point fidélité<br />
                    100 points = 10€ de réduction
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Avantages actuels</h3>
                    <ul className="text-sm space-y-2">
                      <li>✨ 10% de réduction sur votre prochaine commande</li>
                      <li>🎁 Un dessert offert le jour de votre anniversaire</li>
                      <li>🌟 Accès prioritaire aux événements spéciaux</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Prochains paliers</h3>
                    <ul className="text-sm space-y-2">
                      <li>🥉 500 points : -15% sur toutes vos commandes</li>
                      <li>🥈 1000 points : Une boisson offerte à chaque visite</li>
                      <li>🥇 2000 points : Statut VIP avec avantages exclusifs</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};



// Application principale
const RestaurantApp = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    return (
        <div>
            {currentPage === 'login' && <LoginPage />}
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'dashboard' && <UserDashboard />}

        </div>
    );
};

export default RestaurantApp;
