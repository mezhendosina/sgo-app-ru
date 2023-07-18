import Image from 'next/image'
import Main from "@/app/_components/main";
import Diary from "@/app/_components/diary";
import Grades from "@/app/_components/grades";
import OneMoreThing from "@/app/_components/oneMore";
import Regions from "@/app/_components/regions";
import Footer from "@/app/_components/footer";
import Downloads from "@/app/_components/downloads";

export default function Home() {
    return (
        <main className={"min-h-screen"}>
            <div className={"ps-8 pe-8"}>
                <Main/>
                <Diary/>
                <Grades/>
                {/*<OneMoreThing/>*/}
                <Regions/>
                <Downloads/>
            </div>
            <Footer/>
        </main>
    )
}
