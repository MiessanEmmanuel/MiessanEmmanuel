

import { Calendar, Clock, Tag, CheckCircle, X, Upload, ArrowRight, Delete, Edit, User2 } from 'lucide-react';
import HeaderAdmin from './HeaderAdmin';
import React, { useState, useMemo } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import SuccessMessage from '../ComponentPage/SuccessMessage';


const ShowUserInscrit = () => {
    const { formation, usersInscrits, flash } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    console.log(usersInscrits);
    const [selectedUser, setSelectedUser] = useState(null);
    const [displayModalValidateDelete, setDisplayModalValidateDelete] = useState(false);

    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageSuccessContent, setMessageSuccessContent] = useState('');

    const filteredUsersInscrits = useMemo(() => {
        return usersInscrits.data.filter(userInscrit =>
            userInscrit.nom.toLowerCase().includes(searchTerm.toLowerCase())

        );
    }, [usersInscrits, searchTerm]);

    const showMessageSucces = (message) => {
        setMessageSuccess(true)
        setMessageSuccessContent(message)
        setTimeout(() => {
            setMessageSuccess(false
            )
        }, 3000);

    }

    const showModalValidate = (user = null) => {
        setSelectedUser(user);
        setDisplayModalValidateDelete(true)
    }
    const hideModalDeleteUser = () => {
        setDisplayModalValidateDelete(false);
    }

    //delete
    const handleDeleteUser = (id) => {

        router.post(route('admin.formation.userInscrits.delete'), { id: id, formation_id: formation.id },
            {
                onSuccess: () => {
                    hideModalDeleteUser();
                    showMessageSucces('L\'utilisateur a été supprimé avec succès')
                    console.log('Champion c\'est zo hein')
                },
                onError: (errors) => {
                    console.log('Champion y\'a une petite erreur hein:', errors)

                }

            }
        )
        setSelectedUser(null)


    }

    //paginate
    const paginatedUsers = usersInscrits.data || [];
    const paginationLinks = usersInscrits.links || [];

    return (
        <>

            <HeaderAdmin>

                <div className="min-h-screen text-white p-8">
                    {messageSuccess && <SuccessMessage>
                        {messageSuccessContent}
                    </SuccessMessage>}
                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-xl md:text-3xl font-bold "> Liste des Inscrits à {formation.nom}</h1>
                            <div className="flex justify-end">
                                <a
                                    href={route('admin.formation.exportCsv', { formation_id: formation.id })}
                                    className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
                                >
                                    Télécharger CSV
                                </a>
                            </div>
                        {/*  <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">

                            <Link href={route('admin.addformation.show')} className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 ">
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Ajouter une per<span aria-hidden="true">&rarr;</span>
                                </span>
                            </Link>
                        </div>*/}
                    </div>

                    <div className="bg-secondary ring-1 ring-zinc-600 text-white p-6">
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Rechercher un utilisateur..."
                                className="bg-black/40 rounded-lg px-4 py-2 w-full text-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <table className="w-full border-collapse table-fixed text-sm	">
                            <thead>
                                <tr className="bg-black/40 ">
                                    <th className="px-4 py-2 text-left">Nom</th>
                                    <th className="px-4 py-2 text-left">Prénom</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Téléphone</th>
                                    <th className="px-4 py-2 text-left">Date d'inscription</th>

                                    <th className='w-50 md:w-[7em] '></th>

                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsersInscrits.map(userInscrit => (
                                    <tr key={formation.id} className="border-b border-zinc-700 hover:bg-black/30 whitespace-nowrap">
                                        <td className="px-4 py-2 truncate">{userInscrit.nom}</td>
                                        <td className="px-4 py-2 truncate">{userInscrit.prenom} </td>
                                        <td className="px-4 py-2 truncate">{userInscrit.email} </td>
                                        <td className="px-4 py-2 truncate">{userInscrit.telephone} </td>
                                        <td className="px-4 py-2 truncate">{userInscrit.created_at} </td>





                                        <td className='px-4 py-2 '>
                                            <div className='inline-flex items-center gap-x-3'>
                                                {/*  <button onClick={() => getEditPage(userInscrit.id)} className="inline-block text-whitepattern px-3 py-1 rounded bg-blue-500 hover:bg-blue-700 font-bold relative z-10">
                                                    <Edit className='size-4' /> </button>
                                                */}
                                                <button onClick={() => showModalValidate(userInscrit)} className="inline-block text-whitepattern px-3 py-1 rounded bg-red-500 hover:bg-red-700 font-bold relative z-10">
                                                    <Delete className='size-4' /> </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Pagination Controls */}
                        <div className="mt-4 flex justify-center space-x-2">
                            {paginationLinks.map(link => (
                                <button
                                    key={link.label}
                                    disabled={!link.url}
                                    onClick={() => link.url && router.get(link.url)}
                                    className={`px-4 py-2 rounded ${link.active ? 'bg-primary' : 'bg-secondary'}`}
                                >
                                    {link.label.replace('&raquo;', '›').replace('&laquo;', '‹')} {/* Remplacer les entités HTML */}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {displayModalValidateDelete && selectedUser && <Modal show={displayModalValidateDelete} onClose={hideModalDeleteUser} closeable={true} maxWidth='lg'>
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-2xl text-center'> Supprimer l'utilisateur {selectedUser.nom} ??</h2>
                    </div>
                    <div className='px-6 py-4'>

                        <div className='flex items-center justify-around'>
                            <button onClick={() => handleDeleteUser(selectedUser.id)} className='bg-red-500 rounded bold py-2 px-3' > Supprimer La Formation</button>
                            <button className='bg-primary rounded bold py-2 px-3' onClick={hideModalDeleteUser}> Annuler</button>
                        </div>
                    </div>

                </Modal>}
            </HeaderAdmin>
        </>
    );
}
export default ShowUserInscrit;
