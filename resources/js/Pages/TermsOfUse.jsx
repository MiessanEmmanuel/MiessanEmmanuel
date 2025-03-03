import React from 'react';
import Footer from './Footer';
import { Head } from '@inertiajs/react';

const TermsOfUse = () => {
  return (
    <>
            <Head title="Terms of use" />

    <div className=" mx-auto relative rounded-lg shadow-lg px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-16 lg:px-20 lg:py-20">
    <div className="max-w-auto  px-5 lg:px-24 absolute left-0 top-[20px] ">
                <button type="button" onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-8 h-8 rounded-full bg-black/40 hover:bg-gray-600 p-2 backdrop-blur-xl text-gray-100  border border-zinc-600 hover:border-none transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
            </div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Conditions d'Utilisation</h1>
      <p className="mb-6">Bienvenue sur ma page dédiée aux formations en site web, digital, et design graphique. En accédant à cette page et en vous inscrivant à mes formations, vous acceptez les conditions d'utilisation définies ci-dessous. Ces termes visent à clarifier vos droits et responsabilités ainsi que les miens, en tant que propriétaire unique de ce service. Merci de prendre le temps de les lire attentivement avant de fournir vos informations personnelles ou de procéder à une inscription.</p>

      <h2 className="text-2xl font-bold mb-4">1. Collecte et utilisation des données personnelles</h2>
      <p className="mb-6">En soumettant vos informations via cette plateforme, vous m'autorisez expressément à recueillir et utiliser vos données personnelles, notamment : votre nom, prénom, adresse email, numéro de téléphone, et autres informations pertinentes. Ces données sont collectées dans le but de :</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Gérer votre inscription à mes formations et vous garantir un suivi personnalisé.</li>
        <li>Communiquer avec vous régulièrement par email pour vous fournir des contenus éducatifs, des mises à jour sur votre progression, des conseils pratiques, ou des rappels importants relatifs à la formation.</li>
        <li>Proposer des services ou offres complémentaires : à travers mes emails, je pourrai vous faire part de nouvelles formations, promotions ou services pouvant enrichir votre apprentissage ou répondre à vos besoins professionnels.</li>
      </ul>
      <p className="mb-6">Je tiens à souligner que vos données personnelles sont traitées avec la plus grande confidentialité. En tant que propriétaire unique de cette plateforme, je m'engage à ne jamais vendre, échanger ou louer vos données à des tiers sans votre consentement explicite.</p>

      <h2 className="text-2xl font-bold mb-4">2. Communication par email</h2>
      <p className="mb-6">En vous inscrivant à mes formations, vous consentez à recevoir des communications par email de ma part. Ces emails peuvent inclure :</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Des informations essentielles relatives à votre inscription et au déroulement de la formation.</li>
        <li>Du contenu éducatif supplémentaire, conçu pour approfondir vos connaissances dans les domaines du site web, du digital et du design graphique.</li>
        <li>Des propositions d'offres exclusives, de réductions ou de nouveaux services susceptibles de répondre à vos attentes.</li>
      </ul>
      <p className="mb-6">Vous avez la possibilité de vous désinscrire à tout moment de ces communications en cliquant sur le lien de désinscription inclus dans chaque email. Cependant, certaines communications essentielles, comme celles relatives à votre inscription, ne pourront être désactivées pour garantir un bon suivi.</p>

      <h2 className="text-2xl font-bold mb-4">3. Engagement des utilisateurs</h2>
      <p className="mb-6">En utilisant ma plateforme, vous vous engagez à :</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Fournir des informations exactes, complètes et mises à jour lors de votre inscription. Cela est essentiel pour garantir un suivi efficace et une expérience adaptée à vos besoins.</li>
        <li>Ne pas utiliser cette plateforme à des fins illégales ou non conformes à mes valeurs. Toute tentative de fraude, d'usurpation d'identité ou d'utilisation abusive de mes services pourra entraîner la résiliation immédiate de votre accès à mes formations.</li>
        <li>Respecter les autres participants et éviter tout comportement inapproprié dans le cadre des éventuelles interactions, comme les forums ou les sessions en groupe.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
      <p className="mb-6">Tous les contenus que je mets à votre disposition (textes, vidéos, supports pédagogiques, graphiques, etc.) sont protégés par les lois sur la propriété intellectuelle et m'appartiennent en exclusivité. Cela inclut :</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Les documents et ressources accessibles après votre inscription.</li>
        <li>Les designs, cours en ligne, et tout autre matériel éducatif que je crée dans le cadre de ces formations.</li>
      </ul>
      <p className="mb-6">Toute reproduction, distribution, modification ou utilisation non autorisée de ces contenus, sans mon accord préalable, est strictement interdite et pourra donner lieu à des poursuites judiciaires.</p>

      <h2 className="text-2xl font-bold mb-4">5. Limitation de responsabilité</h2>
      <p className="mb-6">Bien que je mette tout en œuvre pour fournir des formations de qualité et des informations précises, je ne peux garantir les résultats que vous obtiendrez à l'issue de ces cours. Votre progression dépendra de votre engagement personnel et de vos efforts. De plus :</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Je ne saurais être tenu responsable des interruptions temporaires de service liées à des problèmes techniques indépendants de ma volonté.</li>
        <li>Je décline toute responsabilité pour les pertes ou dommages indirects, comme une mauvaise utilisation des connaissances acquises ou des attentes irréalistes.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">6. Modifications des conditions d'utilisation</h2>
      <p className="mb-6">En tant que propriétaire de cette plateforme, je me réserve le droit de mettre à jour ou de modifier ces conditions d'utilisation à tout moment, en fonction des évolutions légales ou des besoins de mon activité. Toute modification sera publiée ici, et je vous recommande de consulter régulièrement cette page. Votre utilisation continue de mes services après une mise à jour constitue une acceptation des nouvelles conditions.</p>

      <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
      <p className="mb-6">Pour toute question, préoccupation ou demande relative à ces conditions d'utilisation, à vos données personnelles, ou à mes formations, vous pouvez me contacter directement :</p>
      <p className="mb-2">Email : contact@miessanemmanuel.com</p>
      <p className="mb-2">Téléphone : +225 0710921783</p>

    </div>
    <Footer />
    </>
  );
};

export default TermsOfUse;
