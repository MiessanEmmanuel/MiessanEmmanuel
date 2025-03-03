import { useState } from "react"
import HeaderAdmin from "../HeaderAdmin"
import { Textarea } from "@headlessui/react"
import { ArrowRight } from "lucide-react"
import { router, usePage } from "@inertiajs/react"

const EditExercice = () => {
    const { flash, errors, exercice } = usePage().props



    const [formData, setFormData] = useState({ title: exercice.title, description: exercice.description, file: null, deadline: exercice.deadline, etat: exercice.etat, _method: 'put' })

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleInputChangeFile = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }

    /*  const urlBackHierachieEdit = () => {
         const urlActuelle = window.location.href

         const urlLikeArray = urlActuelle.split('/')
         urlLikeArray.splice(-1, 1)
         const newURl = urlLikeArray.join('/')
         return newURl
     } */


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        router.post(route('exercices.update', exercice.id), formData, {
            forceFormData: true
        })
    }
    return (
        <>
            <HeaderAdmin>
                {flash.error && <div className="text-red-500">{flash.error}</div>}
                {flash.success && <div className="text-red-500">{flash.success}</div>}

                {errors.title && <div className="text-red-500">{errors.title}</div>}
                {errors.description && <div className="text-red-500">{errors.description}</div>}
                {errors.file && <div className="text-red-500">{errors.file}</div>}
                {errors.etat && <div className="text-red-500">{errors.etat}</div>}
                {errors.deadline && <div className="text-red-500">{errors.deadline}</div>}



                <div className='flex justify-between items-center mb-8  w-full md:max-w-5xl md:mx-auto'>
                    <h1 className="text-3xl font-bold "> Modifier un exercice</h1>

                </div>
                <form onSubmit={handleSubmit} className="bg-secondary md:rounded-xl p-3 md:p-8 w-full md:max-w-5xl md:mx-auto space-y-5">

                    <div>
                        <label htmlFor="title" className="block mb-2 text-gray-400">Titre</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="bg-black/40 rounded-lg px-4 py-2 w-full"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="description" className="block mb-2 text-gray-400">Description</label>
                        <Textarea
                            type="text"
                            id="description"
                            name="description"
                            className="bg-black/40 rounded-lg px-4 py-2 w-full"
                            value={formData.description}
                            onChange={handleInputChange}
                        />

                    </div>
                    <div className="flex items-center gap-x-3">

                        <div className="flex-1">
                            <label htmlFor="deadline" className="block mb-2 text-gray-400">Deadline</label>
                            <input
                                type="date"
                                id="deadline"
                                name="deadline"
                                className="bg-black/40 rounded-lg px-4 py-2 w-full"
                                value={formData.deadline}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="etat" className="block mb-2 text-gray-400">
                                Etat </label>
                            <select name="etat" id="etat" onChange={handleInputChange} value={formData.etat} className="text-gray-700">
                                <option value="en cours">En cours</option>
                                <option value="terminé">Terminé</option>
                                <option value="archivé">Archivé</option>
                            </select>

                        </div>
                    </div>
                    <div>
                        <img src={exercice.path_overview} alt="oups" className="size-14 rounded" />

                        <label htmlFor="file" className="block mb-2 text-gray-400">Image</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            className="bg-black/40 rounded-lg px-4 py-2 w-full"

                            onChange={handleInputChangeFile}
                        />

                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center">
                            Modifier l'Exercice
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </form>

            </HeaderAdmin>
        </>
    )
}

export default EditExercice
