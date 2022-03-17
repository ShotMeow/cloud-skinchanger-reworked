import Nav from "./Nav/Nav"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="p-4 lg:bg-[#090909]">
            <div className="container mx-auto flex justify-between items-center">
                <h1><Link to="/" className="text-white font-bold text-2xl">Cloud <span className="text-[#CF2C2C]">Skinchanger</span></Link></h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header