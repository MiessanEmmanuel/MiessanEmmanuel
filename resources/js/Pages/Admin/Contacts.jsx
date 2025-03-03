import { router, usePage } from "@inertiajs/react"
import HeaderAdmin from "./HeaderAdmin"
import { Eye } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const Contacts = () => {
    const { contacts } = usePage().props
    const [searchTerm, setSearchTerm] = useState('');
    const [luContact, setLuContact] = useState(false);
    const [idCurrent, setIdCurrent] = useState(null);


    const checkedLu = useRef();

    // Filter contacts based on search term
    const filteredContacts = useMemo(() => {
        return contacts.filter(contact =>
            contact.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [contacts, searchTerm]);

    const handleLucontact = (id) => {
        router.post(route('admin.contacts.setLuContact'), {
            lu: luContact,
            id: id
        })
        setLuContact(null)
        setIdCurrent(null)
    }
    return (
        <>

            <HeaderAdmin>
                <div className="min-h-screen text-white p-8 relative">
                    {/*  <div className={'absolute text-white top-0 right-[50%] translate-x-[50%] -translate-y-1 z-50  bg-primary p-3 px-[4em] rounded font-bold ' + (messageSuccess ? 'block' : 'hidden')} >
                        {messageSuccessContent}
                    </div> */}

                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-3xl font-bold "> Contacts</h1>
                        <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">

                            {/*  <button className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 ">
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Télécharger les contacts<span aria-hidden="true">&rarr;</span>
                                </span>
                            </button> */}
                        </div>
                    </div>

                    <div className="bg-secondary ring-1 ring-zinc-600 text-white p-6">
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Rechercher une categorie..."
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <table className="w-full border-collapse table-fixed	">
                            <thead>
                                <tr className="bg-black/40 ">
                                    <th className='w-[7em] '>vu</th>
                                    <th className="px-4 py-2 text-left">Nom</th>
                                    <th className="px-4 py-2 text-left">email</th>
                                    <th className="px-4 py-2 text-left">Numéro</th>
                                    <th className="px-4 py-2 text-left">Company</th>
                                    <th className="px-4 py-2 text-left">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredContacts.map(contact => (
                                    <tr key={contact.id} className="border-b border-zinc-700 hover:bg-black/30 whitespace-nowrap">
                                        <td className="px-4 py-2 text-center">
                                        {contact.lu ? "oui" : "non"}
                                            {contact.lu ? ('') : (
                                                <>
                                                    <input type="checkbox" name="lu" id="" className="mr-3" ref={checkedLu} onChange={luContact ? (e) => { setLuContact(false); setIdCurrent(null) } : (e) => { setLuContact(true); setIdCurrent(contact.id) }} />
                                                    {luContact && idCurrent == contact.id && (<button className="bg-green-50 rounded px-2 py-1 text-green-700 hover:bg-green-100" onClick={() => handleLucontact(contact.id)} > save</button>)}
                                                </>
                                            )}
                                        </td>
                                        <td className="px-4 py-2 truncate">{contact.first_name} {contact.last_name}</td>

                                        <td className="px-4 py-2 truncate">{contact.email} </td>
                                        <td className="px-4 py-2 truncate">{contact.phone} </td>
                                        <td className="px-4 py-2 truncate">{contact.company} </td>
                                        <td className="px-4 py-2 truncate">{contact.message} </td>






                                        {/*  <td className='px-4 py-2 '>
                                            <div className='inline-flex items-center gap-x-3'>
                                                <button onClick={() => showModalEditCategory(categorie)} className="inline-block text-whitepattern px-3 py-1 rounded bg-blue-500 hover:bg-blue-700 font-bold relative z-10">
                                                    <Edit className='size-4' /> </button>
                                                <button onClick={() => showModalValidate(categorie)} className="inline-block text-whitepattern px-3 py-1 rounded bg-red-500 hover:bg-red-700 font-bold relative z-10">
                                                    <Delete className='size-4' /> </button>
                                            </div>

                                        </td>
 */}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </HeaderAdmin>
        </>
    )
}
export default Contacts

