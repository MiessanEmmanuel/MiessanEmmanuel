import { Head, router, usePage } from '@inertiajs/react';
import React from 'react';
import Footer from '../Footer';
import Header from '@/Layouts/Header';
import FlashMessage from '@/Components/FlashMessage';
import { Calendar, Clock, Code, StopCircle, StopCircleIcon, Users } from 'lucide-react';


const SingleForUser = () => {
    const { exercice, listInscritsAExercice, listExercicesInscrit } = usePage().props

    /* const exercice = {
        title: "Course à pied - 5km",
        description: "Rejoignez-nous pour une course à pied de 5km dans le parc. Tous les niveaux sont les bienvenus !",
        imageUrl: "/api/placeholder/800/400",
        participants: [
            { id: 1, name: "Marie L.", avatar: "/api/placeholder/40/40" },
            { id: 2, name: "Thomas R.", avatar: "/api/placeholder/40/40" },
            { id: 3, name: "Sophie M.", avatar: "/api/placeholder/40/40" },
        ]
    }; */

    const truncate = (str, limitChar = 100) => {
        let newStr = str

        if (str.length >= limitChar) {
            const strArray = newStr.split('').slice(0, limitChar)
            strArray.push('...')
            newStr = strArray.join('')
        }
        return newStr
    }

    const handleParticipate = () => {
        router.post(route('exercices.inscription', exercice.id), {},
            {
                preserveScroll: true
            })
    }
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    const getStatusStyles = (status) => {
        switch (status) {
            case "terminé":
                return { bgColor: "bg-red-100", textColor: "text-red-800", icon: <CheckCircle className="h-4 w-4 mr-1" /> };
            case "en cours":
                return { bgColor: "bg-blue-100", textColor: "text-blue-800", icon: <Clock className="h-4 w-4 mr-1" /> };
            case "archivé":
                return { bgColor: "bg-yellow-100", textColor: "text-yellow-800", icon: <Calendar className="h-4 w-4 mr-1" /> };
            default:
                return { bgColor: "bg-gray-100", textColor: "text-gray-800", icon: <Clock className="h-4 w-4 mr-1" /> };
        }
    };

    const statusStyles = getStatusStyles(exercice.etat);

    return (
        <>
            <Head title={exercice.title} />
            <Header />
            <FlashMessage />
            <div className="linear-gradient p-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6"> Exercice #{exercice.id}</h1>
                    <p className="text-xl mb-8">{truncate(exercice.description, 100)}</p>
                </div>
            </div>
            <div className=" md:max-w-5xl max-w-4xl mx-auto p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                    {/* En-tête avec titre */}
                    <div className="bg-primary text-white p-4 md:p-6 flex justify-between">
                        <h2 className="text-xl md:text-2xl font-bold">{exercice.title}</h2>
                        <div className={`${statusStyles.bgColor} ${statusStyles.textColor} px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                            {statusStyles.icon}
                            {exercice.etat}
                        </div>
                    </div>

                    <div className="">
                        {/* Image de l'exercice */}
                        <div className="">
                            <img
                                src={exercice.path_overview}
                                alt="Illustration de l'exercice"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Contenu principal */}
                        <div className="p-4 md:p-6 ">
                            {/* Énoncé de l'exercice */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Énoncé</h3>
                                <p className="text-gray-700">{exercice.description}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <Code className="h-5 w-5 text-green-600 mr-2" />
                                    <h3 className="text-lg font-semibold text-gray-800">Technologies</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {/*  {exercice.technologies.map((tech, index) => (
                                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))} */}
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Html
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Css
                                    </span>
                                </div>
                            </div>

                            {/* Deadline */}
                            <div className="mb-6 flex items-center">
                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                    <Calendar className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">Date limite</h3>
                                    <p className="text-gray-700 flex items-center">
                                        <Clock className="h-4 w-4 text-primary mr-1" />
                                        {formatDate(exercice.deadline)}
                                    </p>
                                </div>
                            </div>

                            {/* Liste des participants */}
                            <div>
                                <div className="flex items-center mb-2">
                                    <Users className="h-5 w-5 text-primary mr-2" />
                                    <h3 className="text-lg font-semibold text-gray-800">Participants({listInscritsAExercice.length})</h3>
                                </div>
                                <ul className="bg-green-50 rounded-lg p-3">
                                    {listInscritsAExercice.map((participant, index) => (
                                        <li key={index} className="mb-2 last:mb-0 flex items-center">
                                            <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center mr-3 text-green-800 font-semibold">
                                                {participant.name.split(' ').map(name => name[0]).join('')}
                                            </div>
                                            <span className="text-gray-700">{participant.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pied de carte avec boutons d'action */}
                    <div className="bg-gray-50 p-4 flex flex-wrap gap-2 border-t">
                        {
                            listExercicesInscrit.includes(exercice.id) ? (
                                <button className="bg-red-600 hover:bg-red-500 text-white transition px-8 py-2 rounded-lg text-gray-800 flex items-center gap-x-1" onClick={() => {
                                    router.post(route('exercices.quitterExercice', exercice.id), {}, {
                                        preserveScroll: true

                                    })


                                }}>Arrêter de participer
                                    <StopCircle />
                                </button>

                            ) : (
                                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0" onClick={handleParticipate}>
                                    Participer
                                </button>

                            )
                        }

                        <a href="#" className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0">
                            Poser une question
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export {SingleForUser};


const ExerciceDetail = ({ exercice, onClose }) => {
    // Formatage de la date limite
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    // Définition de la couleur et de l'icône selon l'état
    const getStatusStyles = (status) => {
        switch (status) {
            case "Terminé":
                return { bgColor: "bg-green-100", textColor: "text-green-800", icon: <CheckCircle className="h-4 w-4 mr-1" /> };
            case "En cours":
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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full max-h-screen overflow-y-auto">
                <div className="bg-green-600 text-white p-4 md:p-6 flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-bold">{exercice.titre}</h2>
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
                            <p className="text-gray-700">{exercice.enonce}</p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <Code className="h-5 w-5 text-green-600 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-800">Technologies</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {exercice.technologies.map((tech, index) => (
                                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
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
                                {exercice.participants.map((participant, index) => (
                                    <li key={index} className="mb-2 last:mb-0 flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center mr-3 text-green-800 font-semibold">
                                            {participant.split(' ').map(name => name[0]).join('')}
                                        </div>
                                        <span className="text-gray-700">{participant}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pied de carte avec boutons d'action */}
                <div className="bg-gray-50 p-4 flex flex-wrap gap-2 border-t">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0">
                        Soumettre
                    </button>
                    <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0">
                        Poser une question
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors duration-200 flex-grow md:flex-grow-0 ml-auto"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExerciceDetail
