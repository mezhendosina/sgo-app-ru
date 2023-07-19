const things = [
    {
        "name": "Безопасность",
        "icon-href": "/icon-safe.svg",
        "text": "Все персональные данные в том числе и логин с паролем бережно хранятся на телефоне пользователя и не передаются никуда, кроме как на сервера Сетевого Города",
    }
]


export default function OneMoreThing() {
    return (
        <div className={"w-screen flex justify-center pe-16"}>
            <div className={"max-w-screen-xl grid grid-cols-2 gap-8 max-lg:flex max-lg:flex-col"}>
                <div className={"gap-2 p-16 bg-[var(--surface-color)] rounded-2xl flex flex-col  justify-center"}>
                    <h4 className={"text-free-color-text"}>Бесплатный</h4>
                    <b className={"text-free-color-text"}>SGO app полностью бесплатен и не содержит рекламы</b>
                </div>
                <div className={"gap-2 p-16 rounded-2xl flex flex-col justify-center bg-[var(--security-color-bg)]"}>
                    <h4 className={"text-security-color-text"}>Безопасный</h4>
                    <b className={"text-security-color-text"}>Все персональные данные бережно хранятся на телефоне пользователя и не передаются никуда, кроме как
                        на сервера «Сетевого Города»</b>
                </div>
                <div className={"flex items-center col-span-2 justify-around pt-8 ps-16 pe-16 bg-[var(--dynamic-color-bg)] rounded-2xl"}>
                    <p className={"max-w-3xl text-dynamic-color-text pe-4"}>Поддержка динамических цветов на Android 12+</p>
                    <img src={"/screenshot-lesson-dynamic-color.png"} className={"max-w-4xl max-h-96"}/>
                </div>
            </div>
        </div>

    )
}
