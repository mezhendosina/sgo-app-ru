
import './globals.css'
import {Montserrat} from 'next/font/google'
import Image from "next/image";
import Navbar from "@/app/_components/navbar";

const inter = Montserrat({subsets: ['cyrillic', 'latin']})

export const metadata = {
    title: 'SGO app',
    description: 'Generated by create next app',
}



export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        </body>
        </html>
    )
}
