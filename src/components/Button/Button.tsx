type Button = 'primary' | 'secondary'

interface IButton {
    type: Button
}

const Button: React.FC<IButton> = ({ children, type }) => {
    return (
        <button className={'font-bold bg-[#CF2C2C] transition duration-300 ease hover:scale-95 ' + (type === 'secondary' ? "py-2 px-4" : "py-4 px-16 text-xl")}>{children}</button>
    )
}

export default Button