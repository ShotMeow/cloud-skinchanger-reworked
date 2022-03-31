import React, { useState } from 'react'
import { Calculator } from '../../HomePage/Billing/Calculator/Calculator'
import { AiOutlineUser } from 'react-icons/ai'
import History from './History/History'
import Settings from './Settings/Settings'
import { useNavigate } from 'react-router-dom'
import { IUserComponent } from './data.interface'

interface INavData {
    id: number
    title: string
    component: any
    isActive: boolean
}

const NavData: INavData[] = [
    {
        id: 1,
        title: 'Подписка',
        component: <Calculator />,
        isActive: true
    },
    {
        id: 2,
        title: 'История',
        component: <History />,
        isActive: false
    },
    {
        id: 3,
        title: 'Настройки',
        component: <Settings />,
        isActive: false
    },
]

const User: React.FC<IUserComponent> = ({ user }) => {
    const [navigation, setNavigation] = useState<INavData[]>(NavData)
    const chooseComponent = (id: number) => {
        const copy = [...navigation]
        copy.forEach(elem => {
            if (elem.id === id) {
                elem.isActive = true
            } else {
                elem.isActive = false
            }
        })
        setNavigation(copy)
    }

    const currentNavElem = navigation.find(elem => elem.isActive === true)
    const currentComponent = currentNavElem?.component

    const navigate = useNavigate()

    const exit = () => {
        localStorage.removeItem('current_user')
        navigate('/')
    }

    return (
        <div className="container mx-auto flex flex-col lg:items-start lg:flex-row text-center lg:text-left my-10 gap-5">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start sm:justify-center gap-6">
                {user?.avatar ? <img src={user.avatar} alt="avatar" /> : <div className="w-56 h-56 bg-[#0f0f0f] flex items-center rounded-xl justify-center"><AiOutlineUser size={64} />
                </div>}
                <div className="flex flex-col gap-6 items-center sm:items-start mt-6">
                    {NavData.map(elem => (<button key={elem.id} onClick={(): void => chooseComponent(elem.id)} className={elem.isActive ? 'text-2xl text-white font-bold' : 'text-xl text-[#8D8D8D] font-normal'}>{elem.title}</button>))}
                    <button onClick={(): void => exit()} className='text-xl text-[#8D8D8D] font-normal'>Выход</button>
                </div>
            </div>
            <div className="mt-10 lg:mt-0 w-full lg:w-3/4">
                <h2 className="font-bold text-2xl">{user?.login}</h2>
                <p className="text-[#8D8D8D]">{user?.email}</p>
                {currentComponent}
            </div>
        </div>
    )
}

export default User