import ApplicationLogo from '@/Components/ApplicationLogo';
import { useGSAP } from '@gsap/react';
import { Field, Label, Switch } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer({ }) {
    const { url } = usePage();
    //active
    const isActive = (path) => url === path;
    const footer = useRef();
    const rectangle1 = useRef();
    const cercle = useRef();

    useGSAP(
        () => {
            gsap.to(cercle.current, {
                duration: 1,
                y: -30,
                ease: 'power2.inOut',
                fill: "yellow",
                delay: 0.5,
                scrollTrigger: {
                    trigger: footer.current,
                    scrub: true,
                    stagger: 3,

                }
            });
        }
    )
    useGSAP(
        () => {
            gsap.from(rectangle1.current, {
                duration: 1,
                width: 130,
                height: 30,
                fill: "red",
                ease: 'power2.inOut',
                delay: 0.5,
                scrollTrigger: {
                    trigger: footer.current,

                    color: '#fff',

                }
            });
        }
    )


    return (
        <>
            <footer className="relative pb-8 pt-16 border-t border-gray-700 bg-secondary">
                <div className='px-8 container mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                        {/* Colonne 1: Logo et Présentation Courte */}
                        <div className='flex flex-col items-start '>
                            <div className='flex items-center mb-4'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"
                                    className="w-20 h-20 mr-4"
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
                                    <rect x="35" y="60" width="90" height="50" rx="2" fill="#292629" ref={rectangle1} />
                                    <rect x="35" y="120" width="90" height="10" rx="2" fill="#37854d93" />
                                    <rect x="35" y="140" width="100" height="10" rx="2" fill="#292629" />

                                    {/* Symboles de code */}
                                    <text x="140" y="115" fontFamily="monospace" fontSize="24" fill="#ECF0F1">&lt;/&gt;</text>

                                    {/* Ligne verticale décorative */}
                                    <rect x="100" y="120" width="5" height="40" fill="#fff" />

                                    {/* Cercle décoratif */}
                                    <circle cx="160" cy="90" r="15" fill="#37854d" opacity="0.8" ref={cercle} />
                                </svg>
                                <h3 className='text-white font-bold text-xl'>Miessan Emmanuel</h3>
                            </div>
                            <p className='text-gray-400 text-sm'>
                                Votre partenaire expert en formation et services professionnels.
                                Je vous accompagne dans votre développement et votre réussite.
                            </p>
                        </div>

                        {/* Colonne 2: Services */}
                        <div className=''>
                            <h4 className='text-white font-semibold mb-4'>Mes Services</h4>
                            <ul className='space-y-2 '>
                                {/* Remplacez avec vos 4 services */}
                                <li>
                                    <Link
                                        href={route('webcreation')}
                                        className='text-gray-300 hover:text-primary transition duration-300'
                                    >
                                        Création de site web
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('accompfacebookads')}
                                        className='text-gray-300 hover:text-primary transition duration-300'
                                    >
                                        Accompagnement Facebook Ads
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('pagedevente')}
                                        className='text-gray-300 hover:text-primary transition duration-300'
                                    >
                                        Création de page de vente
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('designcreation')}
                                        className='text-gray-300 hover:text-primary transition duration-300'
                                    >
                                        Design Graphique
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Colonne 3: Contact Rapide */}
                        <div>
                            <h4 className='text-white font-semibold mb-4'>Contactez-moi</h4>
                            <div className='space-y-3'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-9a9 9 0 01-9 9m9-9a9 9 0 00-9 9" />
                                    </svg>
                                    <span className='text-gray-300'>contact@miessanemmanuel.com</span>
                                </div>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-9a9 9 0 01-9 9m9-9a9 9 0 00-9 9" />
                                    </svg>
                                    <span className='text-gray-300'>+225 07 10 92 17 83</span>
                                </div>
                            </div>

                            {/* Réseaux Sociaux */}
                            <div className='flex space-x-4 mt-4'>
                                <a href="https://instagram.com/votrepage" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-primary'>
                                    <img src="../img/instagramLogo_1.png" alt="Instagram" className='w-6 h-6' />
                                </a>
                                <a href="https://facebook.com/votrepage" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-primary'>
                                    <img src="../img/facebookLogo_1.png" alt="Facebook" className='w-6 h-6' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Ligne de Copyright */}
                    <div className='mt-8 pt-6 border-t border-gray-700 text-center'>
                        <p className='text-gray-400 text-sm'>
                            © {new Date().getFullYear()} <span className='text-primary'>Miessan Emmanuel</span> X <span className='text-primary'>HOLY GHOST</span> . Tous droits réservés.
                            <br />
                            <Link href={route('termsofuse')} className={'hover:text-primary ml-2 ' + (isActive('/termsofuse') ? "active" : " ")} >
                                Condition D'utilisation
                            </Link>
                            <Link href={route('privacypolicy')} className={'hover:text-primary ml-2 ' + (isActive('/privacypolicy') ? "active" : " ")} >
                                Politique de Confidentialité
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
