import { Link, router, usePage } from "@inertiajs/react"

import { Eye } from "lucide-react";
import { use, useEffect, useMemo, useRef, useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import FlashMessage from "@/Components/FlashMessage";

const Exercices = () => {
    const { exercices, flash } = usePage().props
    const [searchTerm, setSearchTerm] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [selectedExercice, setSelectedExercice] = useState(null);



    //valider la suppression
    const handleValidateDelete = (exercice) => {
        setSelectedExercice(exercice)
        setShowMessage(true)
    }

    const handleHideModalDelete = () => {
        setShowMessage(false)
        setSelectedExercice(null)
    }

    const handleDelete = (id) => {
        router.delete(route('exercices.destroy', id))
        setShowMessage(false)
    }

    const filteredExercices = useMemo(() => {
        return exercices.filter(exercice =>
            exercice.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [exercices, searchTerm]);

    const styleEtat = (state) => {

        if (state == "en cours") {
            return "bg-red-500 text-red-50"
        } else if (state == "terminé") {
            return "bg-green-500 text-green-50"
        } else {
            return "bg-gray-500 text-gray-50"
        }
    }


    return (
        <>

            <HeaderAdmin>
                <FlashMessage />
                <div className="min-h-screen text-white p-8 relative">




                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-3xl font-bold "> Exercices</h1>
                        <div className=" hidden  text-whitepattern px-[1px] !py-[1px] overflow-hidden rounded linear-gradient-border  font-bold md:flex items-center justify-center leading-0 group ">

                            <Link href={route('exercices.create')} className="inline-block text-whitepattern px-6 py-3 rounded bg-body   font-bold relative z-10 " >
                                <span className='inline-block bg-gradient-to-r group-hover: from-white  to-body  bg-clip-text text-transparent whitespace-nowrap transition'>
                                    Créer un exercice<span aria-hidden="true">&rarr;</span>
                                </span>
                            </Link>
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

                                    <th className="px-4 py-2 text-left">Titre</th>
                                    <th className="px-4 py-2 text-left">description</th>
                                    <th className="px-4 py-2 text-left">Deadline</th>
                                    <th className="px-4 py-2 text-left">Etat</th>
                                    <th className="px-4 py-2 text-left">Nombres inscrits</th>

                                    <th className="px-4 py-2 text-left">Image</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredExercices.map(exercice => (
                                    <tr key={exercice.id} className="border-b border-zinc-700 hover:bg-black/30 whitespace-nowrap">

                                        <td className="px-4 py-2 truncate">{exercice.title} </td>

                                        <td className="px-4 py-2 truncate">{exercice.description} </td>
                                        <td className="px-4 py-2 truncate">{exercice.deadline} </td>
                                        <td className={"px-4 py-2 truncate "}> <span className={"rounded-lg py-1 px-2 " + styleEtat(exercice.etat)}>{exercice.etat}</span> </td>

                                        <td className="px-4 py-2 truncate">{exercice.users_count} </td>

                                        <td className="px-4 py-2 truncate">
                                            <img src={exercice.path_overview} alt="oups" className="size-14 rounded" />
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <PrimaryButton onClick={() => router.get(route('exercices.edit', exercice.id))}>Modifier</PrimaryButton>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <SecondaryButton className="!bg-red-500 hover:!bg-red-500 text-white" onClick={() => { handleValidateDelete(exercice) }}>Supprimer</SecondaryButton>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {showMessage && selectedExercice && <Modal show={showMessage} onClose={handleHideModalDelete} closeable={true} maxWidth='lg'>
                    <div className='px-6 py-4'>
                        <h2 className='font-bold text-2xl text-center'> Supprimer la L'exercice {selectedExercice.title} ??</h2>
                    </div>
                    <div className='px-6 py-4'>

                        <div className='flex items-center justify-around'>
                            <button onClick={() => handleDelete(selectedExercice.id)} className='bg-red-500 rounded bold py-2 px-3' > Supprimer L'exercice</button>
                            <button className='bg-primary rounded bold py-2 px-3' onClick={() => handleHideModalDelete()}> Annuler</button>
                        </div>
                    </div>

                </Modal>}

            </HeaderAdmin>
        </>
    )
}
export default Exercices


