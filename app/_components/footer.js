import Logo from "@/app/_components/logo";


export default function Footer() {
    return (
        <div className={"w-screen bg-[var(--surface-color)] flex flex-col"}>
            <div className={"flex justify-around items-center p-20 max-sm:p-2 max-lg:gap-4 gap-4"}>
                    <Logo/>
                <a className={"flex flex-col gap-8 max-lg:gap-2"} href={"https://t.me/sgoapp"}>
                    <div className={"flex gap-4 items-center"}>
                        <img src={"/sources/telegram.svg"} alt={""} className={"h-7 w-7"}/>
                        <b className={"font-light"}>Telegram-канал</b>
                    </div>
                    <a className={"flex gap-4 items-center"} href={"https://github.com/mezhendosina/sgo-app"}>
                        <img src={"/sources/github.svg"} alt={""} className={"h-7 w-7 "}/>
                        <b>Исходный код</b>
                    </a>
                </a>
                <div className={"flex flex-col max-lg:hidden"}>
                    <b>Приложение не имеет отношения к «ИрТеху»</b>
                    <b>Made with ❤️ by <a href={"https://t.me/mezhendosina"}
                                          className={"font-bold"}>@mezhendosina</a></b>
                </div>

            </div>
            <div className={" flex flex-col items-center justify-center lg:hidden ps-2 pe-2"}>
                <b className={"text-center"}>Приложение не имеет отношения к «ИрТеху»</b>
                <b>Made with ❤️ by <a href={"https://t.me/mezhendosina"} className={"font-bold"}>@mezhendosina</a></b>

            </div>
        </div>
    )
}