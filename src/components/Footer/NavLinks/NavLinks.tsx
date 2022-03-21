import { data } from "../../Header/data"
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const pages = data.slice(1)

    return (
        <div className="flex flex-col items-center lg:order-1">
            <h2 className="font-semibold text-xl mb-4">Разделы</h2>
            <ul className="flex flex-col gap-3 items-center lg:items-start text-[#C4C4C4]">
                {pages.map(page => (
                    <li className="hover:text-white" key={page.id}><Link to={page.url}>{page.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks