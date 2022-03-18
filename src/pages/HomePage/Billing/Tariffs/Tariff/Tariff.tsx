import { ITariff } from "../data.interface"
import { BiCheck } from "react-icons/bi"

interface ITariffComponent extends ITariff {
    setActive: any
}
const Tariff: React.FC<ITariffComponent> = ({ setActive, id, title, cost, duration, discount, standard_skins, custom_skins, friends_see, isActive }) => {
    const handleClick = () => {
        setActive(id)
    }
    return (
        <div onClick={(): void => handleClick()} className={"xl:hover:bg-[#0A0A0A] transition duration-300 ease-in-out rounded-xl py-9 w-3/4 xl:w-auto cursor-pointer mx-auto xl:mx-0 px-6 xl:px-16 font-bold flex flex-col gap-5 xl:gap-14 items-center text-xl my-9 " + (isActive ? 'bg-[#0A0A0A]' : 'bg-[#050505] xl:bg-transparent')}>
            <p>{title}</p>
            <p>{cost}₽</p>
            <p>{duration} дней</p>
            <p>{discount}%</p>
            <BiCheck size={28} className={standard_skins ? 'opacity-100' : 'opacity-10'} />
            <BiCheck size={28} className={custom_skins ? 'opacity-100' : 'opacity-10'} />
            <BiCheck size={28} className={friends_see ? 'opacity-100' : 'opacity-10'} />
        </div>
    )
}

export default Tariff