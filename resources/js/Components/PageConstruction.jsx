import React from 'react';
import { AlertCircle, Send } from 'lucide-react';
import Header from '@/Layouts/Header';
import { router } from '@inertiajs/react';


export default function PageConstruction() {
    const handleContact = () => {
        // You can replace this with your actual contact method (e.g., opening an email client, modal, etc.)

        router.get('contact');
    };
    return (



        <div className="  flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center space-y-6">
                <div className="flex justify-center mb-4">
                    <AlertCircle
                        size={64}
                        className="text-primary animate-pulse"
                    />
                </div>

                <h1 className="text-3xl font-bold text-gray-800">
                    Page en Construction
                </h1>

                <p className="text-gray-600 mb-6">
                    Nous travaillons actuellement sur cette page.
                    Restez à l'écoute pour de nouvelles mises à jour !
                </p>

                <button
                    onClick={handleContact}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-800 transition flex items-center justify-center space-x-2"
                >
                    <Send size={20} />
                    <span>Nous Contacter Directement </span>
                </button>
            </div>
        </div>

    );
}
