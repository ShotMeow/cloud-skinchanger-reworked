import { data } from "./data"
import { Link } from 'react-router-dom'

const UsersLinks = () => {
    return (
        <div className="flex flex-col items-center lg:items-start lg:order-2">
            <h2 className="font-semibold text-xl mb-4">Пользователям и партнёрам</h2>
            <ul className="flex flex-col items-center lg:items-start gap-3 text-[#C4C4C4]">
                {data.map(elem => (
                    <li className="hover:text-white" key={elem.id}><Link to={elem.url}>{elem.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default UsersLinks