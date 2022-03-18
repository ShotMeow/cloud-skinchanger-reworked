interface IRadio {
    id: number
    changeRadio?: any
    isActive?: boolean
}

const Radio: React.FC<IRadio> = ({ id, changeRadio, isActive, children }) => {
    const handleClick = (id: number) => {
        changeRadio(id)
    }
    return (
        <label onClick={(): void => handleClick(id)} className="cursor-pointer flex items-center gap-3 my-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#222222]">
                <div className={"bg-[#CF2C2C] w-2 h-2 rounded-full transition duration-300 ease-in-out " + (isActive ? 'scale-100' : 'scale-0')}></div>
            </div>
            <span className={"text-lg text-left transition-all " + (isActive ? "text-white" : 'text-[#C8C8C8]')}>{children}</span>
        </label>
    )
}

export default Radio