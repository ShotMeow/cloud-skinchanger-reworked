import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal'
import { IPage } from '../data.interface'

interface INav {
  setActive: any
  setShow: any
  show: boolean
  pages: IPage[]
}

const Nav: React.FC<INav> = ({ setActive, setShow, show, pages }) => {
  const [isModal, showModal] = useState<boolean>(false)
  const navigate = useNavigate()

  const users = useAppSelector(state => state.users.users)
  const currentUser = users.find(user => user.token === localStorage.getItem('token'))

  const handleClick = () => {
    setActive(false)
    showModal(!isModal)
  }
  return (
    <div className='flex items-center justify-center'>
      <button onClick={(): void => setShow(!show)} className="lg:hidden">
        <HiOutlineMenu color='white' size={24} className="mt-1 transition duration-300 ease-in-out" />
      </button>
      <div onClick={(): void => setShow(false)} className={'w-screen z-30 h-screen fixed left-0 top-0 bg-black/50 transition duration-300 ease-linear ' + (show ? 'opacity-100' : 'opacity-0 pointer-events-none')}></div>
      <nav className={'z-40 fixed top-0 lg:static lg:translate-y-0 transition ease duration-500 left-0 w-full text-white bg-[#090909] lg:bg-transparent ' + (show ? '-translate-y-5' : '-translate-y-96')}>
        <ul className='flex lg:gap-10 lg:flex-row lg:justify-between flex-col items-center gap-6 py-8 lg:py-0'>
          <h2 className="lg:hidden font-bold text-2xl">Cloud <span className="text-[#CF2C2C]">Skinchanger</span></h2>
          {pages.map(page => (
            <Link key={page.id} onClick={(): void => setActive(page.id)} className={page.isActive ? 'font-bold text-white' : 'font-semibold text-[#D2D2D2]'} to={page.url}>{page.title}</Link>
          ))}
          {currentUser ? <Button type='secondary' onClick={(): void => navigate('profile')}>Профиль</Button> : <Button type='secondary' onClick={(): void => handleClick()}>Авторизоваться</Button>}
        </ul>
      </nav>
      <Modal active={isModal} setActive={showModal} />
    </div >
  )
}

export default Nav