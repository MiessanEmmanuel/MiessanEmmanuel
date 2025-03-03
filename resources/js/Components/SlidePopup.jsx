import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function SlidePopup({children, show = false, maxWidth = 'sm', closeable = true, onClose = () => { } }) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };
    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];
    return (
        <>
            <Transition show={show} as={Fragment} leave="duration-300">
                <Dialog
                    as="div"
                    id="modal"
                    className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all"
                    onClose={close}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute inset-0 bg-secondary/75" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500 "
                        enterFrom="translate-x-[50%]  "
                        enterTo="translate-x-0  "
                        leave="ease-in duration-400"
                        leaveFrom="opacity-100  "
                        leaveTo="opacity-0 translate-x-[90%]"
                    >
                        <Dialog.Panel
                            className={`mb-6 bg-secondary !w-3/5  overflow-hidden shadow-xl transform transition-all sm:w-full h-full absolute inset-y-0 right-0 !p-3 sm:max-w-sm lg:max-w-sm `}
                        >
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}
