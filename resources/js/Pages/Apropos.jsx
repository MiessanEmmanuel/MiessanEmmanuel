import Header from "@/Layouts/Header";
import { Head, Link } from "@inertiajs/react";
import '../../../public/css/style.css';
//import useRef
import { useRef } from 'react';
import Footer from "./Footer";
import { ReactLenis, useLenis } from 'lenis/react';



const Apropos = () => {
    const { ud } = useRef(null);

    return (
        <>
            <Head title="A-propos" />
          {/*   <Header /> */}
            <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >

                <section className="absolute top-0 inset-x-0 ">
                    <div className="w-full mb-[3em] lg:mb-[7em] relative before:content[' '] before:absolute before:inset-0 before:bg-body/50 before:overflow-hidden">

                        {/* <img src="../img/banniere me with photo mobile and tablet.png" alt="banniere" className="block lg:hidden w-full " />*/}
                        <img src="../img/banniere laptop me.jpeg" alt="banniere" className="md:block hidden w-full " />
                        <img src="../img/Dev web me.png" alt="" className="block md:hidden w-full" />
                        <div className=" absolute  lg:-bottom-[6rem] -bottom-[3rem] left-[2rem] lg:left-[5rem] ">
                            <div className=" linear-gradient-border rounded-full  bg-orange-500 px-[4px] !py-[4px] ">
                                <img src="../img/moi.png" alt="oups" className="lg:w-[13rem] lg:h-[13rem] w-[7rem] h-[7rem] rounded-full relative z-10" />

                            </div>
                        </div>
                    </div>


                    <div className=" lg:mt-6 lg:mb-1 px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%]  lg:mx-auto">
                        <h2 className="font-bold text-2xl lg:text-3xl mb-1 tracking-tight"> Miessan Emmanuel (GEEK)</h2>
                        <p className="text-sm lg:text-base text-gray-400 leading-7 max-w-7xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat veniam amet itaque exercitationem saepe labore debitis ut.</p>
                    </div>

                    <div className="flex gap-x-6 my-2 lg:my-0  px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%]  lg:mx-auto">
                        <div className="text-xl  lg:text-2xl font-bold  bg-gradient-to-r from-white  to-white text-gray-300 bg-clip-text">
                            <span className="text-sm " > </span>4 Ans EXP
                        </div>

                        {/* <div className="text-xl lg:text-2xl font-bold  bg-gradient-to-r from-secondary  to-white text-gray-300 bg-clip-text">
                            600K <span ></span>
                        </div> */}
                        {/* <div className="text-xl lg:text-3xl font-bold  bg-gradient-to-r from-white via-whiteviolet to-normalviolet text-transparent bg-clip-text">
                        600K <span >$</span>generé
                    </div> */}
                    </div>

                    <div className=" lg:flex items-center gap-x-6 my-5 lg:my-6  px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%]  lg:mx-auto">
                        <Link href={route('prendrecontact')} className="w-full lg:max-w-sm text-center inline-block text-white px-6 py-3 rounded    capitalize linear-gradient"><img src="../img/discuter icon.png" alt="oups" className="inline-block mx-1 size-7" /> Discuter  </Link>
                        <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold lg:flex items-center justify-center leading-0 ">
                            <Link href={route('prendrecontact')} className="inline-block text-whitepattern px-6 py-3 rounded bg-body  relative z-10  font-bold ">
                                <span className='inline-block bg-gradient-to-r from-white to-body bg-clip-text text-transparent '>
                                    Voir les services
                                </span>
                            </Link>
                        </div>

                    </div>

                    {/* competences */}
                    <div className=" my-12 lg:mt-16 lg:mb-10  px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%] relative   lg:mx-auto">
                        <div className=" absolute  inset-y-0  -z-10 transform-gpu blur-2xl lg:blur-3xl  " aria-hidden="true">
                            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] md:max-w-none max-w-xs -translate-x-1/2 rotate-[50deg] lg:rotate-[150deg] bg-gradient-to-tr from-[#e0aaff] to-[#e0aaff] opacity-30 "
                                style={{ clipPath: "polygon(2% 0, 49% 100%, 100% 100%)" }}>
                            </div>
                        </div>
                        <h2 className="lg:text-4xl text-2xl  text-center lg:text-start font-bold mb-8 whitespace-nowrap ">Domaines de compétences</h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-between leading-0 text-gray-400">

                            <div className="bg-black/30 backdrop-xl rounded-xl ring-1 ring-gray-800  pt-4 px-12 text-center">
                                <div className="icon-svg">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 200 200"

                                        className={"size-9 w-12 h-12  mx-auto"}
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
                                <div className="py-3 font-bold tracking-tight">
                                    Design Graphic
                                </div>
                            </div>

                            <div className="bg-black/30 backdrop-xl  ring-1 ring-gray-800 rounded-xl  pt-4 px-12 text-center">
                                <div className="icon-svg">
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 200 200"
                                        className={"size-9 w-12 h-12 mx-auto"}
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
                                </div>
                                <div className="py-3 font-bold tracking-tight">
                                    Code
                                </div>
                            </div>
                            <div className="bg-black/30 backdrop-xl ring-1 ring-gray-800 rounded-xl  pt-4 px-12 text-center">
                                <div className="icon-svg ">
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 200 200"
                                        className={"size-9 w-12 h-12 mx-auto"}
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
                                </div>
                                <div className="py-3 font-bold tracking-tight">
                                    No Code
                                </div>
                            </div>
                            <div className="bg-black/30 ring-1 ring-gray-800  rounded-xl  pt-4 px-12 text-center">
                                <div className="icon-svg">
                                    <img src="../img/icons_services/NO-CODE.png" alt="" className=" w-[50px]   mx-auto" />

                                </div>
                                <div className="py-3 font-bold tracking-tight">
                                    Marketing Digital
                                </div>
                            </div>

                        </div>
                    </div>



                    {/*  <GlassmorphismCard >

                </GlassmorphismCard> */}

                    <div className="mt-12  lg:mt-16 lg:mb-10  px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%] relative   lg:mx-auto">
                        <h2 className="lg:text-4xl text-2xl  text-center lg:text-start font-bold mb-8 whitespace-nowrap ">En savoir plus sur moi</h2>

                        <div className=" mx-auto flex lg:flex-row justify-between items-center gap-x-6 gap-y-4 flex-col-reverse my-4 ">
                            <div className=" py-6 px-4 ring-1 ring-gray-600 rounded-xl bg-black/30 backdrop-blur-xl w-full lg:w-1/2 hover-effect">
                                <h3 className="text-2xl font-bold text-teal-700">Lorem, ipsum dolor.</h3>
                                <p className=" leading-8 tracking-tight py-4 px-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iusto ipsam possimus quod aspernatur non commodi voluptas aliquam perferendis aperiam vero distinctio, quo tenetur quas nemo cumque! Debitis, commodi praesentium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste: <br />
                                    <ul className="font-bold text-sm leading-9" >
                                        <li className="flex items-center gap-x-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-500 font-bold stroke-2 stroke-whiteviolet">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                        </svg>
                                            Lorem ipsum dolor sit amet consectetur.
                                        </li>
                                        <li className="flex items-center gap-x-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-500 font-bold stroke-2 stroke-whiteviolet">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                        </svg>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure!
                                        </li>
                                        <li className="flex items-center gap-x-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-500 font-bold stroke-2 stroke-whiteviolet">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                        </svg>
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                        </li>
                                    </ul>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nobis possimus, voluptate, autem, saepe numquam eligendi tempore obcaecati.
                                </p>

                                <Link href={route('prendrecontact')} className="block  w-full text-center inline-block text-teal-600 px-6 py-3 rounded boutton-inverse capitalize my-5 "> Voir les services </Link>


                            </div>
                            <div className="py-6 px-4  w-full lg:w-1/2 hover-effect">
                                <img src="https://placehold.co/700x600/e0aaff/10002b" alt="oups" className="rounded-xl mx-auto ring-1 ring-gray-600" />
                            </div>




                        </div>

                    </div>







                    <div className="my-12 lg:mt-16 lg:mb-32  px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%] relative   lg:mx-auto">
                        <div className="text-center">
                            <h2 className="lg:text-4xl text-2xl  text-center lg:text-start lg:mb-[40px]"> Lorem, ipsum .</h2>
                            <div className="lg:max-w-5xl mx-auto flex lg:flex-row justify-between items-center gap-x-6 gap-y-4 flex-col my-4 ">
                                <div className="glassmorphism-card py-6 px-4 ring-1 ring-gray-600 rounded-xl bg-black/30 backdrop-blur-xl w-full lg:w-1/2 hover-effect">
                                    <div className="text-center">
                                        <span className="ring-1 ring-gray-800 mx-auto text-center font-bold tracking-tight px-5 py-2 rounded text-gray-300 text-sm font-sans ">
                                            Ce que j'ai fait
                                        </span>
                                    </div>
                                    <div className="text-9xl my-8 text-center font-bold text-whiteviolet">
                                        45 <span>K</span>
                                        <div className="text-lg">
                                            Lorem, ipsum
                                        </div>
                                    </div>

                                </div>
                                <div className="glassmorphism-card py-6 px-4 ring-1 ring-gray-600 rounded-xl bg-black/30 backdrop-blur-xl w-full lg:w-1/2 hover-effect">
                                    <div className="text-center">
                                        <span className="ring-1 ring-gray-800 mx-auto text-center font-bold tracking-tight px-5 py-2 rounded text-gray-300 text-sm font-sans ">
                                            Ce que j'ai fait
                                        </span>

                                    </div>
                                    <div className="text-9xl my-8 text-center font-bold text-whiteviolet ">
                                        45 <span>K</span>
                                        <div className="text-lg">
                                            Lorem, ipsum
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <Link href={route('prendrecontact')} className="w-full lg:max-w-sm mx-auto mt-7 text-center inline-block text-teal-600 px-6 py-3 rounded boutton   capitalize "><img src="../img/discuter icon.png" alt="oups" className="inline-block mx-1 size-7" /> Discuter de votre Business  </Link>

                        </div>
                    </div>



                    <Footer />


                </section>



            </ReactLenis>


        </>

    );
}


const GlassmorphismCard = () => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const { offsetX, offsetY } = e.nativeEvent;
        const { clientWidth, clientHeight } = card;

        // Calcul du déplacement relatif de la souris
        const moveX = ((offsetX / clientWidth) - 0.5) * 30;
        const moveY = ((offsetY / clientHeight) - 0.5) * 30;

        card.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    return (
        <div
            className="glassmorphism-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {/* Contenu du composant */}
        </div>
    );
};



export default Apropos




export { GlassmorphismCard }  //
