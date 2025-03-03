

import { Calendar, Clock, Tag, CheckCircle, X, Upload, ArrowRight, User, Database, Delete, Edit } from 'lucide-react';
import HeaderAdmin from './HeaderAdmin';
import React, { useState, useMemo } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import Modal from '@/Components/Modal';


const CategorieAdmin = () => {
    const { categories } = usePage().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [displayModalCreateCategory, setDisplayModalCreateCategory] = useState(false)
    const [slugCategory, setSlugCartegory] = useState('');
    const [nomCategory, setNomCartegory] = useState('');
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageSuccessContent, setMessageSuccessContent] = useState('');

    const [displayModalValidateDelete, setDisplayModalValidateDelete] = useState(false);
    const [displayModalEditCategory, setDisplayModalEditCategory] = useState(false);


    const [selectedCategorie, setSelectedCategorie] = useState(null);

    /* console.log(categories); */



    // Filter categories based on search term
    const filteredCategories = useMemo(() => {
        return categories.filter(categorie =>
            categorie.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [categories, searchTerm]);

    /* afficher la boite contextuelle de la creation de la categorie */
    const showModalCreateCategory = () => {
        setDisplayModalCreateCategory(true);
    }
    const hideModalCreateCategory = () => {
        setDisplayModalCreateCategory(false);
    }


    const handleCreateCategory = () => {
        // create a new category
        router.post(route('admin.categorie.create'), {
            nom: nomCategory,
            slug: slugCategory
        },
            {
                onSuccess: () => {
                    hideModalCreateCategory();
                    showMessageSucces('La catégorie a été créée avec succès');
                },
                onError: (errors) => {
                    console.log('Champion y\'a une petite erreur hein:', errors)
                }

            })
    }
    const showMessageSucces = (message) => {
        setMessageSuccess(true)
        setMessageSuccessContent(message)
        setTimeout(() => {
            setMessageSuccess(false
            )
        }, 3000);

    }
    //delete
    const handleDeleteCategory = (id) => {

        router.post(route('admin.categorie.delete'), { id: id },
            {
                onSuccess: () => {
                    hideModalDeleteCategory();
                    showMessageSucces('La catégorie a été supprimé avec succès')
                    console.log('Champion c\'est zo hein')
                },
                onError: (errors) => {
                    console.log('Champion y\'a une petite erreur hein:', errors)

                }

            }
        )
        setSelectedCategorie(null)


    }
    const hideModalDeleteCategory = () => {
        setDisplayModalValidateDelete(false);
    }
    //valider la suppression
    const showModalValidate = (categorie = null) => {
        setSelectedCategorie(categorie);
        setDisplayModalValidateDelete(true)

    }

    // Edit

    const showModalEditCategory = (categorie) => {
        setDisplayModalEditCategory(true);
        setSelectedCategorie(categorie);

    }
    const hideModalEditCategory = () => {
        setDisplayModalEditCategory(false);
        setSelectedCategorie(null);

    }

    const handleEditCategory = () => {
        // create a new category
        router.post(route('admin.categorie.update'), {
            id: selectedCategorie.id,
            nom: nomCategory,
            slug: slugCategory
        },
            {
                onSuccess: () => {
                    hideModalEditCategory();
                    showMessageSucces('La catégorie a été edité avec succès');
                },
                onError: (errors) => {
                    console.log('Champion y\'a une petite erreur hein:', errors)
                }

            })


    }


    return (
        <>

            <HeaderAdmin>


                <div className="min-h-screen text-white p-8 relative">
                    <div className={'absolute text-white top-0 right-[50%] translate-x-[50%] -translate-y-1 z-50  bg-primary p-3 px-[4em] rounded font-bold ' + (messageSuccess ? 'block' : 'hidden')} >

                        {messageSuccessContent}
                    </div>
                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-3xl font-bold "> Categories</h1>
                        <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">

                            <button onClick={showModalCreateCategory} className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 ">
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Ajouter une Categorie<span aria-hidden="true">&rarr;</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-secondary ring-1 ring-zinc-600 text-white p-6">
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Rechercher une categorie..."
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <table className="w-full border-collapse table-fixed	">
                            <thead>
                                <tr className="bg-black/40 ">
                                    <th className="px-4 py-2 text-left">Nom</th>
                                    <th className="px-4 py-2 text-left">Slug</th>
                                    <th className="px-4 py-2 text-left">Nombre de Formation</th>
                                    <th className='w-[7em] '></th>


                                </tr>
                            </thead>
                            <tbody>
                                {filteredCategories.map(categorie => (
                                    <tr key={categorie.id} className="border-b border-zinc-700 hover:bg-black/30 whitespace-nowrap">
                                        <td className="px-4 py-2 truncate">{categorie.nom}</td>
                                        <td className="px-4 py-2 truncate">{categorie.slug} </td>
                                        <td className="px-4 py-2  truncate">
                                            <div className='inline-flex items-center '>
                                                <Database className="w-4 h-4 mr-2" />
                                                {categorie.formations.length}
                                            </div>
                                        </td>

                                        <td className='px-4 py-2 '>
                                            <div className='inline-flex items-center gap-x-3'>
                                                <button onClick={() => showModalEditCategory(categorie)} className="inline-block text-whitepattern px-3 py-1 rounded bg-blue-500 hover:bg-blue-700 font-bold relative z-10">
                                                    <Edit className='size-4' /> </button>
                                                <button onClick={() => showModalValidate(categorie)} className="inline-block text-whitepattern px-3 py-1 rounded bg-red-500 hover:bg-red-700 font-bold relative z-10">
                                                    <Delete className='size-4' /> </button>
                                            </div>

                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ========================Modal======================= */}



                {/* delete */}
                {displayModalValidateDelete && selectedCategorie && <Modal show={displayModalValidateDelete} onClose={hideModalDeleteCategory} closeable={true} maxWidth='lg'>
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-2xl text-center'> Supprimer la categorie {selectedCategorie.nom} ??</h2>
                    </div>
                    <div className='px-6 py-4'>

                        <div className='flex items-center justify-around'>
                            <button onClick={() => handleDeleteCategory(selectedCategorie.id)} className='bg-red-500 rounded bold py-2 px-3' > Supprimer La Catégorie</button>
                            <button className='bg-primary rounded bold py-2 px-3' onClick={hideModalDeleteCategory}> Annuler</button>
                        </div>
                    </div>

                </Modal>}
                {/* creer new category */}
                {displayModalCreateCategory && <Modal show={displayModalCreateCategory} onClose={hideModalCreateCategory} closeable={true} maxWidth='lg'>
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-2xl'> Création de la categorie</h2>
                    </div>
                    <div className='px-6 py-4'>
                        <div className='mb-5'>
                            <label className='mb-3 block font-bold'>Nom de la catégorie</label>
                            <input type="text" className='block w-full bg-black/40 mx-auto border border-gray-400 rounded
                        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' onChange={(e) => { setNomCartegory(e.target.value) }} />
                        </div>
                        <div className='mb-5'>
                            <label className='mb-3 block font-bold '>Slug de la catégorie</label>
                            <input type="text" className='block w-full bg-black/40 mx-auto border border-gray-400 rounded
                        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' onChange={(e) => { setSlugCartegory(e.target.value) }} />
                        </div>
                        <div className='flex items-center justify-start'>
                            <button className='bg-primary rounded bold px-4 py-3' onClick={handleCreateCategory}> Créer La Catégorie</button>
                        </div>
                    </div>
                </Modal>}

                {/* Edit  */}

                {displayModalEditCategory && <Modal show={displayModalEditCategory} onClose={() => setDisplayModalEditCategory(false)} closeable={true} maxWidth='lg'>
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-2xl'> Editer la categorie {selectedCategorie.nom} </h2>
                    </div>
                    <div className='px-6 py-4'>
                        <div className='mb-5'>
                            <label className='mb-3 block font-bold'>Nom de la catégorie</label>
                            <input type="text" className='block w-full bg-black/40 mx-auto border border-gray-400 rounded
                        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' defaultValue={selectedCategorie.nom} onChange={(e) => { setNomCartegory(e.target.value) }} />
                        </div>
                        <div className='mb-5'>
                            <label className='mb-3 block font-bold '>Slug de la catégorie</label>
                            <input type="text" className='block w-full bg-black/40 mx-auto border border-gray-400 rounded
                        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' defaultValue={selectedCategorie.slug} onChange={(e) => { setSlugCartegory(e.target.value) }} />
                        </div>
                        <div className='flex items-center justify-start'>
                            <button className='bg-primary rounded bold px-4 py-3' onClick={handleEditCategory}> Éditer La Catégorie</button>
                        </div>
                    </div>
                </Modal>}
            </HeaderAdmin>
        </>
    );
};

export default CategorieAdmin;
