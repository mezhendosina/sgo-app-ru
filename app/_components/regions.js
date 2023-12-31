const regions = [
    {name: "Амурская область", icon: "amur.png"},
    {name: "Алтайский край", icon: "altai.svg"},
    {name: "Калужская область", icon: "kaluga.svg"},
    {name: "Костромская область", icon: "kostromsk.svg"},
    {name: "Краснодарский край", icon: "krasnod.svg"},
    {name: "Ленинградская область", icon: "leningradsk.svg"},
    {name: "Забайкальский край", icon: "zabaikalsk.svg"},
    {name: "Приморский край", icon: "primorsk.svg"},
    {name: "Республика Бурятия", icon: "resp_bur.svg"},
    {name: "Республика Марий Эл", icon: "resp_mari_el.svg"},
    {name: "Республика Мордовия", icon: "resp_mord.svg"},
    {name: "Республика Саха Якутия", icon: "resp_saha.svg"},
    {name: "Республика Коми", icon: "resp_komi.svg"},
    {name: "Самарская область", icon: "samarsk.svg"},
    {name: "Сахалинская область", icon: "sahalin.svg"},
    {name: "Тверская область", icon: "tverskaya.svg"},
    {name: "Томская область", icon: "tomsk.svg"},
    {name: "Ульяновская область", icon: "ylanovsk.svg"},
    {name: "Челябинская область", icon: "chel.svg"},
    {name: "Черноголовка", icon: "chern.png"},
    {name: "Чувашская Республика", icon: "chuvashsk.png"},
    {name: "Ямало-Ненецкий Автономный Округ", icon: "yamal_nen.svg"}
]

export default function Regions() {
    return (
        <div className={" flex flex-col  items-center pt-32"} id={"regions"}>
            <p>Поддерживаемые регионы</p>
            <div className={"columns-2xs w-screen max-w-7xl  p-16 gap-32  "}>
                {regions.map((item) => (
                        <div key={item.name} className={"flex items-center pb-4 max-xl:justify-center"}>
                            <img src={`/regions/${item.icon}`} className={"w-8"}/>
                            <b className={"ps-4 text-xl max-lg:text-center"}>{item.name}</b>
                        </div>

                    )
                )
                }
            </div>
        </div>
    )
}