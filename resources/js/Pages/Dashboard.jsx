import FlashMessage from '@/Components/FlashMessage';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard({ auth, listExercices }) {
    const truncate = (str, limitChar) => {
        let newStr = str

        if (str.length >= limitChar) {
            const strArray = newStr.split('').slice(0, limitChar)
            strArray.push('...')
            newStr = strArray.join('')
        }
        return newStr
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Exercices</h2>}
        >
            <Head title="Dashboard" />
            <FlashMessage />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Les exercices auxquels je participe</div>
                    </div>
                    <div className="max-w-7xl mx-auto my-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                            {listExercices.length != 0 ? listExercices.map((exercice, index) => (
                                <div key={index} className="bg-secondary rounded-xl shadow-md p-1 flex flex-col group ">
                                    <div className={"before:group-hover:opacity-100 relative before:opacity-0 before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:transition before:pointer-events-none"}>
                                        <img src={exercice.path_overview} alt="" className="  object-cover w-full rounded-xl min-h-[250px] max-h-[300px] hover:cursor-pointer" onClickCapture={() => router.get(route('exercices.singleForUser', exercice.id))} />
                                    </div>
                                    <div className=" px-5 py-3  flex-1 flex flex-col  justify-between">
                                        <div>

                                            <h3 className="font-bold tracking-tight  text-2xl capitalize mb-2">{exercice.title}</h3>
                                            <p className="text-gray-300 mb-4">{truncate(exercice.description, 130)}</p>
                                        </div>
                                        <div className="">
                                            <button className="bg-red-600 hover:bg-red-500 text-white transition px-5 py-2 rounded-lg text-gray-800 w-full" onClick={() => { router.post(route('exercices.quitterExercice', exercice.id), {}, { preserveScroll: true }) }}>Arrêter de participer</button>

                                        </div>
                                    </div>


                                </div>
                            )) : (
                                <div className='italic font-bold text-gray-700'>
                                    Aucun exercice...
                                </div>

                            )}

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
