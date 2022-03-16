import { useEffect, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { data } from './pages'
import { IPage } from './pages.interface'

const Nav = () => {
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
  }

  return (
    <div className='flex items-center justify-center'>
      <button onClick={(): void => setShow(!show)} className="lg:hidden">
        <HiOutlineMenu color='white' size={24} className="mt-1 transition duration-300 ease-in-out" />
      </button>
      <div onClick={(): void => setShow(false)} className={'w-screen h-screen fixed left-0 top-0 bg-black/20 transition duration-700 ease-linear ' + (show ? 'opacity-100' : 'opacity-0 pointer-events-none')}></div>
      <nav className={'fixed top-0 lg:static lg:translate-y-0 transition ease duration-500 left-0 w-full text-white bg-[#090909] lg:bg-transparent ' + (show ? '-translate-y-5' : '-translate-y-96')}>
        <ul className='flex lg:gap-10 lg:flex-row lg:justify-between flex-col items-center gap-6 py-8 lg:py-0'>
          <h1 className="text-white lg:hidden font-bold text-2xl">Cloud <span className="text-[#CF2C2C]">Skinchanger</span></h1>
          {pages.map(page => (
            <Link key={page.id} onClick={(): void => setActive(page.id)} className={page.isActive ? 'font-bold text-white' : 'font-semibold text-[#D2D2D2]'} to={page.url}>{page.title}</Link>
          ))}
          <button className='font-bold bg-[#CF2C2C] py-2 px-4 lg:ml-6'>Авторизоваться</button>
        </ul>
      </nav>
    </div >
  )
}

export default Nav