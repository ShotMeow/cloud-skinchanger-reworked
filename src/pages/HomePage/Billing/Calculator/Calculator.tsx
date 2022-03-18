import { useState } from "react"
import Button from "../../../../components/Button/Button"
import Checkbox from "../../../../components/Checkbox/Checkbox"
import Radio from "../../../../components/Radio/Radio"
import RangeComponent from "../../../../components/Range/Range"
import { price } from "../Tariffs/data"
import { checkboxesData, radiosData } from "./data"

export const Calculator = () => {
    const [radios, setRadios] = useState(radiosData)
    const [checkboxes, setCheckboxes] = useState(checkboxesData)
    const [duration, setDuration] = useState([3])

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

    let result = price * duration[0]

    const changeCheckboxes = (id: number) => {
        const copy = [...checkboxes]
        copy.forEach(checkbox => {
            if (checkbox.id === id) {
                checkbox.isActive = !checkbox.isActive
            }
        })

        setCheckboxes(copy)
    }

    return (
        <div className="bg-[#020202] pb-36">
            <div className="container mx-auto py-10 px-4 text-center sm:text-left">
                <div className="mb-6">
                    <h3 className="font-semibold text-xl mb-4">Выбери подписку</h3>
                    {radios.map(radio => (
                        <Radio id={radio.id} isActive={radio.isActive} changeRadio={changeRadio} key={radio.id}>{radio.title}</Radio>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4">Длительность подписки</h3>
                    <RangeComponent min={1} max={90} value={duration} onChange={setDuration} />
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold text-xl mb-4">Выбери доп. функции</h3>
                    {checkboxes.map(checkbox => (
                        <Checkbox key={checkbox.id} id={checkbox.id} isActive={checkbox.isActive} setActive={changeCheckboxes}>{checkbox.title}</Checkbox>
                    ))}
                </div>
                <div>
                    <p className="text-xl mt-10 mb-5">Итого: <span className="font-bold"><span className="text-[#CF2C2C]">{result} ₽</span> за {duration} дней</span></p>
                    <Button type="secondary">Оплатить</Button>
                </div>
            </div>
        </div>
    )
}
