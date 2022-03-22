import Nav from "./Nav/Nav"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { data } from './data'
import { IPage } from './data.interface'

const Header = () => {
    const [show, setShow] = useState<boolean>(false)
    const [pages, setPages] = useState<IPage[]>(data)

    const setActive = (id: number) => {
        const copy = [...pages]
        copy.forEach(page => {
            if (page.id === id)
                page.isActive = true
            else
                page.isActive = false
        })
        setPages(copy)
        setShow(false)
    }

    return (
        <header className="p-4 lg:bg-[#090909]">
            <div className="container mx-auto flex justify-between items-center">
                <h1><Link to="/" onClick={(): void => setActive(1)} className="font-bold text-2xl">Cloud <span className="text-[#CF2C2C]">Skinchanger</span></Link></h1>
                <Nav setActive={setActive} pages={pages} setShow={setShow} show={show} />
            </div>
        </header>
    )
}

export default Header