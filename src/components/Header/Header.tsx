import Nav from "./Nav/Nav"

const Header = () => {
    return (
        <header className=" px-4 py-4 lg:bg-[#090909]">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold text-2xl">Cloud <span className="text-[#CF2C2C]">Skinchanger</span></h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header