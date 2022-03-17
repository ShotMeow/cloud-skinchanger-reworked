import { useState } from "react"
import Radio from "../../../../components/Radio/Radio"
import { radiosData } from "./data"

export const Calculator = () => {
    const [radios, setRadios] = useState(radiosData)

    const changeRadio = (id: number) => {
        const copy = [...radios]
        copy.forEach(radio => {
            if (radio.id === id)
                radio.isActive = true
            else
                radio.isActive = false
        })
        setRadios(copy)
    }
    return (
        <div className="bg-[#020202]">
            <div className="container mx-auto py-10 px-4">
                <h3 className="font-semibold text-xl mb-4">Выбери подписку</h3>
                {radios.map(radio => (
                    <Radio id={radio.id} isActive={radio.isActive} changeRadio={changeRadio} key={radio.id}>{radio.title}</Radio>
                ))}
            </div>
        </div>
    )
}
