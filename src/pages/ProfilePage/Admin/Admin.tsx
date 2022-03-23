import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IUserComponent } from '../User/data.interface'
import { AiOutlineUser } from 'react-icons/ai'
import { useAppSelector } from '../../../store/hooks'
import { ITariff } from '../../HomePage/Billing/Tariffs/data.interface'

const Admin: React.FC<IUserComponent> = ({ user }) => {
    const navigate = useNavigate()
    const exit = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    const date = new Date()

    const calcDate = (tariff: any) => {
        date.setDate(date.getDate() + tariff.duration)
        return date.toLocaleDateString()
    }

    const users = useAppSelector(state => state.users.users)
    const tariffs = useAppSelector(state => state.tariffs.tariffs)

    return (
        <div className="container mx-auto flex flex-col lg:items-start lg:flex-row text-center lg:text-left my-10 gap-5">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start sm:justify-center gap-6">
                {user?.avatar ? <img src={user.avatar} alt="avatar" /> : <div className="w-56 h-56 bg-[#0f0f0f] flex items-center rounded-xl justify-center"><AiOutlineUser size={64} />
                </div>}
                <div className="flex flex-col gap-6 items-center sm:items-start mt-6">
                    <button onClick={(): void => exit()} className='text-2xl text-left font-bold'>Действующие <br /> подписки</button>
                    <button onClick={(): void => exit()} className='text-xl text-[#8D8D8D] font-normal'>Выход</button>
                </div>
            </div>
            <div className="mt-10 lg:mt-0 w-full lg:w-3/4">
                <h2 className="font-bold text-2xl">{user?.login}</h2>
                <p className="text-[#8D8D8D]">{user?.email}</p>
                <div className='flex flex-col mt-6 gap-7'>
                    {tariffs.map(tariff => (
                        <div key={tariff.id}>
                            <div className='bg-[#0E0E0E] z-10 flex justify-between items-center rounded-t-lg pr-10'>
                                <h3 className='font-medium text-xl bg-[#151515] py-6 px-10 rounded-l-lg'>ID заказа: {tariff.id}</h3>
                                <h3 className='font-medium text-xl'>{users.find(user => user.id === tariff.user_id)?.login}</h3>
                                <h3 className='font-medium text-xl'>Действует до: {calcDate(tariff)}</h3>
                            </div>
                            <div className={'bg-[#010101] w-full z-0 flex justify-between items-center rounded-b-lg py-4 px-10'}>
                                <h4 className='font-medium text-lg'>Тип: {tariff.type}</h4>
                                <h4 className='font-medium text-lg'>Кастомные скины: {tariff.custom ? 'Есть' : 'Нету'}</h4>
                                <h4 className='font-medium text-lg'>Видимость для друзей: {tariff.friend_list ? 'Есть' : 'Нету'}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Admin