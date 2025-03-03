import Modal from '@/Components/Modal';
import { Head, router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

import SuccessMessage from './ComponentPage/SuccessMessage';
import axios from 'axios';

const SingleFormationPage = () => {
    const { formation } = usePage().props
    const { flash } = usePage().props;

    const [showModalEnregistrer, setShowModalEnregistrer] = useState(false);
    //chargement
    const [chargementForm, setChargementForm] = useState(false);



    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageSuccessContent, setMessageSuccessContent] = useState('');

    const hideModalEnregistrerUser = () => {
        setShowModalEnregistrer(false);
    }

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        indicatif: '+225',
        formation_id: formation.id,

    });
    const showMessageSucces = () => {
        setMessageSuccess(true)
        /* setMessageSuccessContent(flash.success) */
        setTimeout(() => {
            setMessageSuccess(false
            )
        }, 4000);
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const paymentData = {
        totalPrice: formation.tarif,
        article: [
            {
                formation: formation.tarif,

            },
        ],
        personal_Info: [
            {
                userEmail: formData.email,
                formationId: formation.id,
            },
        ],
        numeroSend: formData.telephone,
        nomclient: formData.nom,
        return_url: "https://miessanemmanuel.com/formation-thankyouMoneyFusion"
    };

    const handleSubmitGratuit = (e) => {
        e.preventDefault();
        setChargementForm(true);
        // Enregistrer les infos personnelles de l'utilisateur d'abord avant de passer au paiement
        router.post(route('formation.inscription'), formData,
            {
                onSuccess: () => {
                    setShowModalEnregistrer(false);
                    showMessageSucces();
                    setChargementForm(false);

                },
                onError: (errors) => {
                    console.log(errors);
                    setChargementForm(false);
                },

            })



    };
    const handleSubmitPayant = async (e) => {
        e.preventDefault();
        setChargementForm(true);

        try {
            // Envoyer les données de paiement à l'API externe
            const response = await axios.post(
                'https://www.pay.moneyfusion.net/Miessan_emmanuel/fb7b5bcbacf12165/pay/',
                paymentData
            );

            // Mettre à jour le formData avec le token reçu
            const updatedFormData = { ...formData, token: response.data.token };
            setFormData(updatedFormData);



            router.post(route('formation.paiement'), updatedFormData, {
                onSuccess: () => {
                    setShowModalEnregistrer(false);
                    showMessageSucces();
                    setChargementForm(false);
                },
                onError: (errors) => {
                    console.error(errors);
                    setChargementForm(false);
                },
            });

            // Rediriger l'utilisateur vers l'URL de paiement
            window.location.href = response.data.url;
        } catch (error) {
            console.error('Erreur lors de la soumission :', error);
            setChargementForm(false);
            // Ajoutez une notification pour informer l'utilisateur
            alert('Une erreur est survenue, veuillez réessayer.');
        }
    };








    return (
        <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >
            <Head title={formation.nom} />

            <div className=" mx-auto  ">

                {messageSuccess && <SuccessMessage >
                    {flash.success}
                    {flash.error}
                </SuccessMessage>}
                {showModalEnregistrer && <Modal show={showModalEnregistrer} onClose={hideModalEnregistrerUser} closeable={true} >

                    <div className=" mx-auto  rounded-lg  p-8">
                        <h2 className="text-2xl font-bold mb-6">Inscription</h2>
                        <form onSubmit={formation.gratuit ? handleSubmitGratuit : handleSubmitPayant}>
                            <div className="mb-4">
                                <label htmlFor="nom" className="block font-medium mb-2">Nom:</label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    className="border rounded-lg py-2 px-3 w-full text-secondary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="prenom" className="block font-medium mb-2">Prénom:</label>
                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleInputChange}
                                    className="border rounded-lg py-2 px-3 w-full text-secondary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-medium mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border rounded-lg py-2 px-3 w-full text-secondary"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex">
                                <div className="mr-2">
                                    <label htmlFor="indicatif" className="block font-medium mb-2">Indicatif:</label>
                                    <select
                                        id="indicatif"
                                        name="indicatif"
                                        value={formData.indicatif}
                                        onChange={handleInputChange}
                                        className="border rounded-lg py-2 px-3 w-full text-secondary"
                                    >
                                        <option value="+225">+225</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                        <option value="+49">+49</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="telephone" className="block font-medium mb-2">Téléphone:</label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleInputChange}
                                        className="border rounded-lg py-2 px-3 w-full text-secondary"
                                        required
                                    />
                                </div>
                            </div>
                            {/* condition d'utilisation */}
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="conditions"
                                    name="conditions"
                                    required
                                    value={true}
                                    className="mr-2"
                                />
                                <label className="block font-medium ">J'ai lu et j'accepte
                                    <a
                                        href={route('termsofuse')} target='_blank'
                                        className="text-primary hover:text-green-800 ml-[5px]"
                                    >
                                        les conditions d'utilisation
                                    </a>
                                </label>

                            </div>

                            <button
                                type="submit"
                                disabled={chargementForm ? true : false}
                                className="  bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded w-full"
                            >

                                {chargementForm ? (
                                    <div className='flex items-center justify-center'>
                                        <svg
                                            className="w-6 h-6 mr-2 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg> En cours...
                                    </div>
                                ) : (formation.gratuit ? 'Valider Mes Informations' : 'Procéder au paiement')}

                            </button>
                        </form>
                    </div>
                </Modal>}
                <div className="max-w-auto  px-5 lg:px-24 absolute top-[20px] z-10  ">
                    <button type="button" onClick={() => window.history.back()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            className="w-8 h-8 rounded-full bg-black/40 hover:bg-gray-600 p-2 backdrop-blur-xl text-gray-100  border border-zinc-600 hover:border-none transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                </div>
                <div className=" rounded-lg shadow-lg overflow-hidden">
                    <div className="h-56 sm:h-64 lg:h-80 w-full relative">
                        <img src={ formation.image} alt="Formation Image" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 right-0 bg-white text-secondary text-xs px-3 py-1 text-sm font-semibold capitalize"> {formation.categorie.nom}</div>


                    </div>
                    <div className="px-[3em] py-8">
                        <h1 className="text-3xl font-bold mb-4">{formation.nom}</h1>
                        <p className="text-gray-500 mb-6">{formation.description_courte}</p>
                        <div className="flex items-center mb-6">
                            <div className="bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-3">{formation.duree_valeur} {formation.duree_unite}</div>
                            <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold capitalize mr-3">Niveau {formation.niveau}</div>

                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <p className="text-2xl font-bold">{formation.gratuit ? ('Gratuit') : (formation.tarif + 'Fcfa')}</p>
                            {formation.nombre_de_place <= 0 ? (
                                <p className="text-red-500 font-bold">Formation Complet</p>
                            ) : formation.gratuit ? (
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded" onClick={() => setShowModalEnregistrer(true)}>S'enregistrer</button>
                            ) : (
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded capitalize" onClick={() => setShowModalEnregistrer(true)}>S'inscrire</button>
                            )}

                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Description de la formation</h2>
                            <p className="text-gray-500 mb-8">{formation.description_longue}</p>

                            <h2 className="text-2xl font-bold mb-4">Ce que vous apprendrez</h2>
                            <ul className="list-disc pl-6 text-gray-500 mb-8">
                                {formation.details.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}

                            </ul>

                            <h2 className="text-2xl font-bold mb-4">À qui s'adresse cette formation ?</h2>
                            <p className="text-gray-500 mb-8">
                                {formation.audience.map((item, index) => (
                                    <>
                                        <span key={index}>{item} </span> <br />
                                    </>
                                ))}
                            </p>

                            <h2 className="text-2xl font-bold mb-4">De quoi avez vous besoin avant de débuter</h2>
                            <ul className="list-disc pl-6 text-gray-500 mb-8">
                                {formation.prerequis.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>


                        </div>
                    </div>
                    <div className='py-5 px-6 py-8 bg-secondary'>
                        <h2 className="text-2xl font-bold mb-4">Formateur</h2>
                        <div className="flex items-center mb-8">
                            <img src="../img/moi.png" alt="" className='rounded-full size-20  my-3  mr-4' />
                            <div>
                                <h3 className="text-lg font-bold">Miessan Emmanuel</h3>
                                <p className="text-gray-500">Développeur web </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
};

export default SingleFormationPage;
