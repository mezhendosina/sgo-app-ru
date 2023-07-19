import Image from "next/image";

export default function Diary() {
    return (
        <div className={"max-h-screen flex items-center justify-around pt-32 max-lg:flex-col"} id={"diary"}>
            <div className={"flex flex-col"}>
                <p className={"text-4xl font-semibold text-text-color max-w-md max-lg:text-center"}>Дневник, в котором нет ничего лишнего</p>
            </div>
            <div className={"lg:ps-8 max-lg:pt-8"}>
                <Image src={"/screenshot-week-selector.svg"} alt={""} width={360} height={56} className={"pb-4"}/>
                <Image src={"/screenshot-past-mandatory.svg"} alt={""} width={360} height={113} className={"pb-4"}/>
                <Image src={"/screenshot-diary.svg"} alt={""} width={360} height={390}/>
            </div>
        </div>
    )
}