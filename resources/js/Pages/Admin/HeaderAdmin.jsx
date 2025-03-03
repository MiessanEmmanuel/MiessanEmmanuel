import React from 'react';
import { Home, Settings, User, ShoppingCart, Database, HomeIcon, Contact, School } from 'lucide-react';
import { Link } from '@inertiajs/react';

const HeaderAdmin = ({ children }) => {
    return (
        <div className='flex md:flex-row flex-col'>

            <div className="bg-secondary text-white md:h-screen w-full md:w-[40%] md:w-[30%] lg:w-[20%] p-6 border-r border-zinc-700 ">
                <div className="mb-4 md:mb-8">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div>
                <nav>
                    <ul className="space-x-4 md:space-y-8 md:space-x-0 flex items-center md:block">
                        <li>
                            <Link href={route('admin.dashboard')} className="flex items-center hover:text-green-500 transition">
                                <HomeIcon className="w-5 h-5 mr-3" />
                                Tableau de Bord
                            </Link>
                        </li>


                        {/*<li>
            <a href="#" className="flex items-center hover:text-green-500 transition">
              <User className="w-5 h-5 mr-3" />
              Utilisateurs
            </a>
          </li> */}
                        <li>
                            <Link href={route('admin.formation.index')} className="flex items-center hover:text-green-500 transition">
                                <Database className="w-5 h-5 mr-3" />
                                Formations
                            </Link>
                        </li>
                        <li>
                            <Link href={route('admin.categorie.index')} className="flex items-center hover:text-green-500 transition">
                                <Settings className="w-5 h-5 mr-3" />
                                Catégorie Formations
                            </Link>
                        </li>
                        <li>
                            <Link href={'/geeklefilsduDieutreshaut/admin/exercices'} className="flex items-center hover:text-green-500 transition">
                                <School className="w-5 h-5 mr-3" />
                                Exercices
                            </Link>
                        </li>
                        <li>
                            <Link href={route('admin.contacts.show')} className="flex items-center hover:text-green-500 transition">
                                <Contact className="w-5 h-5 mr-3" />
                                Contacts
                            </Link>
                        </li>
                        {/* <li>
            <a href="#" className="flex items-center hover:text-green-500 transition">
              <ShoppingCart className="w-5 h-5 mr-3" />
              Paramètres
            </a>
          </li> */}
                    </ul>
                </nav>
            </div>
            <div className=' flex-1 h-screen overflow-y-scroll'>
                {children}
            </div>
        </div>
    );
};

export default HeaderAdmin;
