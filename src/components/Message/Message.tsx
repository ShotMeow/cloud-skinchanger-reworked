const Message: React.FC = ({ children }) => {
    return (
        <div className='text-red-600 mt-2 flex items-center gap-2 absolute -bottom-8'>
            <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#CF2C2C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CF2C2C]"></span>
            </span>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Message