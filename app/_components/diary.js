import Image from "next/image";

export default function Diary() {
    return (<div className={"h-screen flex  :flex-col items-center  justify-around pt-32"} id={"diary"}>
        <div className={"flex flex-col"}>
            <p className={"text-4xl font-semibold text-text-color "}>Дневник, в котором </p>
            <p className={"text-4xl font-semibold text-text-color "}>нет ничего лишнего</p>
        </div>
        <div className={"ps-8"}>
            <Image src={"/screenshot-week-selector.svg"} alt={""} width={360} height={56} className={"pb-4"}/>
            <Image src={"/screenshot-past-mandatory.svg"} alt={""} width={360} height={113} className={"pb-4"}/>
            <Image src={"/screenshot-diary.svg"} alt={""} width={360} height={390}/>
        </div>
    </div>)
}