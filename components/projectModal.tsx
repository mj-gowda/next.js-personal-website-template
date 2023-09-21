"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { PiCirclesThreePlusBold } from "react-icons/pi";



interface MyModalProps {
    tech: string[]; // Ensure that the tech prop is of type string[]
 }

export default function MyModal({tech}:MyModalProps) {
let [isOpen, setIsOpen] = useState(false)

function closeModal() {
setIsOpen(false)
}

function openModal() {
setIsOpen(true)
}

return (
    <>
    <PiCirclesThreePlusBold
        title='tech stack'
        type="button"
        onClick={openModal}
        className="rounded-md hover:-translate-y-1 transition-transform cursor-pointer text-2xl"
    >
    </PiCirclesThreePlusBold>

    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
                >
                Project tech stack
                </Dialog.Title>
                <div className="mt-2">
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {tech.map((item:string, idx:number) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item}
                  </p>
                )
                })}
            </div>
                </div>

                <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                >
                    Got it, thanks!
                </button>
                </div>
            </Dialog.Panel>
            </Transition.Child>
        </div>
        </div>
    </Dialog>
    </Transition>
    </>
)
}

