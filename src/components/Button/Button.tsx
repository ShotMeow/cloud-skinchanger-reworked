type Button = 'primary' | 'secondary' | 'link'

interface IButton {
    type: Button
    onClick?: any
}

const Button: React.FC<IButton> = ({ children, type, onClick }) => {
    return (
        <button onClick={onClick} className={'flex items-center gap-2 font-bold transition duration-300 ease hover:scale-95 ' + (type === 'secondary' ? "bg-[#CF2C2C] py-2 px-8 text-lg" : '') + (type === 'primary' ? "bg-[#CF2C2C] py-4 px-16 text-xl" : '') + (type === 'link' ? "bg-transparent py-4 px-4 text-md font-medium underline text-[#CF2C2C]" : '')}>{children}</button>
    )
}

export default Button