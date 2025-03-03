import { Link, router } from '@inertiajs/react';
import { ReactLenis, useLenis } from 'lenis/react';

import '../../../../public/css/style.css';
import Footer from '../Footer';


const CreationSiteWeb = () => {

    return (
        <>
            <ReactLenis root options={{ autoRaf: true, lerp: 0.1, }} className='' >

                {/* <img src="../img/salon_lumiere.webp" alt="salon_lumière" className="absolute inset-0 -z-10"></img> */}
                <section className=" z-10 pt-14  mb-16" id="app-creation">
                    <div className="max-w-auto  px-5 lg:px-24">
                        <button type="button" onClick={() => router.get(route('services'))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-600 p-2 backdrop-blur-xl text-gray-100  border border-zinc-600 hover:border-none transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-hidden py-9 sm:py-20">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className=" mb-36">
                                <h1 className="uppercase text-center text-3xl lg:text-4xl font-bold  bg-gradient-to-r from-white  to-secondary text-transparent bg-clip-text ">Création de Site Web</h1>
                            </div>
                            <div
                                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-3 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                                <div className=" leading-8 text-justify gap-y-6 flex flex-col lg:pr-8">
                                    <h2 className='tracking-tight font-bold text-4xl text-primary'>Obtenez votre site web en quelques jours </h2>

                                    <div className=" grid lg:grid-cols-2 gap-x-6  grid-cols-1  ">
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, at laudantium aut non
                                            atque
                                            earum impedit suscipit fugit ipsum tempora doloremque adipisci veniam possimus, iure quo
                                            illo, eveniet excepturi fugiat?
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, at laudantium aut non
                                            atque
                                            earum impedit suscipit fugit ipsum tempora doloremque adipisci veniam possimus, iure quo
                                            illo, eveniet excepturi fugiat?

                                        </div>

                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in doloremque quis libero
                                        error vitae itaque id praesentium repellendus nostrum rem incidunt sed vero aspernatur
                                        aliquam,
                                        aperiam temporibus iure nihil?
                                        <span className='lg:block hidden'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores magni, nostrum veritatis tempora veniam cum ut. Minus rem doloremque reiciendis impedit velit quis molestias aliquid porro, enim quaerat quia unde.

                                        </span>
                                    </div>
                                </div>

                                <div className=" mt-10 w-[45rem]  rounded-xl  h-full sm:w-auto lg:mt-0  " id="tableshow1">

                                    <img src="../img/equilibre drip capture.png"
                                        alt="Product screenshot"
                                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                        width="2432" height="1442" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16  px-5 lg:px-26  ">

                    <div
                        className="border-x-1 border-slate-600  rounded-md backdrop-blur-lg bg-black/30 text-whiteviolet p-6 lg:py-6 lg:px-8  !w-full lg:max-w-6xl lg:mx-auto">

                        <div className="relative ">
                            <div className="absolute inset-y-0  -z-10 transform-gpu overflow- blur-3xl " aria-hidden="true">
                                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[16.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary opacity-30 "
                                    style={{ clipPath: "circle(50% at 50% 50%);" }}>
                                </div>
                            </div>
                            <div className="text-center text-sm mb-8 capitalize relative">
                                <h2 className="text-primary inline-block rounded font-bold tracking-tight px-3 py-2 ring-1 ring-primary/40 relative">Catégories

                                    <div className=" absolute top-[22px] left-[50%] -translate-x-[50%] flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-9 h-9 fill-primary/40 text-gray-800"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 16l-6-6h12l-6 6z" />
                                        </svg>

                                    </div>
                                </h2>

                            </div>
                            <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-y-8 grid-cols-1  bottom-[-80px] mx-auto text-white">
                                <div className=" px-6 pb-6 pt-14 border-r border-b border-primary/30 rounded-md  bg-secondary ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                    </svg>

                                    <h3 className="text-xl font-bold mb-4 text-gray-100 ">Boutique E-commerce </h3>
                                    <p className="text-gray-300">Créez une boutique en ligne  pour vendre vos produits facilement et atteindre une clientèle mondiale.</p>

                                </div>
                                <div className=" px-6 pb-6 pt-14 border-r border-b border-primary/30 rounded-md  bg-secondary ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                    </svg>

                                    <h3 className="text-xl font-bold mb-4 text-gray-100 ">Site Vitrine </h3>
                                    <p className=" text-gray-300">Présentez votre entreprise, vos services ou vos produits avec un site vitrine élégant et captivant.</p>

                                </div>

                                <div className=" px-6 pb-6 pt-14 border-r border-b border-primary/30 rounded-md  bg-secondary ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                                    </svg>

                                    <h3 className="text-xl font-bold mb-4 text-gray-100 ">Sass (App Web) </h3>
                                    <p className=" text-gray-300">Développez une application web performante pour offrir des services innovants à vos utilisateurs.</p>

                                </div>


                            </div>



                        </div>

                    </div>


                </section>

                <section className="mx-auto mt-8 mb-16 py-8   px-3 lg:px-0 text-center lg:text-start relative ">
                    {/*   <div className="absolute left-0 top-[-10rem] -z-50 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-600 to-teal-600 opacity-30 "
                            style={{ clipPath: "polygon(2% 0, 49% 100%, 100% 100%)" }}>
                        </div>

                    </div>
                    <div className="absolute right-0 top-[-10rem] -z-50 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-600 to-teal-600 opacity-30  "
                            style={{ clipPath: "polygon(100% 0, 49% 100%, 0 100%);" }}>
                        </div>
                    </div> */}
                    <div className="text-center text-sm mb-8 capitalize relative">
                        <h2 className="text-primary inline-block rounded font-bold tracking-tight px-3 py-2 ring-1 ring-primary/40 relative">Technologies

                            <div className=" absolute top-[22px] left-[50%] -translate-x-[50%] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-9 h-9 fill-primary/40 text-gray-800"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 16l-6-6h12l-6 6z" />
                                </svg>

                            </div>
                        </h2>

                    </div>
                    <div className="container mx-auto flex justify-around  py-8 lg:py-15    ">
                        <div>
                            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class=" !mb-0  uwu-hidden text-brand  w-[45px] lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                            <p className=" font-bold tracking-tight text-xs md:text-sm lg:text-lg text-center">React Js</p>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%" height="100%"
                                viewBox="0 0 49.65 51.12"
                                className="icon  w-[45px] lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"

                            >
                                <defs>
                                    <style>
                                        {".cls-1{fill:#fff;fill-rule:evenodd;}"}
                                    </style>
                                </defs>
                                <g id="Calque_2" data-name="Calque 2">
                                    <g id="Calque_1-2" data-name="Calque 1">
                                        <path
                                            className="cls-1"
                                            d="M49.63,11.56a1.49,1.49,0,0,1,0,.21v11a.8.8,0,0,1-.4.7L40,28.74V39.25a.78.78,0,0,1-.4.69L20.42,51l-.14.06-.05,0a.72.72,0,0,1-.41,0l-.07,0L19.62,51,.4,39.94a.78.78,0,0,1-.4-.69V6.33a.76.76,0,0,1,0-.21s0,0,0-.06a.5.5,0,0,1,.05-.13l.05-.07.07-.09.08-.06L.4,5.64h0L10,.11a.77.77,0,0,1,.8,0l9.61,5.53h0l.09.07.08.06.07.09.06.07s0,.08.05.13,0,0,0,.06a1.49,1.49,0,0,1,0,.21V26.89l8-4.61V11.77a.76.76,0,0,1,0-.21l0-.06a.5.5,0,0,1,.05-.13l0-.07.08-.09s.05,0,.07-.06l.09-.07h0l9.61-5.53a.77.77,0,0,1,.8,0l9.61,5.53a.31.31,0,0,1,.09.07.24.24,0,0,1,.08.06l.07.09.06.07s0,.08.05.13ZM48.05,22.28V13.16l-3.36,1.93L40,17.77v9.12l8-4.61ZM38.44,38.79V29.66l-4.57,2.61-13,7.44v9.22ZM1.6,7.72V38.79L19.22,48.93V39.72L10,34.51h0l-.09-.06-.07-.06h0l-.06-.09s0,0-.06-.08h0a.42.42,0,0,1,0-.1.36.36,0,0,1,0-.09h0s0-.08,0-.12,0-.06,0-.09h0V12.33L5,9.65,1.6,7.72Zm8.81-6-8,4.61,8,4.61,8-4.61-8-4.61Zm4.17,28.77,4.64-2.68V7.72L15.86,9.65l-4.65,2.68v20.1ZM39.24,7.16l-8,4.61,8,4.61,8-4.61Zm-.8,10.61L33.8,15.09l-3.37-1.93v9.12L35.08,25l3.36,1.93ZM20,38.33l11.74-6.7,5.87-3.35-8-4.61L20.42,29,12,33.81Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <p className=" font-bold tracking-tight text-xs md:text-sm lg:text-lg text-center ">Laravel</p>
                        </div>
                        <div>

                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" className='w-[45px] lg:w-28'><defs><style>{".cls-1{fill:#fff;}"}</style></defs><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-1" d="M13.5.81a12.7,12.7,0,1,1-4.93,1A12.69,12.69,0,0,1,13.5.81Zm0-.81A13.5,13.5,0,1,0,27,13.5,13.51,13.51,0,0,0,13.5,0Z" /><path class="cls-1" d="M2.25,13.5A11.22,11.22,0,0,0,8.6,23.62L3.23,8.92A11.16,11.16,0,0,0,2.25,13.5Zm18.85-.57a5.9,5.9,0,0,0-.93-3.1A6.06,6.06,0,0,1,19.06,7.2,2,2,0,0,1,21,5.2h.15a11.23,11.23,0,0,0-15.89.7A11.77,11.77,0,0,0,4.1,7.32h.73c1.18,0,3-.15,3-.15a.47.47,0,0,1,.07.93s-.61.07-1.28.11L10.71,20.4,13.16,13l-1.75-4.8c-.61,0-1.18-.11-1.18-.11a.47.47,0,0,1,.07-.93s1.86.15,3,.15,3-.15,3-.15a.47.47,0,0,1,.07.93s-.61.07-1.28.11L19.1,20.3l1.16-3.67a12.83,12.83,0,0,0,.83-3.71Zm-7.41,1.54-3.38,9.82a11.36,11.36,0,0,0,6.92-.18L17.15,24ZM23.37,8.1a8.92,8.92,0,0,1,.08,1.16,10.7,10.7,0,0,1-.85,4l-3.44,9.94A11.25,11.25,0,0,0,23.37,8.1Z" /></g></g></svg>

                            <p className=" font-bold tracking-tight text-xs md:text-sm lg:text-lg text-center">Wordpress</p>
                        </div>


                    </div>
                    <div className=" mt-16 flex flex-1 justify-center items-center">
                        <div className="text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold flex items-center justify-center leading-0 group ">
                            <a href="https://calendly.com/emmanueljeanmiessan/30min" className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 ">
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Réserver un appel <span ariaHidden="true">&rarr;</span>
                                </span>
                            </a>

                        </div>
                    </div>
                </section>


                <Footer />
            </ReactLenis>
        </>
    );
}

export default CreationSiteWeb;
