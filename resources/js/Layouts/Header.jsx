import ApplicationLogo from "@/Components/ApplicationLogo";
import { SlidePopup } from "@/Components/SlidePopup";
import { Link, usePage } from "@inertiajs/react";
import { PersonStanding, User } from "lucide-react";
import { useState } from "react";

const Header = ({  }) => {
    const { url } = usePage();
    const {auth} = usePage().props
    //active
    const isActive = (path) => url === path;

    const [showMenuMobile, setShowMenuMobile] = useState(false);


    return (
        <header className="relative z-50" id="">
            <div className="container  z-50    mx-auto" id="main-header">
                <nav className="flex items-center justify-between p-6
     lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href={route('accueil')} className="-m-1.5 p-1.5">
                            <span className="sr-only">GEEK</span>
                            <ApplicationLogo />
                        </Link>
                    </div>
                    <div className={"flex lg:hidden  items-center gap-3"}>
                        <Link className="bg-primary hover:bg-green-500 self-stretch px-3 flex items-center rounded" href={route('dashboard')}>
                            <User />
                        </Link>
                        <button type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
                            id="mobile-menu-toggle" onClick={showMenuMobile ? () => { setShowMenuMobile(false) } : () => { setShowMenuMobile(true) }}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link href={route('accueil')}
                            className={"text-sm font-semibold leading-6 item-menu  " + (isActive('/') ? "active" : " ")}>Accueil</Link>
                        <Link href={route('services')}
                            className={"text-sm font-semibold leading-6 item-menu  text-white-900  " + (isActive('/services') ? "active" : " ")} >
                            Services</Link>
                        <Link href={route('formation')}
                            className={"text-sm font-semibold leading-6 item-menu  text-white-900  " + (isActive('/formation') ? "active" : " ")}>Formations</Link>
                        <Link href={route('contact')}
                            className={"text-sm font-semibold leading-6 item-menu  text-white-900 " + (isActive('/contact') ? "active" : " ")}>Contact</Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
                        {
                            auth.user && (<Link className="bg-primary hover:bg-green-500 self-stretch px-3 flex items-center rounded" href={route('dashboard')}>
                                <User />
                            </Link>)
                        }

                        <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">
                            <a href="https://calendly.com/emmanueljeanmiessan/30min" className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 ">
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Réserver un appel <span ariaHidden="true">&rarr;</span>
                                </span>
                            </a>

                        </div>
                    </div>



                </nav>
                {/*  <!-- Mobile menu, show / hide based on menu open state. -- > */}

                <SlidePopup show={showMenuMobile} closeable={true} onClose={setShowMenuMobile} maxWidth={'lg'} >
                    <div className="px-1 py-6">
                        <div className="flex items-center justify-between">
                            <Link href={route('accueil')} className="-m-1.5 p-1.5">
                                {/*  <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="" /> */}
                                geek
                            </Link>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-white-700" id="closemenu" onClick={() => { setShowMenuMobile(false) }}>
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root ">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link href={route('accueil')}
                                        className={"block item-menu  px-3 py-2 font-semibold leading-7 text-white-900 " + (isActive('/') ? "active" : " ")}>Accueil</Link>
                                    <Link href={route('formation')}
                                        className={"block  item-menu px-3 py-2 font-semibold leading-7 text-white-900 " + (isActive('/formation') ? "active" : " ")}>Formations</Link>
                                    <Link href={route('services')}
                                        className={"block item-menu  px-3 py-2  font-semibold leading-7 text-white-900 " + (isActive('/services') ? "active" : " ")}>Nos
                                        Services</Link>
                                    {/*   {{-- < a href="{{ route('pricing') }}"
     className="block px-3 py-2 text-base font-semibold leading-7 text-white-900 {{ request()-> routeIs('pricing') ? 'active' : ''}}">Tarification</a> --}} */}
                                    <Link href={route('contact')}
                                        className={"block item-menu  px-3 py-2  font-semibold leading-7 text-white-900 " + (isActive('/contact') ? "active" : " ")}>Contact</Link>
                                </div>


                                <div className="   text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">
                                    <a href="https://calendly.com/emmanueljeanmiessan/30min" className="inline-block text-whitepattern px-6 py-3 rounded linear-gradient   font-bold relative z-10 ">
                                        <span className='inline-block  whitespace-nowrap transition '>
                                            Réserver un appel <span aria-hidden="true">&rarr;</span>
                                        </span>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>


                </SlidePopup>

            </div >

        </header >

    );
}

export default Header
