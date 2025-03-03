import { Head, Link, usePage } from "@inertiajs/react";
import { Mail } from "lucide-react";

const ConfirmationInscriptionPage = () => {
    const { formation, user } = usePage().props
    console.log(formation, user)


    return (
        <>
            <Head title="Confirmation de l'inscription" />

            <div className=" mx-auto rounded-lg ">
                <div className="h-[14em] overflow-y-scroll">
                    <img src={formation.image} alt="banierre Image" className="mb-4 w-full  " />
                </div>
                <div className="px-3 py-4 md:p-8 w-full md:max-w-6xl mx-auto">
                    <div className="">

                        <h1 className="text-3xl font-bold mb-4 bg-primary block px-2 py-1 tracking-tight text-center mx-auto">Merci pour votre {formation.gratuit ? 'inscription' : 'paiement'}  !</h1>
                    </div>
                    <div className="">
                        <p className="text-center text-gray-400 mb-4 font-bold flex justify-center items-center space-x-3"> <Mail className="size-4 inline-block mr-2" /> Un mail de confirmation vous a été envoyé</p>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between space-y-2 md:space-x-6 md:space-y-0 mb-5 text-gray-300">
                        {formation && (
                            <div className="md:mb-0 mb-6 border border-dashed border-gray-500 p-4 flex-1" >
                                <h2 className="text-2xl font-bold mb-4 text-primary">Détails de la formation</h2>
                                <p className="mb-2 ">{formation.nom}</p>
                                <p className="mb-2 truncate">{formation.description_courte}</p>
                                <p className="mb-2"><span className="">Durée :</span> {formation.duree_valeur} {formation.duree_unite}</p>
                                <p className="mb-2"><span className="">Niveau :</span> {formation.niveau}</p>
                                <p className="mb-2"><span className="">Prix :</span> {formation.gratuit ? 'Gratuit' : (formation.tarif + 'Fcfa')} </p>
                            </div>
                        )}
                        <div className="mb-6 border border-dashed border-gray-500 p-4 flex-1">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Vos informations</h2>
                            <p className="mb-2"><span className="">Nom :</span> {user.nom}</p>
                            <p className="mb-2"><span className="">Prénom :</span> {user.prenom}</p>
                            <p className="mb-2"><span className="">Email :</span> {user.email}</p>
                            <p className="mb-2"><span className="">Téléphone :</span> {user.telephone}</p>
                            <p className="mb-2 capitalize"><span className="">Moyen de paiement  :</span> {user.payment_moyen}</p>

                        </div>
                    </div>
                    <p className="text-gray-400">Je vous remercie de votre confiance et je m'engage à vous offrir une expérience d'apprentissage enrichissante. N'hésitez pas à me contacter si vous avez la moindre question.</p>
                </div>

                <div className="flex justify-center mb-6">

                    <Link href={route('formation')} className="bg-primary inline-block px-4 py-4 rounded-lg font-bold hover:bg-green-700 mx-auto text-center ">Retour à la page formation</Link>
                </div>

            </div>
        </>
    )
}

export default ConfirmationInscriptionPage;
