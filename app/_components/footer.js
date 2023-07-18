import Logo from "@/app/_components/logo";


export default function Footer() {
    return (
        <div className={"w-screen bg-[var(--surface-color)] flex justify-around items-center p-20 "}>
            <Logo/>
            <a className={"flex flex-col gap-8"} href={"https://t.me/sgoapp"}>
                <div className={"flex gap-4 items-center"}>
                    <img src={"/sources/telegram.svg"} alt={""} className={"h-7 w-7"}/>
                    <b className={"font-light"}>Telegram-канал</b>
                </div>
                <a className={"flex gap-4 items-center"} href={"https://github.com/mezhendosina/sgo-app"}>
                    <img src={"/sources/github.svg"} alt={""} className={"h-7 w-7 "}/>
                    <b>Исходный код</b>
                </a>
            </a>
            <div className={"flex flex-col"}>
                <b>Приложение не имеет отношения к «ИрТеху»</b>
                <b>Made with ❤️ by <a href={"https://t.me/mezhendosina"} className={"font-bold"}>@mezhendosina</a></b>

            </div>
        </div>
    )
}