import { Link, Head } from '@inertiajs/react';
import '../../../public/css/style.css';
import Header from '@/Layouts/Header';
import Footer from './Footer';
import { useRef, useState } from 'react';
import TitleSection from '@/Components/TitleSection';
import HorizontalWrapper from '@/Pages/ComponentPage/HorizontalWrapper';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FormContact from './ComponentPage/FormContact';
import RealisationEnum from './ComponentPage/RealisationEnum';
import FlashMessage from '@/Components/FlashMessage';
gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Welcome({ }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const [indigo, setIndigo] = useState(false)

    const marginSection = "px-3 md:px-6 lg:px-6 py-3 md:py-4 lg:py-6 my-24 lg:my-42 ";
    const titleSection = ['lg:text-4xl text-3xl', 'font-bold tracking-tight'];

    if (indigo) titleSection.push('text-indigo-500')

    const elements = document.querySelectorAll('.linear-gradient-bouton');

    elements.forEach(element => {
        // creeer une div comme premier enfant de element
        const div = document.createElement('div');
        element.prepend(div);
        element.addEventListener('mouseenter', () => {
            element.children[0].classList.add('linear-gradient-bouton-hover-enter');
            element.children[0].classList.remove('linear-gradient-bouton-hover-leave'); // Ajouter la classe leave

            /* alert('Classe ajoutée pour mouse enter'); */
        });

        element.addEventListener('mouseleave', () => {
            element.children[0].classList.remove('linear-gradient-bouton-hover-enter'); // Retirer la classe
            element.children[0].classList.add('linear-gradient-bouton-hover-leave'); // Ajouter la classe leave
            /* alert('Classe ajoutée pour mouse leave'); */
        });
    });


    /* ----------------GSAP--------- */

    const main = useRef();

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
            boxes.forEach((box) => {
                console.log(box)
                gsap.from(box, {
                    y: 100,
                    duration: 1,

                    opacity: 0,
                    scrollTrigger: {

                        trigger: box,
                        start: 'left bottom',
                        end: 'top 30%',
                        scrub: true,
                        stagger: 3,
                        // markers: true,
                    },
                });

            });
        },
        { scope: main }
    );

    const trophee = useRef();
    useGSAP(() => {
        gsap.to(trophee.current, {
            scale: 1.2,

            scrollTrigger: {
                scale: 0,
                start: 'left bottom  50%',
                end: 'top 20%',
                scrub: true,
                stagger: 3,
                trigger: trophee.current,
                // markers: true,
            },

        })
    });





    /* useGSAP(() => {
        gsap.from(main.current, {
            boxShadow: '-31px -15px 35px -26px rgba(55,133,77,1) inset',
            scrollTrigger: {

                boxShadow: 'none'
                // markers: true,
            },

        })
    });
 */
    /* ----- realisations ------ */
    const [indexRealisation, setIndexRealisation] = useState(0);

    const mesRealisation = [

        { id: 0, content: <RealisationEnum title={"Equilibre Drip"}> Création d'une boutique e-commerce moderne et élégante, spécialisée dans la vente de produits tendance, offrant une expérience d'achat fluide et sécurisée.   </RealisationEnum> },
        { id: 1, content: <RealisationEnum title={"JAE"}> Développement d'une plateforme communautaire dédiée aux entrepreneurs, favorisant les échanges, la programmation d'événements et le réseautage professionnel.  </RealisationEnum> },
        { id: 2, content: <RealisationEnum title={"Echoscript"}> Mise en place d'un service innovant de transcription qui convertit des fichiers audio en texte de manière rapide et précise pour les professionnels.  </RealisationEnum> },
        { id: 3, content: <RealisationEnum title={"BangIvoireCanada"}> Création du site web d'une ONG engagée dans des projets de développement entre la Côte d'Ivoire et le Canada, facilitant la présentation de leurs actions et la collecte de dons. </RealisationEnum> },
    ]



    return (
        <>
            <Head title="Welcome" />
            <Header />
            <FlashMessage />

            {/* heros  */}



            {/*  <HorizontalWrapper root > */}
            <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >

                <section className={"text-center relative overflow-hidden " + ""} >
                    {/*  <div className="absolute inset-y-0  -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-600 to-teal-600 opacity-30 "
                        style={{ clipPath: "polygon(2% 0, 49% 100%, 100% 100%)" }}>
                    </div>
                </div> */}
                    <div className={"lg:container mx-auto relative leading-7 px-6 lg:px-0 pb-14 " + ""}>

                        <div className=" md:pt-24 pt-14 text-center max-w-3xl mx-auto flex flex-col justify-between">
                            <div className='my-6' >
                                <img src="../img/moi.png" alt="" className='rounded-full size-20 mx-auto my-3 ' />
                                <span className='text-gray-400 text-thin text-sm'>Hello, Je suis Geek 👋</span>
                            </div>
                            <div>
                                <h1
                                    className="lg:text-5xl text-5xl font-bold mb-8  bg-gradient-to-r from-white via-[#f2f1f1] to-[#585656] text-transparent bg-clip-text ">
                                    Explosez vos statistiques avec mes services</h1>
                                <p className=" mb-8 leading-6 text-gray-400 text-lg">
                                    J’aide les personnes qui débutent en entrepreneuriat à se lancer en les dotant des compétences nécessaires pour se faire connaître sur le web, ou en réalisant ces actions pour eux.
                                </p>
                            </div>
                            <a href="https://calendly.com/emmanueljeanmiessan/30min" className="inline-block text-whitepattern px-6 py-3 rounded linear-gradient-bouton lg:mt-4 l font-bold hover:scale-5 ">

                                <span className='relative z-10'>
                                    Réserver un appel gratuit
                                </span>

                            </a>

                        </div>

                        {/* <div className="relative hidden  px-6">
                            <div className="grid grid-cols-3 gap-x-10 mt-16  bottom-[-80px] mx-auto text-white">
                                <div className=" px-10  py-6 bg-[#292629]">
                                    <h3 className=" md:text-xl font-bold mb-4 ">Réseaux Sociaux</h3>
                                    <p className="mb-4 text-sm md:text-base">Boostez votre présence en ligne grâce à des stratégies de réseaux sociaux adaptées.</p>
                                    <Link href={route('webcreation')} className=" text-primary">En savoir plus <span aria-hidden="true">&rarr;</span></Link>
                                </div>
                                <div className=" px-10 drop-degrate py-6 translate-y-8">
                                    <h3 className="text-xl font-bold mb-4 ">Création De Site Web </h3>
                                    <p className="mb-4 text-sm md:text-base">Je crée des sites web modernes, intuitifs et performants qui répondent à vos besoins.</p>
                                    <Link href={route('appcreation')} className=" text-primary">En savoir plus <span aria-hidden="true">&rarr;</span></Link>
                                </div>
                                <div className="px-10   drop-degrate py-6">
                                    <h3 className="text-xl font-bold mb-4">Design Graphique</h3>
                                    <p className="mb-4 text-sm md:text-base">Je vous accompagne dans la création de votre identité visuelle unique.</p>
                                    <Link href={route('designcreation')} className=" text-primary">En savoir plus <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </div>


                        </div> */}


                    </div>
                </section>

                <section className={'  py-10 max-w-7xl mx-auto sm:block hidden'}>
                    <div className='footer-heros flex items-center justify-around mx-auto '>
                        <div className='avantage-1 f flex items-center gap-5'>
                            <div className='cercle linear-gradient rounded-full p-2'>
                                {/*   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                </svg> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"
                                    className='size-9'
                                >
                                    {/* Fond de l'écran */}
                                    <rect x="20" y="20" width="160" height="140" rx="10" fill="#fff" />

                                    {/* Barre du haut */}
                                    <rect x="20" y="20" width="160" height="25" rx="10" fill="#292629" />

                                    {/* Points de la barre */}
                                    <circle cx="40" cy="32.5" r="4" fill="#E74C3C" />
                                    <circle cx="55" cy="32.5" r="4" fill="#F1C40F" />
                                    <circle cx="70" cy="32.5" r="4" fill="#2ECC71" />

                                    {/* Éléments de code/design */}
                                    <rect x="35" y="60" width="60" height="10" rx="2" fill="#292629" />
                                    <rect x="35" y="80" width="130" height="10" rx="2" fill="#37854d93" />
                                    <rect x="35" y="100" width="90" height="10" rx="2" fill="#292629" />

                                    {/* Symboles de code */}
                                    <text x="140" y="115" fontFamily="monospace" fontSize="24" fill="#ECF0F1">&lt;/&gt;</text>

                                    {/* Ligne verticale décorative */}
                                    <rect x="120" y="60" width="3" height="50" fill="#fff" />

                                    {/* Cercle décoratif */}
                                    <circle cx="160" cy="90" r="15" fill="#37854d" opacity="0.8" />
                                </svg>

                            </div>
                            <p className='text-avantage font-bold tracking-tight'>
                                Création de <br />
                                Site Web
                            </p>
                        </div>
                        <div className='avantage-1  flex items-center gap-5 font-bold tracking-tight'>
                            <div className='cercle linear-gradient rounded-full p-2'>




                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"
                                    className='size-9'
                                >
                                    {/* Fond circulaire agrandi */}
                                    <circle cx="100" cy="100" r="100" fill="#fff" />

                                    {/* Éléments de l'interface no-code agrandis */}
                                    <rect x="40" y="60" width="120" height="80" rx="10" fill="#292629" />

                                    {/* Blocs représentant les éléments drag-and-drop agrandis */}
                                    <rect x="50" y="75" width="45" height="20" rx="5" fill="#00B894" />
                                    <rect x="105" y="75" width="45" height="20" rx="5" fill="#FF7675" />
                                    <rect x="50" y="105" width="100" height="20" rx="5" fill="#74B9FF" />

                                    {/* Symbole de connexion entre les blocs ajusté */}
                                    <path d="M72 95 L72 105" stroke="#A8A8A8" strokeWidth="3" />
                                    <path d="M127 95 L127 105" stroke="#A8A8A8" strokeWidth="3" />

                                    {/* Curseur symbolisant le drag-and-drop agrandi */}
                                    <path d="M155 50 L168 63 L155 76 Z" fill="#FFA502" />

                                    {/* Texte "NO CODE" stylisé agrandi */}
                                    {/*  <text x="55" y="160" fontFamily="Arial" fontSize="20" fill="#292629" fontWeight="bold">NO CODE</text> */}
                                </svg>

                            </div>
                            <p className='text-avantage font-bold tracking-tight '>
                                Formation <br />
                                No-code
                            </p>
                        </div>
                        <div className='avantage-1 flex items-center gap-5'>
                            <div className='cercle linear-gradient rounded-full p-2 '>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"

                                    className={"size-9"}
                                >
                                    {/* Fond circulaire agrandi */}
                                    <circle cx="100" cy="100" r="100" fill="#fff" />

                                    {/* Palette de couleurs agrandie */}
                                    <circle cx="65" cy="75" r="20" fill="#FF6B6B" />
                                    <circle cx="100" cy="75" r="20" fill="#4ECDC4" />
                                    <circle cx="135" cy="75" r="20" fill="#A8E6CF" />

                                    {/* Stylo/crayon agrandi */}
                                    <path
                                        d="M55 120 L95 80 L120 105 L80 145 L55 120"
                                        fill="#2D3436"
                                        stroke="#292926"
                                        strokeWidth="3"
                                    />

                                    {/* Règle/guide agrandi */}
                                    <rect
                                        x="90"
                                        y="115"
                                        width="75"
                                        height="12"
                                        transform="rotate(-45 90 115)"
                                        fill="#636E72"
                                    />

                                    {/* Points de connexion agrandis */}
                                    <circle cx="95" cy="80" r="4" fill="#292926" />
                                    <circle cx="120" cy="105" r="4" fill="#292926" />

                                    {/* Symbole artistique agrandi */}
                                    <path
                                        d="M120 140 Q 135 125, 150 140 T 175 140"
                                        fill="none"
                                        stroke="#292926"
                                        strokeWidth="4"
                                    />
                                </svg>

                            </div>
                            <p className='text-avantage font-bold tracking-tight'>
                                Design <br />
                                Graphic
                            </p>
                        </div>

                    </div>
                </section>
                {/* ----ok title */}
                <section className={"  " + marginSection} id="apropos">
                    <div className="lg:container sm:w-full px-3 lg:px-0 mx-auto">

                        <TitleSection title="Faites remarquer votre business" />

                        <div className="flex items-center  flex-col-reverse lg:flex-row lg:items-end gap-x-9  space-x-9">
                            <div className=" lg:w-2/3 w-full text-center lg:text-start my-10 lg:my-0 flex flex-col justify-between ">
                                <div className=''>
                                    <h2 className={"font-bold !my-2 !text-base text-prymary " + titleSection.join(' ')}> Trouvons la bonne approche
                                    </h2>
                                    <p className="lg:text-xl text-3xl text-gray-300  font-bold mb-8 "> <span className='text-primary'>Une femme </span> avec des formes,&nbsp; mais portant un boubou,&nbsp; ne se fait pas remarquer pour ses courbes.</p>
                                </div>
                                <p className="mb-10 leading-8 sm:tracking-tight text-lg text-gray-300 font-medium text-justify ">Vous avez besoin de mettre en lumière vos idées.&nbsp;
                                    Elles sont bonnes,&nbsp;  tenaces,  &nbsp;capables d’attirer et de <span className='text-primary'>captiver l’attention</span>.&nbsp; Mais sans le bon habillage, elles deviennent presque invisibles.
                                    &nbsp;Dans le monde d’aujourd’hui,&nbsp; qui est numérique,&nbsp; les outils du web sont le vêtement et le
                                    langage de notre époque.&nbsp; Les maîtriser revient à transformer notre savoir et nos compétences en <span className='text-primary'>chiffre d’affaires</span>,
                                    cochant ainsi une nouvelle case 'accomplie' sur notre longue liste de projets.

                                </p>
                                <div>
                                    <Link href={route('services')} className="inline-block text-white px-6 py-3 rounded linear-gradient-bouton  text-bold  ">
                                        <span className='relative z-10'>
                                            En savoir plus

                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-full bg-primary py-4 rounded-xl">
                                {/*  <img src="https://placehold.co/400x300/37854d/fff" alt="Experience" className="w-full image" /> */}
                                <img src="../img/goal.png" alt="GOAL MIESSAN EMMANUEL" className='mx-auto w-[19rem] ' />
                            </div>
                        </div>
                    </div>

                </section>




                {/* comment resoudre votre problème  ---- ok*/}
                <section className={"  relative overflow-hidden " + marginSection}>
                    <div className="mx-auto lg:container">


                        <TitleSection title="Comment resoudre votre problème ?" />

                        {/* <input type="checkbox" name="checkIndigo" id="" onClick={ indigo ? ()=>{setIndigo(false)} :()=>{setIndigo(true)}  } /> */}

                        {/* revoir les img */}
                        <div className='flex flex-col lg:flex-row justify-between items-center  gap-9'>

                            <div
                                className="grid md:grid-cols-2  grid-cols-1   rounded-md backdrop-blur-lg bg-secondary/40 max-w-5xl lg:w-4/6 ">
                                <div className=" px-10 py-6 lg:border-r-0  border-t border-l border-r border-zinc-500 ">
                                    <div className='flex items-center leading-0 gap-x-3 my-3'>
                                        <img src="../img/un.png" alt="oups" className='size-8 lg:size-12' />
                                        <h3 className="text-xl font-bold " >Parlons ensemble de votre projet </h3>
                                    </div>
                                    <p className="mb-4 text-gray-300">Une première rencontre pour bien comprendre vos besoins, objectifs et défis afin de bâtir une solution adaptée.</p>

                                </div>
                                <div className=" px-10 py-6 border-t border-l border-r border-zinc-500 ">
                                    <div className='flex items-center leading-0 gap-x-3 my-3'>
                                        <img src="../img/deux.png" alt="oups" className='size-8 lg:size-12' />
                                        <h3 className="text-xl font-bold ">Fournir le plan d'action </h3>
                                    </div>
                                    <p className="mb-4 text-gray-300">Je crée un plan d’action détaillé, structurant les étapes à suivre pour concrétiser votre projet avec efficacité.</p>

                                </div>
                                <div className="px-10 border-t border-l border-r border-b border-zinc-500 lg:border-r-0  py-6">

                                    <div className='flex items-center leading-0 gap-x-3 my-3'>
                                        <img src="../img/trois.png" alt="oups" className='size-8 lg:size-12' />
                                        <h3 className="text-xl font-bold ">Faire germer votre solution </h3>
                                    </div>
                                    <p className="mb-4 text-gray-300">Mise en œuvre de la stratégie : vos idées prennent forme et commencent à se matérialiser grâce à des solutions créatives.</p>


                                </div>
                                <div className="px-10 border-t-0 md:border-t border-l border-b border-r border-zinc-500 py-6">
                                    <div className='flex items-center leading-0 gap-x-3 my-3'>
                                        <img src="../img/quatre.png" alt="oups" className='size-8 lg:size-12' />
                                        <h3 className="text-xl font-bold ">L'affiner en fonction de vos avis </h3>
                                    </div>
                                    <p className="mb-4 text-gray-300">Votre retour est précieux. J’ajuste et perfectionne le projet pour qu’il corresponde pleinement à vos attentes.</p>


                                </div>

                            </div>
                            <div className=''>
                                <img src="../img/fleche-right.png" alt="oups" className='block lg:rotate-0 rotate-[90deg]' />

                            </div>
                            <div className='' ref={trophee}>
                                <img src="../img/trophee.png" alt="oups" className='size-72 mx-auto block' />
                            </div>
                        </div>
                    </div>
                </section>



                {/* ----ok title */}
                <section className={"   " + marginSection} id="services">
                    <div className="mx-auto lg:container">

                        <TitleSection title="Avec quel service puis-je vous aider ?" />

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-y-6 mx-auto overflow-f   " ref={main}>

                            <div className="bg-secondary ring-1 ring-zinc-700 box  " >
                                <div className=" rounded px-3 pb-3 pt-10 lg:px-6  lg:pb-6 lg:pt-20 ">
                                    <div className='relative'>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 200 200"
                                            className={"size-9 w-12 h-12 mb-4"}
                                        >

                                            {/* Fond de l'écran */}
                                            <rect x="20" y="20" width="160" height="140" rx="10" fill="#37854d" />

                                            {/* Barre du haut */}
                                            <rect x="20" y="20" width="160" height="25" rx="10" fill="#292629" />

                                            {/* Points de la barre */}
                                            <circle cx="40" cy="32.5" r="4" fill="#E74C3C" />
                                            <circle cx="55" cy="32.5" r="4" fill="#F1C40F" />
                                            <circle cx="70" cy="32.5" r="4" fill="#2ECC71" />

                                            {/* Éléments de code/design */}
                                            <rect x="35" y="60" width="90" height="50" rx="2" fill="#292629" /* ref={rectangle1} */ />
                                            <rect x="35" y="120" width="90" height="10" rx="2" fill="#fff" />
                                            <rect x="35" y="140" width="100" height="10" rx="2" fill="#292629" />

                                            {/* Ligne verticale décorative */}
                                            <rect x="100" y="120" width="5" height="40" fill="#37854d" />

                                            {/* Cercle décoratif */}
                                            <circle cx="160" cy="90" r="15" fill="#fff" opacity="0.8" /* ref={cercle} */ />
                                        </svg>
                                    </div>

                                    <h3 className="md:text-xl text-lg font-bold mb-2 capitalize">Création De Pages de ventes ( Orientées conversion )</h3>
                                    <p className='text-base text-gray-300 text-thin'>Augmentez vos revenus en optimisant vos ventes grâce à des pages stratégiquement conçues pour convertir vos visiteurs en clients.</p>
                                </div>
                            </div>
                            <div className="bg-secondary ring-1 ring-zinc-700 box ">
                                <div className=" rounded px-3 pb-3 pt-10 lg:px-6  lg:pb-6 lg:pt-20">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 200 200"
                                        className={"size-9 w-12 h-12 mb-4"}
                                    >
                                        <circle cx="100" cy="100" r="100" fill="#37854d" />





                                        {/* Points de la barre */}
                                        <circle cx="40" cy="50.5" r="4" fill="#E74C3C" />
                                        <circle cx="55" cy="50.5" r="4" fill="#F1C40F" />
                                        <circle cx="70" cy="50.5" r="4" fill="#2ECC71" />

                                        {/* Éléments de code/design */}
                                        <rect x="35" y="80" width="60" height="10" rx="2" fill="#292629" />
                                        <rect x="35" y="100" width="130" height="10" rx="2" fill="#fff" />
                                        <rect x="35" y="120" width="130" height="10" rx="2" fill="#fff" />


                                        {/* Symboles de code */}
                                        <text x="85" y="165" fontFamily="monospace" fontSize="24" fill="secondary">&lt;/&gt;</text>

                                        {/* Ligne verticale décorative */}
                                        <rect x="120" y="80" width="3" height="50" fill="#37854d" />

                                        {/* Cercle décoratif */}
                                        <circle cx="160" cy="80" r="15" fill="#37854d" opacity="0.8" />
                                    </svg>
                                    <h3 className="md:text-xl text-lg font-bold mb-2 capitalize">Création D'application Et Site Web {/* Orientées conversion */}</h3>
                                    <p className='text-base text-gray-300 text-thin'>Faites grandir votre business en développant des sites web et applications performants et modernes, adaptés à vos besoins.</p>
                                </div>
                            </div>
                            <div className="bg-secondary ring-1 ring-zinc-700  box">
                                <div className=" rounded px-3 pb-3 pt-10 lg:px-6  lg:pb-6 lg:pt-20">

                                    {/* outils no-code */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 200 200"
                                        className={"size-9 w-12 h-12 mb-4"}
                                    >
                                        {/* Fond circulaire agrandi */}
                                        <circle cx="100" cy="100" r="100" fill="#37854d" />

                                        {/* Éléments de l'interface no-code agrandis */}
                                        <rect x="40" y="60" width="120" height="80" rx="10" fill="#292629" />

                                        {/* Blocs représentant les éléments drag-and-drop agrandis */}
                                        <rect x="50" y="75" width="45" height="20" rx="5" fill="#00B894" />
                                        <rect x="105" y="75" width="45" height="20" rx="5" fill="#FF7675" />
                                        <rect x="50" y="105" width="100" height="20" rx="5" fill="#74B9FF" />

                                        {/* Symbole de connexion entre les blocs ajusté */}
                                        <path d="M72 95 L72 105" stroke="#A8A8A8" strokeWidth="3" />
                                        <path d="M127 95 L127 105" stroke="#A8A8A8" strokeWidth="3" />

                                        {/* Curseur symbolisant le drag-and-drop agrandi */}
                                        <path d="M155 50 L168 63 L155 76 Z" fill="#FFA502" />

                                        {/* Texte "NO CODE" stylisé agrandi */}
                                        {/*  <text x="55" y="160" fontFamily="Arial" fontSize="20" fill="#292629" fontWeight="bold">NO CODE</text> */}
                                    </svg>

                                    <h3 className="md:text-xl text-lg font-bold mb-2 capitalize">Formation aux outils no-code {/* Orientées conversion */}</h3>
                                    <p className='text-base text-gray-300 text-thin'>Gagnez vos premiers clients en apprenant à créer des sites web et applications sans coder. Maîtrisez des outils puissants comme WordPress.</p>
                                </div>
                            </div>
                            <div className="bg-secondary ring-1 ring-zinc-700 box ">
                                <div className=" rounded px-3 pb-3 pt-10 lg:px-6  lg:pb-6 lg:pt-20">
                                    {/* icon Design graphic */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 200 200"

                                        className={"size-9 w-12 h-12 mb-4"}
                                    >
                                        {/* Fond circulaire agrandi */}
                                        <circle cx="100" cy="100" r="100" fill="#37854d" />

                                        {/* Palette de couleurs agrandie */}
                                        <circle cx="65" cy="75" r="20" fill="#FF6B6B" />
                                        <circle cx="100" cy="75" r="20" fill="#4ECDC4" />
                                        <circle cx="135" cy="75" r="20" fill="#A8E6CF" />

                                        {/* Stylo/crayon agrandi */}
                                        <path
                                            d="M55 120 L95 80 L120 105 L80 145 L55 120"
                                            fill="#2D3436"
                                            stroke="#292926"
                                            strokeWidth="3"
                                        />

                                        {/* Règle/guide agrandi */}
                                        <rect
                                            x="90"
                                            y="115"
                                            width="75"
                                            height="12"
                                            transform="rotate(-45 90 115)"
                                            fill="#636E72"
                                        />

                                        {/* Points de connexion agrandis */}
                                        <circle cx="95" cy="80" r="4" fill="#292926" />
                                        <circle cx="120" cy="105" r="4" fill="#292926" />

                                        {/* Symbole artistique agrandi */}
                                        <path
                                            d="M120 140 Q 135 125, 150 140 T 175 140"
                                            fill="none"
                                            stroke="#292926"
                                            strokeWidth="4"
                                        />
                                    </svg>
                                    <h3 className="md:text-xl text-lg font-bold mb-2 capitalize">Conception Graphique ( Design Graphic ) {/* Orientées conversion */}</h3>
                                    <p className='text-base text-gray-300 text-thin'>Donnez vie à vos idées avec des visuels uniques et professionnels. Logos, bannières, ou contenu créatif, chaque design reflète votre identité.</p>
                                </div>
                            </div>


                        </div>

                        <div className='text-center mt-8 flex justify-center gap-14'>
                            <a href="https://calendly.com/emmanueljeanmiessan/30min" className="inline-block text-whitepattern px-6 py-3 rounded linear-gradient-bouton  lg:mt-4  font-bold  ">
                                <span className='relative z-10'>
                                    Réserver un appel gratuit
                                </span></a>
                            <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border lg:mt-4  font-bold md:flex items-center justify-center leading-0 ">
                                <Link href={route('services')} className="inline-block text-whitepattern px-6 py-3 rounded bg-body  relative z-10  font-bold ">
                                    <span className='inline-block bg-gradient-to-r from-white to-body bg-clip-text text-transparent '>
                                        Voir tous les services
                                    </span>
                                </Link>
                            </div>



                        </div>
                    </div>


                </section>


                {/* REALISATIONS */}
                <section className={' ' + marginSection}>
                    <div className="overflow-hidden py-3 ">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <TitleSection title="Mes Réalisations" />
                            <div className="title-feature max-w-2xl mb-7">
                                <h3 className="text-base font-bold leading-7  mb-2">Développement Web</h3>
                                {/* <h2 className={" !mb-2 bg-gradient-to-r from-white via-[#f2f1f1] to-[#585656] text-transparent bg-clip-text inline-block " + titleSection.join(' ')}> Mes Réalisations
                            </h2> */}
                                <p className=" text-base md:text-base/5  leading-8 text-gray-400">Découvrez mes projets web les plus récents, alliant créativité et performance. Que ce soit pour des sites vitrines ou des e-commerces, chaque réalisation est conçue sur-mesure pour répondre aux besoins de mes clients.
                                </p>
                            </div>

                            <div
                                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-3 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                <div className="lg:pr-8 ">
                                    <div className="lg:max-w-lg">

                                        <dl className=" max-w-xl space-y-3  leading-7  lg:max-w-none">



                                            {mesRealisation.map(({ id, content }, index) => (
                                                <div
                                                    key={id}
                                                    className={`relative  hover:bg-secondary hover:backdrop-blur-xl p-6 lg:rounded-l-xl lg:rounded-r-none hover:cursor-pointer box ${indexRealisation === id ? 'active-realisation' : ''}`}
                                                    onClickCapture={() => setIndexRealisation(id)}
                                                >
                                                    {content}
                                                </div>
                                            ))}


                                        </dl>
                                    </div>
                                </div >
                                <div>
                                    <div id="">

                                        <div className={" mt-10 w-[45rem]  rounded-xl  shadow-xl h-full shadow-primary/40 sm:w-auto lg:mt-0 " + (indexRealisation === 0 ? "block" : "hidden")}
                                            id="tableshow1">

                                            <img src="../img/equilibre drip capture.png"
                                                alt="Product screenshot"
                                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                                width="2432" height="1442" />
                                        </div>
                                        <div className={" mt-10 w-[45rem] overflow-hidden rounded-xl  shadow-xl h-full shadow-primary/40 sm:w-auto lg:mt-0 lg:w-[67.8125rem] scroll-auto " + (indexRealisation === 1 ? "block" : "hidden")}
                                            id="tableshow2">
                                            <img src="../img/capture jae.png"
                                                alt="capture jae"
                                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                                width="2432" height="1442" />
                                            {/* @include('components.pages.accueil.siteweb.index') */}
                                        </div>
                                        <div className={" mt-10 w-[45rem] overflow-hidden rounded-xl  shadow-xl h-full shadow-primary/40 sm:w-auto lg:mt-0 lg:w-[67.8125rem] scroll-auto " + (indexRealisation === 2 ? "block" : "hidden")}
                                            id="tableshow3">

                                            <img src="../img/capture echoscript.png"
                                                alt="echoscript screenshot"
                                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                                width="2432" height="1442" />
                                        </div>
                                        <div className={" mt-10 w-[45rem] overflow-hidden rounded-xl shadow-xl h-full shadow-primary/40 sm:w-auto lg:mt-0 lg:w-[67.8125rem] scroll-auto " + (indexRealisation === 3 ? "block" : "hidden")}
                                            id="tableshow4">

                                            <img src="../img/capture bang.png"
                                                alt="Bang Capture"
                                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                                width="2432" height="1442" />
                                        </div>
                                    </div>
                                </div>

                            </div >
                        </div >
                    </div >
                </section >

                {/* partenaires */}
                <section className={" text-center lg:text-start relative    my-24 lg:my-42 "}>


                    <TitleSection title="Ils m'ont fait confiance" />
                    <div className=' bg-secondary px-3 md:px-6 lg:px-6 py-3 md:py-14 lg:py-14'>
                        <div className=" mx-auto max-w-7xl flex justify-around items-center    ">
                            <div>
                                <img src="../img/partenaires/equilibre drip.png" alt="equilibre drip" className='size-14 md:size-16' />
                            </div>
                            <div>
                                <img src="../img/partenaires/ivoireonline.png" alt="equilibre drip" className='size-14 md:size-16' />

                            </div>
                            <div>
                                <img src="../img/partenaires/jae bn.png" alt="equilibre drip" className='size-14 md:size-16' />

                            </div>
                            {/* <div>
                        <img src="../img/partenaires/bic.png" alt="equilibre drip" className='size-14 md:size-24 ' />
                    </div>
                    <div className='hidden md:block'>
                        <img src="../img/partenaires/absdHG.png" alt="equilibre drip" className='size-14 md:size-24 ' />
                    </div> */}
                            <div className='hidden md:block'>
                                <img src="../img/partenaires/echoscript.png" alt="equilibre drip" className='size-14 md:size-16 ' />
                            </div>
                        </div>
                    </div>

                </section>

                {/*testimonials*/}
                <section id="testimonials" aria-label="What our customers are saying" className={"  relative " + marginSection}>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <TitleSection title="Témoignages" />

                        <div className="max-w-2xl ">

                            <h2 className={"font-bold !my-2 !text-base text-prymary " + titleSection.join(' ')}> Ce que mes collaborateurs pensent de moi
                            </h2>
                            <p className="md:text-lg/6 tracking-tight text-gray-400">
                            Ils m’ont fait confiance, découvrez leurs retours
                            </p>
                            <svg aria-hidden="true" width="135" height="100" className="absolute left-6 top-6 fill-[#FFF2]">
                                <path
                                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                </path>
                            </svg>
                        </div>


                        <ul role="list"
                            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                            <li>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    <li>
                                        <figure className="relative rounded-2xl  drop-secondary p-6 shadow-xl shadow-slate-900/10">

                                            <blockquote className="relative">
                                                <p className="text-base text-gray-300 tracking-tight ">Ce que j’aime chez Emmanuel, c’est sa créativité et son imagination.
                                                    Il est productif, et sait bien utiliser son talent pour le mettre au service des autres.
                                                    Il est talentueux.
                                                </p>
                                            </blockquote>
                                            <figcaption
                                                className="relative mt-6 flex items-center justify-between  border-t border- border-zinc-600 pt-6">
                                                <div>
                                                    <div className="font-display text-base font-medium ">Jean-Othniel Silué</div>
                                                    <div className="mt-1 text-sm text-primary">CEO de G-Capital LLC et MoneyPool</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-secondary"><img alt="Jos photo"
                                                    src="../img/temoignage/testimony jos.png" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="relative rounded-2xl  drop-secondary p-6 shadow-xl shadow-slate-900/10">
                                            <blockquote className="relative">
                                                <p className="text-base text-gray-300   tracking-tight ">Emmanuel fait un travail minutieux et se soucie de l’avis de ses clients.
                                                    Toujours prêt à servir et satisfaire les autres, il n’hésite pas à se documenter et à apprendre de nouvelles technologies pour offrir des services de qualité.
                                                </p>
                                            </blockquote>
                                            <figcaption
                                                className="relative mt-6 flex items-center justify-between  border-t border-zinc-600 pt-6">
                                                <div>
                                                    <div className="font-display text-base ">Koffi Yao</div>
                                                    <div className="mt-1 text-sm  text-primary">Expert en robotique et automatisation</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-secondary w-[50px] h-[50px]"><img alt=""
                                                    src="../img/temoignage/ky.png" />

                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    <li>
                                        <figure className="relative rounded-2xl  drop-secondary p-6 shadow-xl shadow-slate-900/10">
                                            <blockquote className="relative">
                                                <p className="text-base text-gray-300   tracking-tight ">
                                                    J’ai eu l’opportunité de voir Miessan Emmanuel en action, et je peux dire que ses performances dépassent largement les attentes. Sa maîtrise des outils et son souci du détail sont impressionnants. Que ce soit dans la création de sites web ou dans la gestion de projets, il démontre un professionnalisme et une efficacité remarquables. Je recommande ses services sans hésitation !

                                                </p>
                                            </blockquote>
                                            <figcaption
                                                className="relative mt-6 flex items-center justify-between  border-t border- border-zinc-600 pt-6">
                                                <div>
                                                    <div className="font-display text-base ">Samson Ahoua</div>
                                                    <div className="mt-1 text-sm  text-primary">Photographe</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-secondary"><img alt="Samson photo"
                                                    src="../img/temoignage/samson.png" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="relative rounded-2xl  drop-secondary p-6 shadow-xl shadow-slate-900/10">
                                            <blockquote className="relative">
                                                <p className="text-base text-gray-300  tracking-tight ">
                                                    Pour avoir travaillé avec lui, je peux dire que Miessan Emmanuel est talentueux, excellent et a le souci du détail. En plus d’allier technique et créativité, il est également très impliqué.
                                                </p>
                                            </blockquote>
                                            <figcaption
                                                className="relative mt-6 flex items-center justify-between  border-t border- border-zinc-600 pt-6">
                                                <div>
                                                    <div className="font-display text-base ">Pharès Kouadio</div>
                                                    <div className="mt-1 text-sm  text-primary">Directeur G-Tech</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-secondary">
                                                    <img alt="phares Kouadio photo"
                                                        src="../img/temoignage/phares.png" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    <li>
                                        <figure className="relative rounded-2xl  drop-secondary p-6 shadow-xl shadow-slate-900/10">
                                            <blockquote className="relative">
                                                <p className="text-base text-gray-300  tracking-tight ">
                                                J’ai suivi une formation avec Miessan Emmanuel et j’ai rapidement compris pourquoi il est reconnu dans son domaine. Il maîtrise parfaitement les outils et sait expliquer avec simplicité. Son approche est efficace et ça se voit qu’il sait de quoi il parle.


                                                </p>
                                            </blockquote>
                                            <figcaption
                                                className="relative mt-6 flex items-center justify-between  border-t border- border-zinc-600 pt-6">
                                                <div>
                                                    <div className="font-display text-base ">Eliel Ziaé</div>
                                                    <div className="mt-1 text-sm  text-primary">Membre de ma communauté</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-secondary"><img alt=""
                                                    src="../img/temoignage/elie.png" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="relative rounded-2xl  drop-secondary p-6 shadow-xl shadow-slate-900/10">
                                            <blockquote className="relative">
                                                <p className="text-base text-gray-300 tracking-tight ">
                                                    Miessan Emmanuel a su prouver sa créativité et son autonomie tout au long de nos projets. Il propose des solutions innovantes et les met en œuvre efficacement, sans nécessiter de supervision constante. Un vrai atout pour toute équipe !
                                                </p>
                                            </blockquote>
                                            <figcaption
                                                className="relative mt-6 flex items-center justify-between  border-t border- border-zinc-600 pt-6">
                                                <div>
                                                    <div className="font-display text-base ">Ange Akoumoua</div>
                                                    <div className="mt-1 text-sm  text-primary">Chef de projet chez Qavaa Group</div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-secondary"><img alt=""
                                                    src="../img/temoignage/pascale.png" />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={' ' + marginSection}>
                    <div className="overflow-hidden py-3 ">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <TitleSection title="Contactez-moi" />
                            <div className="title-feature  mb-7">

                            </div>
                            <div className='flex flex-wrap jus'>
                                <FormContact />
                            </div>

                        </div >
                    </div >
                </section >


                {/* </HorizontalWrapper > */}


                {/*  Stats =  */}
            </ReactLenis>

            <Footer />

        </>
    );
}
