import React from 'react';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Head title="Privacy Policy" />

            <div className=" text-gray-300 relative font-sans px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-16 lg:px-20 lg:py-20">
                <div className="max-w-auto  px-5 lg:px-24 absolute left-0 top-[20px] ">
                    <button type="button" onClick={() => window.history.back()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            className="w-8 h-8 rounded-full bg-black/40 hover:bg-gray-600 p-2 backdrop-blur-xl text-gray-100  border border-zinc-600 hover:border-none transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mb-6 text-primary">Politique de Confidentialité</h1>
                <p className="mb-6">
                    Chez <strong>Miessan Emmanuel</strong>, alias Geek, la protection de vos données personnelles est une priorité. Nous nous engageons à respecter votre vie privée et à assurer la transparence quant à la manière dont vos informations sont collectées, utilisées et protégées.
                </p>

                <h2 className="text-xl font-bold mb-4 text-primary">1. Informations collectées</h2>
                <p className="mb-4">Nous collectons les informations suivantes lorsque vous interagissez avec notre site :</p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Nom</strong> : Pour personnaliser nos échanges.</li>
                    <li><strong>Email</strong> : Pour vous répondre ou vous envoyer des informations importantes.</li>
                    <li><strong>Numéro de téléphone</strong> : Pour des communications rapides ou urgentes.</li>
                    <li><strong>Pays</strong> : Pour adapter nos services à votre localisation.</li>
                </ul>

                <h2 className="text-xl font-bold mb-4 text-primary">2. Objectifs de la collecte</h2>
                <p className="mb-4">Les données que vous partagez avec nous sont utilisées exclusivement dans les buts suivants :</p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Répondre à vos demandes ou questions.</li>
                    <li>Améliorer nos services grâce à vos retours.</li>
                    <li>Fournir un support technique ou une assistance en cas de besoin.</li>
                    <li>Vous informer des mises à jour concernant nos services.</li>
                </ul>

                <h2 className="text-xl font-bold mb-4 text-primary">3. Conservation des données</h2>
                <p className="mb-6">
                    Vos informations personnelles sont conservées aussi longtemps que nécessaire pour remplir les objectifs définis dans cette politique ou pour se conformer à des obligations légales.
                </p>

                <h2 className="text-xl font-bold mb-4 text-primary">4. Partage des données</h2>
                <p className="mb-4">
                    Nous ne partageons, ne vendons et ne louons pas vos informations personnelles à des tiers, sauf dans les situations suivantes :
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Lorsque vous nous donnez votre consentement explicite.</li>
                    <li>Pour nous conformer à une obligation légale ou répondre à une demande des autorités compétentes.</li>
                </ul>

                <h2 className="text-xl font-bold mb-4 text-primary">5. Sécurité des données</h2>
                <p className="mb-6">
                    Nous utilisons des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, utilisation abusive, perte ou destruction.
                </p>

                <h2 className="text-xl font-bold mb-4 text-primary">6. Vos droits</h2>
                <p className="mb-4">
                    Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Accès</strong> : Vous pouvez demander à consulter les données personnelles que nous détenons sur vous.</li>
                    <li><strong>Rectification</strong> : Vous pouvez demander à corriger ou mettre à jour vos données si elles sont inexactes.</li>
                    <li><strong>Suppression</strong> : Vous pouvez demander la suppression de vos données personnelles, sauf si nous sommes tenus de les conserver pour des raisons légales.</li>
                    <li><strong>Opposition</strong> : Vous pouvez vous opposer à l'utilisation de vos données personnelles dans certains cas.</li>
                </ul>
                <p className="mb-6">
                    Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : [votre adresse email].
                </p>

                <h2 className="text-xl font-bold mb-4 text-primary">7. Modifications de la politique de confidentialité</h2>
                <p className="mb-6">
                    Cette politique peut être mise à jour de temps à autre pour refléter les changements de nos pratiques ou de la législation en vigueur. Toute modification sera communiquée sur cette page avec une date de mise à jour claire.
                </p>

                <div className="bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-primary">8. Nous contacter</h2>
                    <p className="mb-4">
                        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n'hésitez pas à nous contacter :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Email : contact@miessanemmanuel.com </li>
                        <li>Téléphone : +225 07 10 921 783</li>
                    </ul>
                    <p className="text-sm italic">Date de mise à jour : 12 Déc. 2024</p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;
