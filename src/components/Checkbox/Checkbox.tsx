import { BiCheck } from "react-icons/bi"

interface ICheckbox {
    isActive: boolean
    setActive: any
}

const Checkbox: React.FC<ICheckbox> = ({ isActive, setActive, children }) => {
    const handleClick = () => {
        setActive()
    }

    return (
        <label onClick={(): void => handleClick()} className="cursor-pointer flex items-center gap-4">
            <div className={"rounded w-6 h-6 flex items-center justify-center transition-all " + (isActive ? 'bg-[#CF2C2C]' : 'bg-[#0A0A0A]')}>
                <BiCheck size={20} className={"transition duration-500 ease-in-out " + (isActive ? 'scale-100' : 'scale-0')} />
            </div>
            <span className="text-[#828282] text-lg">{children}</span>
        </label>
    )
}

export default Checkbox