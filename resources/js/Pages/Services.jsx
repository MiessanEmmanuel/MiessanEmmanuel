import { Head, Link } from "@inertiajs/react";
import '../../../public/css/style.css';
import Header from "@/Layouts/Header";
import Footer from "./Footer";
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from "react";
import TitleSection from "@/Components/TitleSection";



const Services = () => {
    const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });
    const cardRef = useRef(null);





    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setMousePosition({ x, y });
    };


    return (
        <>
            <Head title="Contact" />
            <Header />
            <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >



                <div className="my-20 lg:my-24">
                    <h1 className="font-bold text-center text-4xl lg:text-5xl tracking-tight ">Mes Services</h1>
                </div>

                {/* <section className=" grid grid-cols-2 w-[80%] mx-auto">
                <div className="  mx-auto py-[1.9rem] linear-gradient backdrop-xl rounded-xl ring-1 ring-gray-800  px-12 text-center relative ">
                    <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 absolute top-4 right-4">Le plus populaire</span>

                    <h2 className="text-2xl flex-1 tracking-tight font-bold mb-2">Création De Site Web</h2>
                    <p className="mb-3  flex-1 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, reiciendis quaerat. Sunt non beatae facere vel fugiat id incidunt consequuntur. Similique corrupti quod vitae optio quia fugit deleniti consequatur modi!</p>
                    <Link href={route('webcreation')} className="  mt-3 flex-1 inline-block text-white ring-1 ring-white py-3 px-5 text-blackviolet rounded-lg capitalize">Voir l'offre</Link>
                </div>

                <div className="service-card !bg-black/30 backdrop-xl rounded-xl ring-1 ring-gray-800  pt-4 px-12 text-center">
                    <h2 className="capitalize font-medium">Accompagnement Facebook Ads</h2>
                    <p>Integrate WooCommerce into your site for seamless online transactions.</p>
                    <button className="text-whiteviolet py-3 px-5  rounded-lg">Bientôt disponible</button>

                </div>

                <div className="service-card !bg-black/30 backdrop-xl rounded-xl ring-1 ring-gray-800  pt-4 px-12 text-center">
                    <h2 className="capitalize font-medium">Création de page de vente</h2>
                    <p>Optimize your site for search engines to improve visibility and traffic.</p>
                    <button className="text-whiteviolet py-3 px-5  rounded-lg">Bientôt disponible</button>

                </div>
                <div className="service-card !bg-black/30 backdrop-xl rounded-xl ring-1 ring-gray-800  pt-4 px-12 text-center">
                    <h2 className="capitalize font-medium">Design Graphique </h2>
                    <p>Optimize your site for search engines to improve visibility and traffic.</p>
                    <button className="text-whiteviolet py-3 px-5  rounded-lg">Bientôt disponible</button>
                </div>
            </section> */}
                <div className="my-12 lg:mt-16 lg:mb-32  px-6 sm:px-16 md:px-20 lg:px-0 lg:max-w-[88%] relative   lg:mx-auto">
                    <div className="text-center">

                        <div className="lg:max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-x-8 gap-y-8  my-4  ">

                            <div className="py-6 px-4 ring-1 ring-primary/40  rounded-xl bg-black/30 backdrop-blur-xl w-full overflow-hidden group"

                            >


                                <div className="text-center">
                                    <span className="ring-1 ring-primary mx-auto text-center font-bold tracking-tight px-5 py-2 rounded text-primary text-sm font-sans ">
                                        Création De Site Web
                                    </span>
                                </div>
                                <div className="text-lg my-8 text-center font-bold text-gray-400">
                                    Transformez vos idées en réalité digitale avec un site web sur mesure, performant et attrayant.

                                </div>
                                <div className="">
                                    <Link href={route('webcreation')} className="   flex-1 inline-block text-white ring-1 ring-white py-3 px-5 text-blackviolet rounded-lg capitalize hover:ring-primary hover:text-primary transition">Voir l'offre <span aria-hidden="true">&rarr;</span></Link>
                                </div>

                            </div>
                            <div className=" py-6 px-4 ring-1 ring-gray-600 rounded-xl bg-black/30 backdrop-blur-xl w-full  hover-effect">
                                <div className="text-center">
                                    <span className="ring-1 ring-primary mx-auto text-center font-bold tracking-tight px-5 py-2 rounded text-primary text-sm font-sans ">
                                        Accompagnement Facebook Ads
                                    </span>

                                </div>
                                <div className="text-lg my-8 text-center font-bold text-gray-400 ">
                                    Boostez votre visibilité et générez des ventes grâce à des campagnes publicitaires optimisées sur Facebook.

                                </div>
                                <div className="">
                                    <Link href={route('accompfacebookads')} className="   flex-1 inline-block text-white ring-1 ring-white py-3 px-5 text-blackviolet rounded-lg capitalize hover:ring-primary hover:text-primary transition">Voir l'offre <span aria-hidden="true">&rarr;</span></Link>
                                </div>


                            </div>
                            <div className=" py-6 px-4 ring-1 ring-gray-600 rounded-xl bg-black/30 backdrop-blur-xl w-full hover-effect">
                                <div className="text-center">
                                    <span className="ring-1 ring-primary mx-auto text-center font-bold tracking-tight px-5 py-2 rounded text-primary text-sm font-sans ">
                                        Création de page de vente
                                    </span>

                                </div>
                                <div className="text-lg my-8 text-center font-bold text-gray-400">
                                    Augmentez vos conversions avec une page de vente captivante et conçue pour engager vos visiteurs.

                                </div>
                                <div className="">
                                    <Link href={route('pagedevente')} className="   flex-1 inline-block text-white ring-1 ring-white py-3 px-5 text-blackviolet rounded-lg capitalize hover:ring-primary hover:text-primary transition">Voir l'offre <span aria-hidden="true">&rarr;</span></Link>
                                </div>

                            </div>
                            <div className=" py-6 px-4 ring-1 ring-gray-600 rounded-xl bg-black/30 backdrop-blur-xl w-full  hover-effect">
                                <div className="text-center">
                                    <span className="ring-1 ring-primary mx-auto text-center font-bold tracking-tight px-5 py-2 rounded text-primary text-sm font-sans ">
                                        Design Graphique
                                    </span>

                                </div>
                                <div className="text-lg my-8 text-center font-bold text-gray-400 ">
                                    Apportez une identité visuelle unique et mémorable à votre marque avec des designs de qualité.

                                </div>

                                <div className="">
                                    <Link href={route('designcreation')} className="   flex-1 inline-block text-white ring-1 ring-white py-3 px-5 text-blackviolet rounded-lg capitalize hover:ring-primary hover:text-primary transition">Voir l'offre <span aria-hidden="true">&rarr;</span></Link>
                                </div>
                            </div>

                        </div>

                        <div className="  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border lg:mt-14  font-bold md:inline-flex items-center justify-center leading-0 ">
                            <a href="https://calendly.com/emmanueljeanmiessan/30min" className="inline-block text-whitepattern px-6 py-3 rounded bg-body  relative z-10  font-bold ">
                                <span className='inline-block bg-gradient-to-r from-white to-body bg-clip-text text-transparent '>
                                    Discuter de votre Business
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <section className="cta-final text-center bg-secondary py-8">
                    <div>
                        <img src="../img/goal.png" alt="oups" className="w-[190px] mx-auto" />
                    </div>
                    <h2 className="font-bold mt-4 mb-7 tracking-tight ">Prêt à Créer votre site web ?</h2>
                    <a href="https://calendly.com/emmanueljeanmiessan/30min" className="bg-primary inline-block ring-1 ring-primary hover:bg-green-700 py-4 px-6 rounded-lg text-white capitalize animate-bounce font-bold">Commencez dès aujourd'hui</a>
                </section>

                <section className=" mt-6 mb-24">
                    <h2 className="text-center text-4xl  my-20 lg:my-24 font-bold ">Pourquoi me choisir ?</h2>
                    {/*  <TitleSection title={"Pourquoi me choisir ?"} /> */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-9 mx-auto w-[80%] ">
                        <div className="stat-box !bg-black/30 backdrop-xl rounded-xl ring-1 ring-primary/40   py-5 px-12 text-center transition">
                            <h3>7+</h3>
                            <p className="text-gray-500">Projets Terminés</p>

                        </div>
                        <div className="stat-box !bg-black/30 backdrop-xl rounded-xl ring-1 ring-primary/40  py-5 px-12 text-center transition">
                            <h3>98%</h3>
                            <p className="text-gray-500">Clients Satisfaits</p>
                        </div>
                        <div className="stat-box !bg-black/30 backdrop-xl rounded-xl ring-1 ring-primary/40   py-5 px-12 text-center transition duration  ">

                            <h3>24/7</h3>
                            <p className="text-gray-500">Service Client</p>


                        </div>

                    </div>
                </section >

            </ReactLenis >


            <Footer />
        </>
    );


}

export default Services
