

import { Calendar, Clock, Tag, CheckCircle, X, Upload, ArrowRight, Delete, Edit, User2 } from 'lucide-react';
import HeaderAdmin from './HeaderAdmin';
import React, { useState, useMemo } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import Modal from '@/Components/Modal';



const FormationAdmin = ({ }) => {
    const { formations } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFormation, setSelectedFormation] = useState(null);

    const [displayModalValidateDelete, setDisplayModalValidateDelete] = useState(false);

    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageSuccessContent, setMessageSuccessContent] = useState('');


    console.log(formations);

    // Filter formations based on search term
    const filteredFormations = useMemo(() => {
        return formations.filter(formation =>
            formation.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            formation.categorie_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [formations, searchTerm]);

    const showMessageSucces = (message) => {
        setMessageSuccess(true)
        setMessageSuccessContent(message)
        setTimeout(() => {
            setMessageSuccess(false
            )
        }, 3000);

    }
    // delete
    const handleDeleteFormation = (id) => {

        router.post(route('admin.formation.delete'), { id: id },
            {
                onSuccess: () => {
                    hideModalDeleteFormation();
                    showMessageSucces('La formation a été supprimé avec succès')
                    console.log('Champion c\'est zo hein')
                },
                onError: (errors) => {
                    console.log('Champion y\'a une petite erreur hein:', errors)

                }

            }
        )
        setSelectedFormation(null)


    }
    //valider la suppression
    const showModalValidate = (formation = null) => {
        setSelectedFormation(formation);
        setDisplayModalValidateDelete(true)
    }
    const hideModalDeleteFormation = () => {
        setDisplayModalValidateDelete(false);
    }
    // edit
    const getEditPage = (id) => {
        router.get(route('admin.formation.update.show'), { id: id })
    }

    return (
        <>

            <HeaderAdmin>

                <div className="min-h-screen text-white p-8">
                    <div className={'absolute text-white top-0 right-[50%] translate-x-[50%] -translate-y-1 z-50  bg-primary p-3 px-[4em] rounded font-bold ' + (messageSuccess ? 'block' : 'hidden')} >
                        {messageSuccessContent}
                    </div>
                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-3xl font-bold "> Formations</h1>
                        <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">

                            <Link href={route('admin.addformation.show')} className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 ">
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Ajouter une formation<span aria-hidden="true">&rarr;</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-secondary ring-1 ring-zinc-600 text-white p-6">
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Rechercher une formation..."
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <table className="w-full border-collapse table-fixed	">
                            <thead>
                                <tr className="bg-black/40 ">
                                    <th className="px-4 py-2 text-left">Nom</th>
                                    <th className="px-4 py-2 text-left">Catégorie</th>
                                    <th className="px-4 py-2 text-left">Date de Début</th>
                                    <th className="px-4 py-2 text-left">Durée</th>
                                    <th className="px-4 py-2 text-left">Inscription Ouverte</th>
                                    <th className="px-4 py-2 text-left">Nombre de Places</th>
                                    <th className="px-4 py-2 text-left">Gratuit</th>
                                    <th className="px-4 py-2 text-left">Tarif</th>
                                    <th className="px-4 py-2 text-left">Nb_Inscrits</th>

                                    <th className='w-[7em] '></th>

                                </tr>
                            </thead>
                            <tbody>
                                {filteredFormations.map(formation => (
                                    <tr key={formation.id} className="border-b border-zinc-700 hover:bg-black/30 whitespace-nowrap">
                                        <td className="px-4 py-2 truncate">{formation.nom}</td>
                                        <td className="px-4 py-2 truncate">{formation.categorie_name} </td>
                                        <td className="px-4 py-2 inline-flex items-center truncate">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {formation.date_debut}
                                        </td>
                                        <td className="px-4 py-2  truncate">
                                            <div className='inline-flex items-center '>
                                                <Clock className="w-4 h-4 mr-2" />
                                                {formation.duree_valeur}
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <div className='inline-flex items-center truncate'>

                                                <CheckCircle className={`w-5 h-5 mr-2 ${formation.inscription_ouverte ? 'text-green-500' : 'text-gray-400'}`} />
                                                {formation.inscription_ouverte ? 'Oui' : 'Non'}
                                            </div>

                                        </td>
                                        <td className="px-4 py-2">{formation.nombre_de_place}</td>
                                        <td className="px-4 py-2">
                                            <div className='inline-flex items-center'>

                                                <CheckCircle className={`w-5 h-5 mr-2 ${formation.gratuit ? 'text-green-500' : 'text-gray-400'}`} />
                                                {formation.gratuit ? 'Oui' : 'Non'}
                                            </div>

                                        </td>
                                        <td className="px-4 py-2">{formation.gratuit ? 'Gratuit' : `${formation.tarif} Fcfa`}</td>
                                        <td className="px-4 py-2">
                                            <Link href={route('admin.formation.userInscrits', formation.slug)} className='text-green-400 transition hover:text-primary'>
                                                <User2 className='size-4' /> {formation.userInscrits}
                                            </Link>

                                        </td>
                                        <td className='px-4 py-2 '>
                                            <div className='inline-flex items-center gap-x-3'>
                                                <button onClick={() => getEditPage(formation.id)} className="inline-block text-whitepattern px-3 py-1 rounded bg-blue-500 hover:bg-blue-700 font-bold relative z-10">
                                                    <Edit className='size-4' /> </button>
                                                <button onClick={() => showModalValidate(formation)} className="inline-block text-whitepattern px-3 py-1 rounded bg-red-500 hover:bg-red-700 font-bold relative z-10">
                                                    <Delete className='size-4' /> </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {displayModalValidateDelete && selectedFormation && <Modal show={displayModalValidateDelete} onClose={hideModalDeleteFormation} closeable={true} maxWidth='lg'>
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-2xl text-center'> Supprimer la Formation {selectedFormation.nom} ??</h2>
                    </div>
                    <div className='px-6 py-4'>

                        <div className='flex items-center justify-around'>
                            <button onClick={() => handleDeleteFormation(selectedFormation.id)} className='bg-red-500 rounded bold py-2 px-3' > Supprimer La Formation</button>
                            <button className='bg-primary rounded bold py-2 px-3' onClick={hideModalDeleteFormation}> Annuler</button>
                        </div>
                    </div>

                </Modal>}
            </HeaderAdmin>
        </>
    );
};

export default FormationAdmin;
