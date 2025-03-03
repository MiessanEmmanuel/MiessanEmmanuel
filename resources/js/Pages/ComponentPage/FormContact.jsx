import { router } from '@inertiajs/react';
import React, { useState } from 'react';
/* css file pour les champs */

const FormContact = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        country: 'ci',
        company: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [politiqueChecked, setPolitiqueChecked] = useState(true);



    const validateForm = () => {
        const newErrors = {};
        if (!formData.first_name.trim()) newErrors.first_name = 'Le nom est requis';
        if (!formData.email.trim()) {
            newErrors.email = "L'email est requis";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }
        if (!formData.company.trim()) newErrors.company = "L'entreprise est requise";
        if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis';

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            try {
                const response = await axios.post(route('takeContact'), formData);
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    country: 'ci',
                    company: '',
                    phone: '',
                    message: ''
                });
                setSubmitStatus('success');
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 3000);
            } catch (error) {
                setSubmitStatus('error');
            }
            setIsSubmitting(false);

        }
    };

    return (
        <>
            {submitStatus && (
                <div className={`mb-4 p-4 rounded-md ${
                    submitStatus === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                    {submitStatus === 'success'
                        ? 'Message envoyé avec succès!'
                        : 'Une erreur est survenue. Veuillez réessayer.'}
                </div>
            )}

            <form method="POST" className="mx-auto flex-1 mx-auto max-w-5xl text-gray-300" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                            Nom
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first_name"
                                id="first-name"
                                autoComplete="given-name"
                                required
                                value={formData.first_name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 drop-normal"
                            />
                            {errors.first_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6">
                            Prénoms
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="last_name"
                                id="last-name"
                                autoComplete="family-name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 drop-normal"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6">
                            Entreprise
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                required
                                value={formData.company}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 drop-normal"
                            />
                            {errors.company && (
                                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 drop-normal"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6">
                            Numéro de téléphone
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center z-10">
                                <label htmlFor="country" className="sr-only">
                                    Pays
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                                >
                                    <option value="+225">+225</option>
                                    <option value="+33">+33</option>
                                    <option value="+1">+1</option>
                                </select>
                                <svg
                                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                id="phone-number"
                                required
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 drop-normal"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 drop-normal"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <button
                                type="button"
                                className="bg-primary text-white flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                role="switch"
                                ariaChecked="false"
                                ariaLabelledby="switch-1-label"
                                onClick={politiqueChecked ? ()=>setPolitiqueChecked(false) : ()=>setPolitiqueChecked(true)}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    ariaHidden="true"
                                    className={"h-4 w-4 transform rounded-full bg-secondary shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out  " + (politiqueChecked ? "!translate-x-[14px]" : "translate-x-0")}
                                    /* style={{
                                        transform : "translateX(14px) !important"
                                    }} */
                                />
                            </button>
                        </div>
                        <label className="text-sm leading-0" id="switch-1-label">
                            En sélectionnant ceci, vous acceptez notre
                            <a target='_blank' href={route('privacypolicy')} className="font-semibold text-primary">
                                {' '}
                                politique de confidentialité
                            </a>
                            .

                        </label>
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={politiqueChecked ? isSubmitting : true}
                        className="block w-full rounded-md linear-gradient-bouton px-3.5 py-2.5 text-center text-sm font-semibold !text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800"
                    >
                        <span className="relative block z-10">
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyez votre message'}
                        </span>
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormContact;
