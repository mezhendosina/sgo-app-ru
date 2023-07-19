const sources = [
    {header: "Скачать как", body: "APK", icon: "android.svg", "active": true, "href": "/SGO app.apk"},
    {header: "Доступно в", body: "Telegram-канале", icon: "telegram.svg", active: true, href: "https://t.me/sgoapp"},
    {header: "Скоро в", body: "RuStore", icon: "rustore.svg", active: false, href: "#download"},
    {header: "Совсем скоро в", body: "Google play", icon: "google-play.svg", active: false, href: "#download"}
]

export default function Downloads() {
    return (
        <div className={"h-1/2 flex flex-col items-center pt-64 pb-64"}>
            <p>Скачать SGO app</p>
            <div
                className={"w-10/12 flex justify-center items-center content-center flex-shrink-0 flex-wrap gap-12 pt-8"}
                id={"download"}>
                {sources.map((item) => (
                    <a key={item.body}
                       className={"flex items-center border border-text-color rounded-3xl ps-8 pt-4 pe-8 pb-4"}
                       href={item.href}>
                        <img src={`/sources/${item.icon}`} alt={""}/>
                        <div className={"flex flex-col ps-4"}>
                            <b className={"font-light text-text-color"}>{item.header}</b>
                            <b className={"text-text-color font-semibold"}>{item.body}</b>
                        </div>
                    </a>
                ))
                }
            </div>
        </div>
    )
}