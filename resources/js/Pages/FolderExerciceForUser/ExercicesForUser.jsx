import Header from "@/Layouts/Header"
import { Head, router, usePage } from "@inertiajs/react"
import Footer from "../Footer"
import FlashMessage from "@/Components/FlashMessage"
import React, { useEffect, useState } from 'react';
import { Search, Filter, ChevronDown, Calendar, Clock, Users, Code, CheckCircle, StopCircle } from 'lucide-react';
import Modal from "@/Components/Modal";

const ExerciceListPage = () => {
    // Données d'exemple pour plusieurs exercices

    const { exercices, flash, auth } = usePage().props




    // État pour les filtres
    const [searchTerm, setSearchTerm] = useState('');
    const [filterState, setFilterState] = useState('Tous');
    const [filterTech, setFilterTech] = useState('Toutes');
    const [selectedExercice, setSelectedExercice] = useState(null);

    const handleReloadExercice = () => {
        const id = selectedExercice.id
        const reloadExercice = exercices.filter((exercice) => exercice.id === id)[0]
        setSelectedExercice(reloadExercice)
    }
    // Extraire toutes les technologies uniques pour le filtre
    const allTechnologies = ['Toutes', ...new Set(exercices?.flatMap(ex => ex.technologies))];
    const allStates = ['Tous', 'en cours', 'archivé', 'terminé'];

    // Filtrer les exercices selon les critères
    const filteredExercices = exercices.filter(exercice => {
        const matchesSearch = exercice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exercice.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesState = filterState === 'Tous' || exercice.etat === filterState;
        const matchesTech = filterTech === 'Toutes' || exercice.technos.includes(filterTech);

        return matchesSearch && matchesState && matchesTech;
    });

    // Composant pour afficher une carte d'exercice simplifiée
    const ExerciceCardCompact = ({ exercice }) => {
        console.log(auth.user.id)

        // Définition de la couleur et de l'icône selon l'état
        const getStatusColor = (status) => {
            switch (status) {
                case "terminé": return "bg-green-100 text-green-800";
                case "en cours": return "bg-blue-100 text-blue-800";
                case "archivé": return "bg-yellow-100 text-yellow-800";
                case "En retard": return "bg-red-100 text-red-800";
                default: return "bg-gray-100 text-gray-800";
            }
        };

        return (
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedExercice(exercice)}
            >
                <div className="relative">
                    <img
                        src={exercice.path_overview}
                        alt={exercice.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-3 right-3 ${getStatusColor(exercice.etat)} px-3 py-1 rounded-full text-xs font-medium`}>
                        {exercice.etat}
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{exercice.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exercice.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                            html
                        </span><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                            css
                        </span>
                        {/* {exercice.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                                {tech}
                            </span>
                        ))}
                        {exercice.technologies.length > 3 && (
                            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                                +{exercice.technologies.length - 3}
                            </span>
                        )} */}
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                            {exercice.users?.slice(0, 3).map((participant, index) => (
                                <div key={index} className="h-8 w-8 rounded-full bg-orange-300 flex items-center justify-center text-gray-700 font-semibold text-xs border-2 border-white">
                                    {participant.name.split(' ').map(name => name[0]).join('')}
                                </div>
                            ))}
                            {exercice.users.length > 3 && (
                                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-semibold text-xs border-2 border-white">
                                    +{exercice.users.length - 3}
                                </div>
                            )}
                        </div>
                        <div className="text-sm text-gray-500">
                            {new Date(exercice.deadline).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Composant pour afficher le détail d'un exercice


    return (
        <div className="bg-gray-50 min-h-screen pt-8">
            <FlashMessage />
            <div className="max-w-auto  px-5 lg:px-24  top-[20px] ">
                <button type="button" onClick={() => router.get(route('accueil'))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-8 h-8 rounded-full bg-black/40 hover:bg-gray-600 p-2 backdrop-blur-xl text-gray-100  border border-zinc-600 hover:border-none transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
            </div>
            <div className="container mx-auto px-4 mb-9">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Exercices</h1>
                <p className="text-gray-600 mb-8">Découvrez et participez aux exercices disponibles</p>

                {/* Filtres et recherche */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un exercice..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 "
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="relative">
                                <div className="flex items-center">
                                    <Filter className="text-gray-400 h-5 w-5 mr-2" />
                                    <select
                                        className="appearance-none text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        value={filterState}
                                        onChange={(e) => setFilterState(e.target.value)}
                                    >
                                        {allStates.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                                </div>
                            </div>

                            {/* <div className="relative">
                                <select
                                    className="appearance-none text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    value={filterTech}
                                    onChange={(e) => setFilterTech(e.target.value)}
                                >
                                    {allTechnologies.map(tech => (
                                        <option key={tech} value={tech}>{tech}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Grille d'exercices */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredExercices.length > 0 ? (
                        filteredExercices.map(exercice => (
                            <ExerciceCardCompact key={exercice.id} exercice={exercice} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 text-lg">Aucun exercice ne correspond à vos critères de recherche.</p>
                            <button
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
                                onClick={() => {
                                    setSearchTerm('');
                                    setFilterState('Tous');
                                    setFilterTech('Toutes');
                                }}
                            >
                                Réinitialiser les filtres
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de détail d'exercice */}
            {selectedExercice && (
                <ExerciceDetail
                    key={selectedExercice.users}
                    exerciceData={selectedExercice}
                    onClose={() => setSelectedExercice(null)}
                    reload={handleReloadExercice}
                />
            )}
            <Footer />
        </div>
    );
};

export default ExerciceListPage;

const ExerciceDetail = ({ exerciceData, onClose, reload }) => {
    const { auth } = usePage().props
    const [exercice, setExercice] = useState(exerciceData)
    const [showMessage, setShowMessage] = useState(false);
    const [selectedExercice, setSelectedExercice] = useState(null);

    const handleValidateDelete = (exercice) => {
        setSelectedExercice(exercice)
        setShowMessage(true)
    }

    const handleHideModalDelete = () => {
        setShowMessage(false)
        setSelectedExercice(null)
    }

    useEffect(() => {
        setExercice(exerciceData);
    }, [exerciceData]);
    // Formatage de la date limite
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    // Définition de la couleur et de l'icône selon l'état
    const getStatusStyles = (status) => {
        switch (status) {
            case "terminé":
                return { bgColor: "bg-green-100", textColor: "text-green-800", icon: <CheckCircle className="h-4 w-4 mr-1" /> };
            case "en cours":
                return { bgColor: "bg-blue-100", textColor: "text-blue-800", icon: <Clock className="h-4 w-4 mr-1" /> };
            case "À venir":
                return { bgColor: "bg-yellow-100", textColor: "text-yellow-800", icon: <Calendar className="h-4 w-4 mr-1" /> };
            case "En retard":
                return { bgColor: "bg-red-100", textColor: "text-red-800", icon: <Clock className="h-4 w-4 mr-1" /> };
            default:
                return { bgColor: "bg-gray-100", textColor: "text-gray-800", icon: <Clock className="h-4 w-4 mr-1" /> };
        }
    };

    const statusStyles = getStatusStyles(exercice.etat);
    const handleChangeStatutCoding = (exercice) => {
        router.put(route('exercices.changeStatutCoding', exercice.id))
        onClose()

    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full max-h-screen overflow-y-auto">
                <div className="bg-primary  text-white p-4 md:p-6 flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-bold">{exercice.title}</h2>
                    <div className={`${statusStyles.bgColor} ${statusStyles.textColor} px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                        {statusStyles.icon}
                        {exercice.etat}
                    </div>
                </div>

                <div className="md:flex">
                    {/* Image de l'exercice */}
                    <div className="md:w-1/3">
                        <img
                            src={exercice.path_overview}
                            alt="Illustration de l'exercice"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contenu principal */}
                    <div className="p-4 md:p-6 md:w-2/3">
                        {/* Énoncé de l'exercice */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Énoncé</h3>
                            <p className="text-gray-700">{exercice.description}</p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <Code className="h-5 w-5 text-green-600 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-800">Technologies</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    html
                                </span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    css
                                </span>
                                {/*  {exercice.technos.map((tech, index) => (
                                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))} */}
                            </div>
                        </div>

                        {/* Deadline */}
                        <div className="mb-6 flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                                <Calendar className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">Date limite</h3>
                                <p className="text-gray-700 flex items-center">
                                    <Clock className="h-4 w-4 text-green-600 mr-1" />
                                    {formatDate(exercice.deadline)}
                                </p>
                            </div>
                        </div>

                        {/* Liste des participants */}
                        <div>
                            <div className="flex items-center mb-2">
                                <Users className="h-5 w-5 text-green-600 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-800">Participants</h3>
                            </div>
                            <ul className="bg-green-50 rounded-lg p-3">
                                {exercice.users.map((participant, index) => (
                                    <li key={index} className="mb-2 last:mb-0 flex items-center justify-between">
                                        <div className="flex items-center " >
                                            <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center mr-3 text-green-800 font-semibold">
                                                {participant.name.split(' ').map(name => name[0]).join('')}
                                            </div>

                                            <span className="text-gray-700">{participant.name}</span>
                                        </div>
                                        <div className="space-x-4">
                                            {auth.user.id === participant.id ? (
                                                <>
                                                    {participant.pivot.statut == "en cours" && (<button className="bg-primary hover:bg-green-800 rounded-lg p-1 text" onClick={() => handleValidateDelete(exercice)}>J'ai terminé</button>)}
                                                    <span className={"px-2 rounded font-bold " + getStatusStyles(participant.pivot.statut).textColor + " " + getStatusStyles(participant.pivot.statut).bgColor}>{participant.pivot.statut == "en cours" ? ('je suis train de coder...') : 'Vous avez terminé cet exercice'}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className={"px-2 rounded " + getStatusStyles(participant.pivot.statut).textColor + " " + getStatusStyles(participant.pivot.statut).bgColor}>{participant.pivot.statut == "en cours" ? ('est en train de coder...') : 'a fini de coder'}</span>
                                                </>

                                            )

                                            }

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pied de carte avec boutons d'action */}
                <div className="bg-gray-50 p-4 flex flex-wrap gap-2 border-t">


                    {
                        exercice.etat !== "terminé" ? (
                            exercice.users.filter((user) => user.id === auth.user.id).length != 0 ? (
                                <button className="bg-red-600 hover:bg-red-500 text-white transition px-8 py-2 rounded-lg text-gray-800 flex items-center gap-x-1" onClick={() => {
                                    router.post(route('exercices.quitterExercice', exercice.id), {}, {
                                        preserveScroll: true,
                                        onSuccess: () => {
                                            onClose()
                                        },

                                    })

                                }}>Arrêter de participer
                                    <StopCircle />
                                </button>

                            ) : (
                                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0" onClick={() => {
                                    router.post(route('exercices.inscription', exercice.id), {},
                                        {
                                            preserveScroll: true,
                                            onSuccess: () => {
                                                onClose()
                                            }
                                        })
                                }}>
                                    Participer
                                </button>
                            )) : (
                            <>
                                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0" disabled>
                                    Cet exercice est fermé
                                </button>
                            </>
                        )
                    }

                    <a href="https://wa.me/message/R4UBDIHWEVPZI1" target="_blank" className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0">
                        Poser une question
                    </a>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0 ml-auto"
                    >
                        Fermer
                    </button>
                </div>

            </div>
            {showMessage && selectedExercice && <Modal show={showMessage} onClose={handleHideModalDelete} closeable={true} maxWidth='lg'>
                <div className='px-6 py-4'>
                    <h2 className='font-bold text-2xl text-center'> Terminer L'exercice {selectedExercice.title} ?</h2>
                </div>
                <div className='px-6 py-4'>

                    <div className='flex items-center justify-around gap-2'>
                        <button onClick={() => handleChangeStatutCoding(selectedExercice)} className='w-full bg-primary hover:bg-green-700 rounded bold py-2 px-3' > Oui j'ai fini</button>
                        <button className='bg-gray-500 rounded bold py-2 px-3 w-full' onClick={() => handleHideModalDelete()}> Annuler</button>
                    </div>
                </div>

            </Modal>}
        </div>
    );
};

