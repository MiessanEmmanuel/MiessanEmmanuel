
import React, { useRef, useState } from 'react';
import { Calendar, Clock, Tag, CheckCircle, X, Upload, ArrowRight } from 'lucide-react';
import HeaderAdmin from './HeaderAdmin';
import { router, usePage } from '@inertiajs/react';
import axios from 'axios';

const AddFormationAdmin = () => {
    const categories = usePage().props.categories;
    const {flash} = usePage().props
    const image = useRef();
    const [formData, setFormData] = useState({
        nom: '',
        slug: '',
        description_courte: '',
        description_longue: '',
        image: null,
        lien_video: '',
        date_debut: '',
        heure_debut: '',
        duree_unite: '',
        duree_valeur: 0,
        prerequis: '',
        audience: '',
        details: '',
        niveau: '',
        inscription_ouverte: false,
        date_limite_inscription: '',
        nombre_de_place: 0,
        gratuit: false,
        tarif: 0,
        categorie_id: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageUpload = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0]
        }));

    };
   /*  console.log(formData.image.name) */

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('admin.formation.create'), formData, {
            onSuccess: () => {
                console.log("Données envoyées avec succès !");
            },
            onError: (errors) => {
                console.error("Erreurs :", errors); // Affiche les erreurs de validation
            }
        });
    };




    return (
        <>
            <HeaderAdmin>
                <div className=" text-white p-0 md:p-8">
                    <h1 className="text-3xl font-bold">{flash.error}</h1>
                    <h1 className="text-3xl font-bold mb-8">Ajouter une Formation  </h1>
                    <form onSubmit={handleSubmit} className="bg-secondary md:rounded-xl p-3 md:p-8 w-full md:max-w-5xl md:mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="nom" className="block mb-2 text-gray-400">Nom</label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="slug" className="block mb-2 text-gray-400">Slug</label>
                                <input
                                    type="text"
                                    id="slug"
                                    name="slug"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.slug}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="description_courte" className="block mb-2 text-gray-400">Description Courte</label>
                            <textarea
                                id="description_courte"
                                name="description_courte"
                                rows="3"
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={formData.description_courte}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="description_longue" className="block mb-2 text-gray-400">Description Longue</label>
                            <textarea
                                id="description_longue"
                                name="description_longue"
                                rows="6"
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={formData.description_longue}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="image" className="block mb-2 text-gray-400">Image</label>
                                <div className="flex items-center bg-black/40 rounded-lg px-4 py-2" onClickCapture={() => { image.current.click() }}>
                                    <Upload className="mr-2 text-gray-400" />
                                    {formData.image ? (formData.image.name) : ('Choisir une image')}
                                    <input
                                        ref={image}
                                        type="file"
                                        id="image"
                                        name="image"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lien_video" className="block mb-2 text-gray-400">Lien Vidéo</label>
                                <input
                                    type="text"
                                    id="lien_video"
                                    name="lien_video"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.lien_video}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label htmlFor="date_debut" className="block mb-2 text-gray-400">Date de Début</label>
                                <div className="flex items-center bg-black/40 rounded-lg px-4 py-2">
                                    <Calendar className="mr-2 text-gray-400" />
                                    <input
                                        type="date"
                                        id="date_debut"
                                        name="date_debut"
                                        className="bg-transparent border-none focus:outline-none w-full"
                                        value={formData.date_debut}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="heure_debut" className="block mb-2 text-gray-400">Heure de Début</label>
                                <div className="flex items-center bg-black/40 rounded-lg px-4 py-2">
                                    <Clock className="mr-2 text-gray-400" />
                                    <input
                                        type="time"
                                        id="heure_debut"
                                        name="heure_debut"
                                        className="bg-transparent border-none focus:outline-none w-full"
                                        value={formData.heure_debut}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="duree" className="block mb-2 text-gray-400">Durée</label>
                                <div className="flex items-center bg-black/40 rounded-lg px-4 py-2">
                                    <div className="flex-1">
                                        <input
                                            type="number"
                                            id="duree_valeur"
                                            name="duree_valeur"
                                            className="bg-transparent border-none w-full focus:outline-none w-full text-red-400"
                                            value={formData.duree_valeur}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <select
                                        id="duree_unite"
                                        name="duree_unite"
                                        className="bg-transparent border-none focus:outline-none flex-1"
                                        value={formData.duree_unite}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Unité</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="heures">Heures</option>
                                        <option value="mois">Mois</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="prerequis" className="block mb-2 text-gray-400">Prérequis</label>
                                <textarea
                                    id="prerequis"
                                    name="prerequis"
                                    rows="3"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.prerequis}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="audience" className="block mb-2 text-gray-400">Audience</label>
                                <textarea
                                    id="audience"
                                    name="audience"
                                    rows="3"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.audience}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="details" className="block mb-2 text-gray-400">Détails</label>
                            <textarea
                                id="details"
                                name="details"
                                rows="4"
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={formData.details}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="niveau" className="block mb-2 text-gray-400">Niveau</label>
                                <select
                                    type="text"
                                    id="niveau"
                                    name="niveau"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.niveau}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Choisir un niveau</option>
                                    <option value="débutant">Débutant</option>
                                    <option value="intermédiaire">Intermédiaire</option>
                                    <option value="avancé">Avancé</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className={`w-6 h-6 mr-2 ${formData.inscription_ouverte ? 'text-green-500' : 'text-gray-400'}`} />
                                <label htmlFor="inscription_ouverte" className="block mb-2 text-gray-400">Inscription Ouverte</label>
                                <input
                                    type="checkbox"
                                    id="inscription_ouverte"
                                    name="inscription_ouverte"
                                    className="hidden"
                                    checked={formData.inscription_ouverte}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label htmlFor="date_limite_inscription" className="block mb-2 text-gray-400">Date Limite d'Inscription</label>
                                <div className="flex items-center bg-black/40 rounded-lg px-4 py-2">
                                    <Calendar className="mr-2 text-gray-400" />
                                    <input
                                        type="date"
                                        id="date_limite_inscription"
                                        name="date_limite_inscription"
                                        className="bg-transparent border-none focus:outline-none w-full"
                                        value={formData.date_limite_inscription}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="nombre_de_place" className="block mb-2 text-gray-400">Nombre de Places</label>
                                <input
                                    type="number"
                                    id="nombre_de_place"
                                    name="nombre_de_place"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.nombre_de_place}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className={`w-6 h-6 mr-2 ${formData.gratuit ? 'text-green-500' : 'text-gray-400'}`} />
                                <label htmlFor="gratuit" className="block mb-2 text-gray-400">Gratuit</label>
                                <input
                                    type="checkbox"
                                    id="gratuit"
                                    name="gratuit"
                                    className="hidden"
                                    checked={formData.gratuit}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {!formData.gratuit && (
                            <div className="mb-6">
                                <label htmlFor="tarif" className="block mb-2 text-gray-400">Tarif</label>
                                <input
                                    type="number"
                                    id="tarif"
                                    name="tarif"
                                    className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                    value={formData.tarif}
                                    onChange={handleInputChange}
                                />
                            </div>
                        )}

                        <div className="mb-6">
                            <label htmlFor="categorie_id" className="block mb-2 text-gray-400">Catégorie</label>
                            <select
                                type="text"
                                id="categorie_id"
                                name="categorie_id"
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={formData.categorie_id}
                                onChange={handleInputChange}
                            >
                                <option value="">Choisir une catégorie</option>
                                {categories.map((categorie) => (
                                    <option key={categorie.id} value={categorie.id}>{categorie.nom}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center">
                                Ajouter la Formation
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </HeaderAdmin>
        </>

    );
};

export default AddFormationAdmin;
