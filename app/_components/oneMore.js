

export default function OneMoreThing() {
    return (
        <div className={"sm:max-w-screen flex justify-center"}>
            <div className={"grid grid-cols-2 gap-8 max-lg:flex max-lg:flex-col lg:max-w-7xl"}>
                <div className={"gap-2 p-16 bg-[var(--surface-color)] rounded-2xl flex flex-col  justify-center"}>
                    <h4 className={"text-free-color-text"}>Бесплатный</h4>
                    <b className={"text-free-color-text"}>SGO app полностью бесплатен и не содержит рекламы</b>
                </div>
                <div className={"gap-2 p-16 rounded-2xl flex flex-col justify-center bg-[var(--security-color-bg)] max-sm:p-8"}>
                    <h4 className={"text-security-color-text"}>Безопасный</h4>
                    <b className={"text-security-color-text"}>Все персональные данные бережно хранятся на телефоне пользователя и не передаются никуда, кроме как
                        на сервера «Сетевого Города»</b>
                </div>
                <div className={"flex items-center col-span-2 justify-around pt-8 ps-16 pe-16 bg-[var(--dynamic-color-bg)] rounded-2xl max-lg:flex-col"}>
                    <p className={"max-w-3xl text-dynamic-color-text pe-4 max-lg:text-center max-lg:pb-8"}>Поддержка динамических цветов на Android 12+</p>
                    <img src={"/screenshot-lesson-dynamic-color.png"} className={"max-w-xs max-lg:max-h-none max-lg:w-8/12"}/>
                </div>
            </div>
        </div>

    )
}
