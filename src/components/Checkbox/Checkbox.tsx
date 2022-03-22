import { BiCheck } from "react-icons/bi"

interface ICheckbox {
    isActive: boolean
    setActive: any
}

const Checkbox: React.FC<ICheckbox> = ({ isActive, setActive, children }) => {

    return (
        <label onClick={(): void => setActive(!isActive)} className="cursor-pointer flex-col text-center mt-6 sm:text-left sm:flex-row flex items-center gap-4">
            <div className={"rounded w-6 h-6 flex items-center justify-center transition-all " + (isActive ? 'bg-[#CF2C2C]' : 'bg-[#0A0A0A]')}>
                <BiCheck size={20} className={"transition duration-500 ease-in-out " + (isActive ? 'scale-100' : 'scale-0')} />
            </div>
            <span className={"text-lg transition-all " + (isActive ? 'text-white' : 'text-[#828282]')}>{children}</span>
        </label>
    )
}

export default Checkbox