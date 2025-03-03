import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className=" sm:w-full mx-3 md:mx-0 sm:max-w-md m-6 px-6 py-4 bg-secondary ring-1 ring-gray-300 shadow-md overflow-hidden rounded-lg ">
                {children}
            </div>
        </div>
    );
}
