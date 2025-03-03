import Header from "@/Layouts/Header";
import { ReactLenis, useLenis } from 'lenis/react';
import { Head } from "@inertiajs/react";
import '../../../public/css/style.css';
import Footer from "./Footer";
import FormContact from "./ComponentPage/FormContact";


const Contact = () => {

    return (
        <>
            <Head title="Contact" />
            <Header />
            <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >

                <div className="my-20 lg:my-24">
                    <h1 className="font-bold text-center text-4xl lg:text-5xl tracking-tight ">Contact</h1>
                </div>
                <div className="  w-[88%] mx-auto flex lg:flex-row justify-between items-center gap-x-14 gap-y-4 flex-col mt-16 sm:mt-20 mb-16 ">
                    <div class="flex-1">

                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 400 300"
                                width="100%"
                                height="100%"
                                role="img"
                                aria-labelledby="contactIllustration"
                            >
                                <title id="contactIllustration">Illustration de contact</title>

                                {/* Enveloppe */}
                                <rect
                                    x="100"
                                    y="100"
                                    width="200"
                                    height="150"
                                    rx="10"
                                    fill="#f1f1f1"
                                    stroke="#d1d1d1"
                                    strokeWidth="2"
                                />

                                {/* Rabat de l'enveloppe */}
                                <polygon
                                    points="100,100 200,50 300,100"
                                    fill="#e0e0e0"
                                    stroke="#d1d1d1"
                                    strokeWidth="2"
                                />

                                {/* Lignes de texte */}
                                <line
                                    x1="120"
                                    y1="130"
                                    x2="280"
                                    y2="130"
                                    stroke="#bbb"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="120"
                                    y1="155"
                                    x2="280"
                                    y2="155"
                                    stroke="#bbb"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="120"
                                    y1="180"
                                    x2="250"
                                    y2="180"
                                    stroke="#bbb"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />

                                {/* Décorations */}
                                <circle cx="50" cy="50" r="8" fill="#ff5f5f" />
                                <circle cx="350" cy="50" r="8" fill="#57b8ff" />
                                <circle cx="50" cy="250" r="8" fill="#57ff91" />
                                <circle cx="350" cy="250" r="8" fill="#ffce57" />
                                {/* text */}

                                <text x="155" y="120" fontFamily="monospace" fontSize="10" fill="secondary" fontStyle="bold">Miessan Emmanuel</text>


                            </svg>
                        </div>
                        <div className="my-5 text-gray-400 tracking-tight text-center">
                            Je suis à votre écoute pour répondre à vos questions, discuter de vos projets ou simplement échanger. La communication est au cœur de mon engagement.
                        </div>
                        <div className="hidden grid-cols-2 lg:grid-cols-3 gap-6  justify-between leading-0 text-gray-400">



                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 200 200"
                                className={"size-9 w-[6em] h-[6em] mb-4"}
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

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 200 200"
                                className={"size-9 w-[5em] h-[5em] mb-4"}
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 200 200"

                                className={"size-9  w-[5em] h-[5em] mb-4"}
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




                        </div>


                    </div>
                    <FormContact />
                </div>
            </ReactLenis>

            <Footer />
        </>
    );
}

export default Contact;

