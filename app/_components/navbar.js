'use client'
import { useState} from 'react'
import {Dialog, Popover} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Logo from "@/app/_components/logo";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 ">
                    <Logo/>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#diary" className="text-md font-semibold leading-6 text-gray-900">
                        Дневник
                    </a>
                    <a href="#grades" className="text-md font-semibold leading-6 text-gray-900">
                        Оценки
                    </a>
                    <a href="#regions" className="text-md font-semibold leading-6 text-gray-900">
                        Поддерживаемые регионы
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={(event) => window.location.href = '#download'}
                            className={"bg-[var(--button-color)] ps-12 pe-12 pt-4 pb-4 rounded-2xl font-semibold text-text-color"}>
                        Скачать
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[var(--background-start-rgb)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#diary"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Дневник
                                </a>
                                <a
                                    href="#grades"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Оценки
                                </a>
                                <a
                                    href="#regions"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Поддерживаемые регионы
                                </a>
                            </div>
                            <div className="py-6">
                                <div className="">
                                    <button onClick={(event) => window.location.href = '#download'}
                                            className={"bg-[var(--button-color)] ps-12 pe-12 pt-4 pb-4 rounded-2xl font-semibold text-text-color"}>
                                        Скачать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
