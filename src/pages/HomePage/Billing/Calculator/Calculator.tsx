import { useState } from "react"
import Button from "../../../../components/Button/Button"
import Checkbox from "../../../../components/Checkbox/Checkbox"
import Radio from "../../../../components/Radio/Radio"
import RangeComponent from "../../../../components/Range/Range"
import { price } from "../Tariffs/data"
import { radiosData } from "./data"

export const Calculator = () => {
    const [radios, setRadios] = useState(radiosData)
    const [duration, setDuration] = useState([3])

    const [isCustom, setCustom] = useState<boolean>(false)
    const [isFriends, setFriends] = useState<boolean>(false)

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

    return (
        <div className="pb-36">
            <div className="container mx-auto py-10 px-8 lg:px-0 text-center sm:text-left">
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
                    <Checkbox isActive={isCustom} setActive={setCustom}>Кастомные скины и модели</Checkbox>
                    <Checkbox isActive={isFriends} setActive={setFriends}>Возможность видеть скины друг друга</Checkbox>
                </div>
                <div>
                    <p className="text-xl mt-10 mb-5">Итого: <span className="font-bold"><span className="text-[#CF2C2C]">{result} ₽</span> за {duration} дней</span></p>
                    <Button type="secondary">Оплатить</Button>
                </div>
            </div>
        </div>
    )
}
